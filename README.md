# Site Dra. Beatriz Demarchi

Site institucional da Dra. Beatriz Demarchi, Biomédica Esteta especializada em harmonização facial e íntima, com atendimento em Dourados, MS.

## Objetivo

Apresentar a profissional, seus tratamentos, avaliações públicas e resultados reais, conduzindo visitantes ao agendamento pelo WhatsApp.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel para a hospedagem principal
- GitHub Pages como hospedagem legada

## Instalação e execução

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run build:vercel
npm run build:github
```

## Deploy

- Projeto Vercel: `drabeatrizdemarchi`
- Domínio esperado: `https://drabeatrizdemarchi.vercel.app`
- Repositório: `https://github.com/somosnext/somosnext.github.io`
- GitHub Pages legado: `https://somosnext.github.io/drabeatriz/`

O deploy da Vercel usa `vercel.json` e o script `build:vercel`.

## Estrutura principal

- `app/`: página, layout e estilos
- `public/`: identidade visual e fotos autorizadas
- `prompts/`: requisitos e decisões relevantes
- `db/`, `worker/` e `.openai/`: infraestrutura legada do Sites, mantida para histórico

## Serviços externos

- WhatsApp para agendamento
- Instagram profissional
- Perfil público de avaliações no Google
- Vercel e GitHub

Nenhum segredo deve ser versionado. Variáveis opcionais são documentadas em `.env.example`.
