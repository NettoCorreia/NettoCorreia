# Planejamento Capriolli · NC Comunicação

Painel mensal de conteúdo da Pizzaria Capriolli. Ele é otimizado para celular e também funciona no computador.

## Arquivos

- `index.html`: a interface (visual, animações e interações).
- `dados.js`: **todo o conteúdo do mês**. A atualização mensal é feita só aqui.
- `assets/`: logo da Capriolli e ícone.

## Como atualizar todo mês

1. Abra `dados.js`.
2. Copie o bloco do mês inteiro, de `{ id: "2026-12", …` até o `}` correspondente.
3. Cole a cópia no **início** da lista `meses` e altere `id`, `rotulo`, `numero` e os textos.
4. Tire o mês novo da lista `proximos`.

A página abre no primeiro mês da lista. Os meses anteriores continuam disponíveis no seletor do topo.

## Foto da pizza no topo

Salve um PNG com fundo transparente em `assets/pizza-calabresa.png`. Enquanto o arquivo não existir, a página mostra a logo da Capriolli no lugar.

## Capas dos Reels de referência

A página publicada mostra as capas pelo embed oficial do Instagram. Para usar uma capa fixa, salve a imagem em `assets/` e preencha o campo `capa` da referência, por exemplo `capa: "assets/ref01.jpg"`.

## Publicar

A pasta é um site estático. Ela pode ser publicada no GitHub Pages, na Vercel ou na Netlify, sem build.
