# Luvia — Site institucional

Landing page em Next.js (App Router) + TypeScript + Tailwind CSS para a Luvia,
agência de social media, marketing digital e criação de conteúdo.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Como adicionar um novo trabalho ao portfólio

Não é preciso alterar nenhum componente nem integrar API alguma.

1. Coloque a imagem do trabalho em `public/images/portfolio/`.
2. Abra `src/data/portfolio.ts` e adicione um novo objeto ao array, por exemplo:

```ts
{
  id: 7,
  title: "Nome do cliente",
  category: "Categoria do serviço",
  description: "Descrição curta do trabalho.",
  image: "/images/portfolio/imagem07.jpg",
  instagram1: "https://instagram.com/perfil-do-cliente",
  // instagram2 é opcional — se não existir, o botão não aparece
}
```

O componente `Portfolio` lê o array automaticamente e gera os cards.

## Ajustando contato e o link do WhatsApp

Edite `src/lib/constants.ts`:

- `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE`
- `INSTAGRAM_URL`, `EMAIL`, `ADDRESS`
- `DEVELOPER_URL` — link do crédito "Desenvolvido por Foregato" no rodapé

## Imagens de placeholder

As imagens em `public/images/` (hero e portfólio) são SVGs de placeholder,
gerados para manter o layout funcional sem depender de nenhuma API externa.
Basta substituí-las por fotos reais, mantendo os mesmos nomes de arquivo, ou
apontar `image` (em `portfolio.ts`) para o novo arquivo.

## Estrutura

```
src/
├── app/            → rotas, layout raiz e estilos globais
├── components/     → um componente por arquivo, sem lógica de dados
├── data/           → portfolio.ts e services.ts (única fonte dos dados)
├── lib/            → constantes globais (contato, links, crédito)
├── utils/          → funções utilitárias pequenas
└── assets/         → ícones e logo em SVG
```
"# luvia" 
