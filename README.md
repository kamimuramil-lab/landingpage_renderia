# RENDERIA — Landing Page

Site estático (HTML/CSS/JS puro, sem build, sem dependências) pronto pra publicar.

## Estrutura

```
index.html
assets/
  css/style.css
  js/main.js
  img/            (todas as imagens já otimizadas pra web)
```

## Como colocar no ar (GitHub + Render.com — grátis)

**1. Suba pro GitHub**
- Crie um repositório novo (pode ser público ou privado) em github.com.
- Envie esta pasta inteira pra ele (pelo GitHub Desktop, ou arrastando os arquivos direto na interface web do GitHub em "Add file → Upload files").

**2. Conecte no Render.com**
- No painel do Render, clique em **New → Static Site**.
- Escolha o repositório que você acabou de criar.
- Configurações de build:
  - **Build Command**: deixe em branco (não precisa buildar nada)
  - **Publish directory**: `.` (a raiz do projeto, onde está o `index.html`)
- Clique em **Create Static Site**. Em cerca de 1 minuto o Render te dá uma URL tipo `renderia.onrender.com` já no ar, com HTTPS.

**3. (Opcional) Domínio próprio**
- Se você comprar um domínio (ex: `renderia.com.br` na registro.br), vá em **Settings → Custom Domains** no Render e siga as instruções — é só apontar o DNS do domínio pro Render.

## Editando depois

Qualquer alteração de texto é direto no `index.html` (procure pelo texto que quer mudar). Cada vez que você enviar uma alteração pro GitHub (`git push`, ou reenviando o arquivo pela interface web), o Render publica a versão nova sozinho, automaticamente, em menos de um minuto.

## Sobre os textos "Projeto 01", "Projeto 02"...

Os nomes reais dos projetos de clientes (que apareciam nos prints do app/plugin) foram trocados por nomes genéricos antes de qualquer coisa ir pro site, a seu pedido.
