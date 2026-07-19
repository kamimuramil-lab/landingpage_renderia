// pequeno helper pra rodar forEach em NodeLists de forma compatível
function cada(lista, fn) { Array.prototype.forEach.call(lista, fn); }

// ---------- Comparadores antes/depois (arrastar) ----------
function iniciarComparador(el) {
  const antes = el.querySelector('.img-antes');
  const linha = el.querySelector('.linha');
  const alca = el.querySelector('.alca');
  let arrastando = false;

  function mover(clientX) {
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    antes.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    linha.style.left = pct + '%';
    alca.style.left = pct + '%';
  }

  el.addEventListener('pointerdown', (e) => {
    arrastando = true;
    el.setPointerCapture(e.pointerId);
    mover(e.clientX);
  });
  el.addEventListener('pointermove', (e) => {
    if (arrastando) {
      e.preventDefault();
      mover(e.clientX);
    }
  });
  el.addEventListener('pointerup', () => arrastando = false);
  el.addEventListener('pointerleave', () => arrastando = false);

  // acessibilidade: setas do teclado quando focado
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'slider');
  el.setAttribute('aria-label', 'Comparador antes e depois -- arraste ou use as setas');
  let pctAtual = 50;
  el.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { pctAtual = Math.max(0, pctAtual - 5); aplicarPct(); }
    if (e.key === 'ArrowRight') { pctAtual = Math.min(100, pctAtual + 5); aplicarPct(); }
  });
  function aplicarPct() {
    antes.style.clipPath = `inset(0 ${100 - pctAtual}% 0 0)`;
    linha.style.left = pctAtual + '%';
    alca.style.left = pctAtual + '%';
  }
}
cada(document.querySelectorAll('.comparador, .galeria-comparador'), iniciarComparador);

// ---------- FAQ ----------
cada(document.querySelectorAll('.faq-item'), (item) => {
  const botao = item.querySelector('.faq-q');
  botao.addEventListener('click', () => {
    const jaAberto = item.classList.contains('aberto');
    cada(document.querySelectorAll('.faq-item.aberto'), (outro) => {
      if (outro !== item) outro.classList.remove('aberto');
    });
    item.classList.toggle('aberto', !jaAberto);
  });
});

// ---------- Revelar ao rolar ----------
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    cada(entradas, (entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visto');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  cada(document.querySelectorAll('.reveal'), (el) => observador.observe(el));
} else {
  cada(document.querySelectorAll('.reveal'), (el) => el.classList.add('visto'));
}

// ---------- Header: leve fundo sólido ao rolar ----------
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header.classList.add('rolado');
  else header.classList.remove('rolado');
});
