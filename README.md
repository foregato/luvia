# Luvia Marketing Digital — Site institucional

Site em Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

```
app/
  layout.tsx         → fontes (Fraunces + Inter) e metadata
  page.tsx            → composição das seções
  api/instagram/       → rota que serve o feed (portfólio + depoimentos)
  api/contact/          → rota do formulário de contato (stub)
components/
  Hero, About, Services, Portfolio, Feedbacks, Contact, Navbar, Footer
  ui/GradientOrb.tsx   → elemento assinatura (halo de luz)
  ui/InstagramGrid.tsx → grid reutilizável que consome /api/instagram
data/
  services.ts, mock-instagram.ts
lib/
  instagram.ts         → cliente da Instagram Graph API
```

## Identidade visual

A paleta segue os tons pedidos (lilás, roxo, azul escuro), definidos como
tokens no `tailwind.config.ts`:

- `ink` `#0D0817` — fundo principal escuro
- `midnight` `#1B1140` — seções escuras alternativas
- `azure` `#2A2570` — azul escuro de apoio
- `violet` `#7C4DFF` — roxo de destaque (CTAs, ícones)
- `lilac` `#C9A9F7` — lilás de destaque (títulos em itálico, hovers)
- `paper` `#F6F3FC` — fundo claro (Sobre, Portfólio) e texto sobre fundo escuro

**Assim que você me enviar o arquivo da logo**, ajusto esses hex exatos para
bater 100% com a marca (e insiro a logo no lugar do texto "Luvia" da Navbar).

## Conectando o feed real do Instagram

Hoje as seções Portfólio e Feedbacks mostram dados de exemplo (arquivo
`data/mock-instagram.ts`) porque nenhuma credencial foi configurada. Para
ativar o feed automático de verdade:

1. A conta do Instagram da agência precisa ser **profissional** (Business
   ou Creator) e estar vinculada a uma **Página do Facebook**.
2. Crie um app em https://developers.facebook.com/ e configure o produto
   **Instagram Graph API**.
3. Gere um **token de acesso de longa duração** (long-lived access token)
   e pegue o **ID da conta do Instagram** — o próprio painel de
   desenvolvedores do Meta gera esses dois valores.
4. Copie `.env.example` para `.env.local` e preencha:
   ```
   INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
   INSTAGRAM_USER_ID=seu_id_aqui
   ```
5. Reinicie o servidor. A rota `/api/instagram` passa a buscar as
   publicações reais automaticamente (cache de 1h).

### Como a seção Feedbacks decide quais posts mostrar

Como a API do Instagram não distingue "post normal" de "depoimento",
a forma mais simples é marcar isso na própria legenda: sempre que
publicar um depoimento de cliente, inclua a hashtag definida em
`INSTAGRAM_TESTIMONIAL_TAG` (padrão: `#depoimentoluvia`). A rota filtra
automaticamente os posts que contêm essa tag.

> O token de longa duração expira em ~60 dias e precisa ser renovado
> periodicamente (a documentação da Meta tem o endpoint de refresh).
> Para produção, o ideal é automatizar essa renovação com um cron job.

## Formulário de contato

`app/api/contact/route.ts` hoje só valida e loga o envio. Para receber
os leads de verdade, plugue ali um serviço de e-mail (Resend, SendGrid)
ou grave em uma planilha/CRM — há um `TODO` marcando o ponto exato.

## Antes de publicar

- Trocar `WHATSAPP_NUMBER` em `components/Contact.tsx` pelo número real.
- Trocar `ola@luvia.digital` pelo e-mail real.
- Substituir o bloco placeholder de `components/About.tsx` pela foto
  real da fundadora (`/public/fundadora.jpg`).
- Ajustar o nome da fundadora e o texto de "Sobre" com a história real,
  se o texto de exemplo não refletir a agência com precisão.
