import './style.css';

// ---- Base de Dados de Exemplo para Teste ----
const projects = [
  {
    id: 1,
    title: 'Cratera do coffekat',
    description: 'Desenvolvido para cadeira de dispositivos mobile usando flutter em grupo. Um exemplo de loja virtual que tem o armazenamento de seus dados no firebase.',
    image: import.meta.env.BASE_URL + 'coffekat.jpeg',
    link: 'https://github.com/marialuisamatos/devMobile',
    pos: { top: '73.2%', left: '40.7%' } // Posição movida mais para o canto superior esquerdo
  },
  {
    id: 2,
    title: 'Test Castle',
    description: 'Projeto de testes automatizados onde simula um sistema de login e cadastro de usuários realizando testes unitarios e de estress usando selenium.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/SempreAndre/FICR-Q-A',
    pos: { top: '72.8%', left: '15.8%' } // Posição movida para o terço inferior
  },
  {
    id: 3,
    title: 'Mausoleu dos Classify',
    description: 'Projeto para entender sistemas de alta segurança e classificação de acesso.',
    image: import.meta.env.BASE_URL + 'Trust_doc.png',
    link: 'https://github.com/SempreAndre/SISTEMA_CLASSIFY_5P',
    pos: { top: '52.5%', left: '63.2%' } // Posição movida para a extrema direita
  },
  {
    id: 4,
    title: 'O mundo gelado das APIS "YouLise"',
    description: 'Projeto para aprender o uso da api, onde é possivel consultar videos do youtube e seus metadados, os colocando para serem analisados por uma IA podendo gerar resumos, tags e até mesmo ideias de post. Como também entender o publico atravez da classificação de comentarios.',
    image: import.meta.env.BASE_URL + 'youlise.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '31.2%', left: '54.8%' } // Posição movida para a extrema direita
  },
  {
    id: 5,
    title: 'Prologo',
    description: 'Objetivos: As dificuldades que forjaram minha jornada até aqui definiram parte do que quero ser a diante.<br><br>1º Ser um profissional de TI com conhecimento em diversas areas, como desenvolvimento, segurança, infraestrutura e dados. Tendo uma visão geral de como funciona um sistema e como ele pode ser melhorado.<br><br>2º Facilitar a vida das pessoas ao meu redor por meio da tecnologia.<br><br>3º Me tornar um grande mestre de RPG, tendo visitado varios mundos e tendo as minhas conquistas sendo comentadas aos ventos.',
    image: import.meta.env.BASE_URL + 'prologo.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '56.6%', left: '47.8%' } // Posição movida para a extrema direita
  },
  {
    id: 6,
    title: 'Experiencia',
    description: 'Todo jogador de rpg que se prese tem horas de aventuras memoraveis que ecoaram na vida daqueles presentes, aqui estão algumas das minhas:<br><br> 1º Administrador de sites em wordpress na prefeitura de Jaboatão - 2020 - 2021<br><br> 2º Estagio em TI na empresa GrupoMlmenezes - 2021 - 2023<br><br> 3º Assistente de TI na empresa GrupoMlemenezes - 2023 - 2025<br><br> 4º Analista de TI JR na empresa GrupoMlemenezes - 2025 - Atual',
    image: import.meta.env.BASE_URL + 'experiencia.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '60.1%', left: '32.2%' } // Posição movida para a extrema direita
  },
  {
    id: 7,
    title: 'Conhecimento',
    description: 'Nem toda jornadas tem apenas lutas, tem estudos, dedicação e muito esforço, aqui estão alguns dos locais que passei para me tornar quem sou hoje:<br><br> 1º Universidade Federal Rural de Pernambuco - Engenharia Eletrônica(imcompleto) - 2017.2 - 2022<br><br> 2º Tecnologo em Analise e desenvolvimento de sistemas - Faculdade Catolica Imaculada da Conceição - 2024 - 2026',
    image: import.meta.env.BASE_URL + 'conhecimento.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '88.7%', left: '58.2%' } // Posição movida para a extrema direita
  },
  {
    id: 8,
    title: 'O futuro',
    description: 'Uma jornada nunca tem fim e a minha está apenas começando, nenhum bom mago fica satisfeito com as magias que possui, então aqui estão algumas habilidades que pretendo adquirir ou melhorar no futuro:<br><br> 1º Melhorar minhas habilidades em pythom, pois é uma liguagem muito versatil e excelente para analise de dados.<br><br> 2º Aprimorar minhas habilidades sociais e o meu mental pois toda jornada tem altos e baixos e o importante é como lidamos com isso.<br><br> 3º Adquirir mais experiencia em cibersegurança, pois é uma area que tem crescido muito e creio que será essencial para o futuro.',
    image: import.meta.env.BASE_URL + 'futuro.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '20.3%', left: '44.7%' } // Posição movida para a extrema direita
  },
  {
    id: 9,
    title: 'Onde estou agora',
    description: 'Para me encontrar é simples,me mande uma mensagem pelo Linkedin:<br><br> <a href="https://www.linkedin.com/in/andr%C3%A9-de-fran%C3%A7a-5572811b3/">https://www.linkedin.com/in/andr%C3%A9-de-fran%C3%A7a-5572811b3/</a>',
    image: import.meta.env.BASE_URL + 'contato.png',
    link: 'https://github.com/SempreAndre/youlise',
    pos: { top: '35.0%', left: '13.3%' } // Posição movida para a extrema direita
  }
];

