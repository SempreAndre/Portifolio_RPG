import './style.css';

// ---- Base de Dados de Exemplo para Teste ----
const projects = [
  {
    id: 1,
    title: 'Cratera do coffekat',
    description: 'Desenvolvido para cadeira de dispositivos mobile usando flutter em grupo. Um exemplo de loja virtual que tem o armazenamento de seus dados no firebase.',
    image: '/public/coffeKat.jpeg',
    link: 'https://github.com/marialuisamatos/devMobile',
    pos: { top: '73.2%', left: '40.7%' } // Posição movida mais para o canto superior esquerdo
  },
  {
    id: 2,
    title: 'Test Castle',
    description: 'Projeto de testes automatizados onde simula um sistema de login e cadastro de usuários realizando testes unitarios e de estress usando selenium.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/andre-franca/api-rest',
    pos: { top: '72.8%', left: '15.8%' } // Posição movida para o terço inferior
  },
  {
    id: 3,
    title: 'Mausoleu dos Classify',
    description: 'Projeto para entender sistemas de alta segurança e classificação de acesso.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/andre-franca/portifolio',
    pos: { top: '52.5%', left: '63.2%' } // Posição movida para a extrema direita
  },
  {
    id: 4,
    title: 'YouLise',
    description: 'Projeto para aprender o uso da api, onde é possivel consultar videos do youtube e seus metadados, os colocando para serem analisados por uma IA podendo gerar resumos, tags e até mesmo ideias de post. Como também entender o publico atravez da classificação de comentarios.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/andre-franca/portifolio',
    pos: { top: '31.2%', left: '54.8%' } // Posição movida para a extrema direita
  }
];

// ---- Elementos do DOM ----
const mapContainer = document.getElementById('map-container');
const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');

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
  modalDesc.textContent = project.description;
  modalImage.src = project.image;
  modalLink.href = project.link;

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

// Suporte para fechar guiando o 'Esq' padrão de UX avançada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---- Boot Incial ----
document.addEventListener('DOMContentLoaded', () => {
  generateMapMarkers();
});

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
});
