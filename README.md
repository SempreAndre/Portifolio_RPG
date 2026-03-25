# Portfólio RPG - Estrutura e Decisões Técnicas

Este projeto é um portfólio interativo focado no frontend, construído em torno de uma temática de mapa de RPG. Os projetos desenvolvidos são mapeados como pontos de exploração (cidades ou masmorras). O objetivo principal é demonstrar os conhecimentos práticos aplicando estéticas modernas e código limpo.

## Arquitetura e Estrutura Principal

O repositório baseia-se em tecnologias nativas organizadas sob a ferramenta Vite.

- **index.html**: Ponto de entrada que centraliza e orquestra a estrutura básica (head e container principal para injeção via DOM). Não possui poluição visual, separando responsabilidade.
- **src/style.css**: Único arquivo de injeção de estilo. Utiliza fortemente Variáveis CSS (Custom Properties) na raiz para garantir consistência em paleta de cores, consistindo em Preto (fundo absorvente), Cinza (componentes translúcidos) e Roxo (destaques em neon). Estilização moderna como flexbox, pseudo-elementos flutuantes, e "glassmorphism" foram adotados.
- **src/main.js**: Gerencia a lista de projetos, renderiza de forma dinâmica as localidades ao processar eventos de clique e controla as pop-ups flutuantes.

## Escolhas Técnicas e Decisões

1. **Ausência de Banco de Dados ou Framework Pesado**
   Para garantir fácil escalabilidade e foco irrestrito na segurança do ambiente em produção, o escopo foi fechado como um "Static Site" puro (Vanilla JS). Isso torna a vulnerabilidade do site tendendo a zero para visitantes na internet, além de favorecer deploys muito rápidos (via Vercel ou GitHub Pages).

2. **Gerenciador Vite**
   Em vez de estruturar scripts nativos lado-a-lado que perdem hot-reload no navegador, a stack inicia via Vite Vanilla. Ele engloba e transpiliza o JS e o CSS, criando arquivos compactos durante o processo de build para produção, aumentando significativamente a pontuação final no LightHouse (performance do Google) do site entregue ao recrutador.

3. **Posicionamento e Eixo Flutuante (%)**
   Foi optado por marcar posições dos "Pins" interagíveis adotando `left` e `top` estritamente percentuais, limitando quebras quando testado em aparelhos Mobile. Isso confere robustez, pois o cenário responsivo e as coordenadas do pin acompanham matematicamente o redimensionamento da janela do navegador sem depender arduamente de Media Queries complexas.

4. **Object-fit e Aspect Ratio para Thumbnails**
   A caixa dos resumos dos projetos foi construída sob os pilares do CSS moderno. Inicialmente pensado com altura fixa, a decisão madura foi forçar restrição elástica e fluida adaptativa (`height: auto` e `max-height` proporcional à tela), de forma que imagens importadas do repositório tenham conformidade natural, não esticando e não achatando o trabalho apresentado.