// ---- Elementos do DOM ----
const mapContainer = document.getElementById('map-container');
const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');

// Elementos do Modal de Boas-vindas
const welcomeModal = document.getElementById('welcome-modal');
const startBtn = document.getElementById('start-btn');

// Elementos Internos do Modal
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

// ---- Lógica de Construção do Mapa ----
function generateMapMarkers() {
  projects.forEach(project => {
    // Componente do marcador pai
    const marker = document.createElement('div');
    marker.className = 'marker';

    // Adiciona classe verde para projetos de história / objetivos (ID 5 ao 8)
    if (project.id >= 5 && project.id <= 9) {
      marker.classList.add('marker-green');
    }

    marker.style.top = project.pos.top;
    marker.style.left = project.pos.left;

    // Rótulo que aparece flutuando acima da masmorra
    const label = document.createElement('span');
    label.className = 'marker-label';
    label.textContent = project.title;
    marker.appendChild(label);

    // Evento para saltar modal da tela com dados completos
    marker.addEventListener('click', () => openModal(project));

    // Adicionado ao container centralizado
    mapContainer.appendChild(marker);
  });
}

// ---- Eventos do Modal ----
function openModal(project) {
  // Preencher dados dinâmicos
  modalTitle.textContent = project.title;
  modalDesc.innerHTML = project.description;
  modalImage.src = project.image;

  if (project.id >= 5 && project.id <= 9) {
    modalLink.style.display = 'none';
  } else {
    modalLink.style.display = 'inline-block';
    modalLink.href = project.link;
  }

  // Efeito CSS de animação ao remover a classe hidden
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

// Fechamento de botões e clicks externos
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  // Caso ocorra o clique na "sombra transparente" por fora do vidro, fecha.
  if (e.target === modal) {
    closeModal();
  }
});

// Fecha modal de boas-vindas ao clicar fora
welcomeModal.addEventListener('click', (e) => {
  if (e.target === welcomeModal) {
    welcomeModal.classList.add('hidden');
  }
});

// Suporte para fechar guiando o 'Esq' padrão de UX avançada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    if (!welcomeModal.classList.contains('hidden')) {
      welcomeModal.classList.add('hidden');
    }
  }
});

// ---- Boot Incial ----
document.addEventListener('DOMContentLoaded', () => {
  generateMapMarkers();

  // Exibir a telinha de boas-vindas com delay para criar o efeito de descida
  setTimeout(() => {
    welcomeModal.classList.remove('hidden');
  }, 300);
});

// Evento para fechar a tela de boas-vindas e iniciar a exploração
startBtn.addEventListener('click', () => {
  welcomeModal.classList.add('hidden');
});

/*
// ---- Ferramenta de Mapeamento Mágico (Apenas para te ajudar!) ----
// Clica em qualquer lugar do mapa interativo aberto no navegador e ele te dará a posição.
mapContainer.addEventListener('click', (e) => {
  // Ignora se estiver clicando num marcador que já existe
  if (e.target.closest('.marker') || e.target.closest('.modal')) return;

  const rect = mapContainer.getBoundingClientRect();
  const leftPercent = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const topPercent = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);

  // Cria uma mini-etiqueta roxa com as posições mágicas na tela
  const toast = document.createElement('div');
  toast.style.position = 'absolute';
  toast.style.top = e.clientY + 'px';
  toast.style.left = (e.clientX + 20) + 'px';
  toast.style.background = 'var(--bg-panel)';
  toast.style.border = '1px solid var(--color-accent)';
  toast.style.color = '#fff';
  toast.style.padding = '8px 12px';
  toast.style.borderRadius = '8px';
  toast.style.fontFamily = 'var(--font-body)';
  toast.style.fontSize = '14px';
  toast.style.pointerEvents = 'none';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0 0 15px var(--color-accent)';
  toast.style.backdropFilter = 'blur(5px)';
  toast.innerHTML = `<strong>📍 Ponto Marcado:</strong><br>top: '${topPercent}%'<br>left: '${leftPercent}%'`;

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 6000);
});*/