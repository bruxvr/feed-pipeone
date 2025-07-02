// Application data
const appData = {
  channels: [
    {"name": "Meta", "status": "online", "uptime": "99.9%", "lastChecked": "há 1 min"},
    {"name": "WhatsApp", "status": "online", "uptime": "99.1%", "lastChecked": "há 2 min"},
    {"name": "OpenAI", "status": "warning", "uptime": "98.5%", "lastChecked": "há 5 min"},
    {"name": "AWS", "status": "online", "uptime": "99.9%", "lastChecked": "há 3 min"},
    {"name": "Google Cloud", "status": "offline", "uptime": "97.2%", "lastChecked": "há 15 min"}
  ],
  metrics: {
    conversasAbertas: 23,
    conversasResolvidas: 156,
    conversasEmPausa: 7,
    conversasEmAndamento: 12,
    mensagensNaoLidas: 45
  },
  communications: [
    {"id": 1, "type": "announcement", "title": "Nova Funcionalidade Lançada", "message": "Sistema de pipeline 3.0 está disponível para todos os usuários.", "date": "2025-07-01T15:30:00", "author": "Admin"},
    {"id": 2, "type": "warning", "title": "Manutenção Programada", "message": "Sistema ficará indisponível das 2h às 4h para atualizações.", "date": "2025-07-01T10:15:00", "author": "TI"},
    {"id": 3, "type": "info", "title": "Dicas de Performance", "message": "Use os filtros do Kanban para melhorar sua produtividade.", "date": "2025-06-30T16:45:00", "author": "Admin"}
  ],
  hints: [
    {"id": 1, "title": "Atalho Rápido", "description": "Use '/' para acessar templates rapidamente nas conversas"},
    {"id": 2, "title": "Organização", "description": "Marque conversas como não lidas para revisitar depois"},
    {"id": 3, "title": "Produtividade", "description": "Use tags coloridas para categorizar seus contatos"},
    {"id": 4, "title": "Automação", "description": "Configure triggers para automatizar respostas frequentes"},
    {"id": 5, "title": "Pipeline", "description": "Arraste contatos entre colunas para atualizar status"}
  ],
  timeline: [
    {"title": "Mark as unread", "description": "Lets agents flag conversations as unread, making it easier to revisit and prioritize important messages.", "time": "há 23h", "badge": "PO-202", "category": "feature"},
    {"title": "Block transfer/resolve for other agents' tickets", "description": "Prevents agents from transferring or resolving tickets assigned to others, ensuring ticket ownership and accountability.", "time": "há 3h", "badge": "PO-703", "category": "security"},
    {"title": "Remove take over prompt", "description": "Removes the prompt asking if you want to take over a conversation already handled by another agent, streamlining workflow.", "time": "há 14h", "badge": "PO-755", "category": "improvement"},
    {"title": "Quick template access via slash", "description": "Instantly access frequently used message templates by typing / in the message field, speeding up responses.", "time": "há 1 dia(s)", "badge": "PO-653", "category": "feature"},
    {"title": "Display channel next to profile picture", "description": "Displays the communication channel icon next to each contact's profile photo, improving visual clarity and context.", "time": "há 18h", "badge": "PO-926", "category": "ui"}
  ],
  notifications: [
    {"type": "info", "title": "Atualização de Sistema", "message": "Nova versão disponível", "time": "10 min atrás"},
    {"type": "warning", "title": "Limite de API", "message": "OpenAI próximo ao limite", "time": "25 min atrás"},
    {"type": "success", "title": "Backup Concluído", "message": "Backup automático realizado", "time": "1h atrás"},
    {"type": "error", "title": "Falha de Conexão", "message": "Google Cloud apresentou instabilidade", "time": "2h atrás"}
  ]
};

// Application state
let state = {
  currentHintIndex: 0,
  hintsInterval: null,
  notificationsOpen: false,
  communicationFormOpen: false,
  deleteModalOpen: false,
  communicationToDelete: null
};

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  
  if (hours < 1) {
    const minutes = Math.floor(diff / (1000 * 60));
    return `há ${minutes} min`;
  } else if (hours < 24) {
    return `há ${hours}h`;
  } else {
    const days = Math.floor(hours / 24);
    return `há ${days} dia${days > 1 ? 's' : ''}`;
  }
}

function getNotificationIcon(type) {
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    success: '✅',
    error: '❌'
  };
  return icons[type] || 'ℹ️';
}

// Render functions
function renderStatusChannels() {
  const container = document.getElementById('statusChannels');
  container.innerHTML = appData.channels.map(channel => `
    <div class="status-item">
      <div class="status-item__indicator status-item__indicator--${channel.status}"></div>
      <div class="status-item__content">
        <h4 class="status-item__name">${channel.name}</h4>
        <p class="status-item__uptime">${channel.uptime} • ${channel.lastChecked}</p>
      </div>
    </div>
  `).join('');
}

function renderUserMetrics() {
  const container = document.getElementById('userMetrics');
  const metricsMap = {
    'conversasAbertas': 'Conversas Abertas',
    'conversasResolvidas': 'Conversas Resolvidas',
    'conversasEmPausa': 'Conversas em Pausa',
    'conversasEmAndamento': 'Conversas em Andamento',
    'mensagensNaoLidas': 'Mensagens Não Lidas'
  };

  container.innerHTML = Object.entries(appData.metrics).map(([key, value]) => `
    <div class="metric-card">
      <h3 class="metric-card__value">${value}</h3>
      <p class="metric-card__label">${metricsMap[key]}</p>
    </div>
  `).join('');
}

function renderCommunications() {
  const container = document.getElementById('communicationFeed');
  const sortedCommunications = [...appData.communications].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  container.innerHTML = sortedCommunications.map(comm => `
    <div class="communication-item communication-item--${comm.type}">
      <div class="communication-item__header">
        <h4 class="communication-item__title">${comm.title}</h4>
        <div class="communication-item__meta">
          <div>${comm.author}</div>
          <div>${formatDate(comm.date)}</div>
        </div>
      </div>
      <p class="communication-item__message">${comm.message}</p>
      ${comm.author === 'Admin' ? `
        <button class="communication-item__delete" data-id="${comm.id}" title="Excluir comunicado">
          🗑️
        </button>
      ` : ''}
    </div>
  `).join('');

  // Add event listeners to delete buttons
  container.querySelectorAll('.communication-item__delete').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const commId = parseInt(e.target.getAttribute('data-id'));
      showDeleteModal(commId);
    });
  });
}

function renderHints() {
  const container = document.getElementById('hintsContent');
  const dotsContainer = document.getElementById('hintsDots');
  
  // Render hint content
  container.innerHTML = `
    <div class="hint-item active">
      <h4 class="hint-item__title">${appData.hints[state.currentHintIndex].title}</h4>
      <p class="hint-item__description">${appData.hints[state.currentHintIndex].description}</p>
    </div>
  `;
  
  // Render navigation dots
  dotsContainer.innerHTML = appData.hints.map((_, index) => `
    <div class="hint-dot ${index === state.currentHintIndex ? 'active' : ''}" data-index="${index}"></div>
  `).join('');
  
  // Add click listeners to dots
  dotsContainer.querySelectorAll('.hint-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      changeHint(index);
    });
  });
}

function renderTimeline() {
  const container = document.getElementById('timelineContent');
  container.innerHTML = appData.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-item__header">
        <span class="timeline-item__badge timeline-item__badge--${item.category}">${item.badge}</span>
        <span class="timeline-item__time">${item.time}</span>
      </div>
      <h4 class="timeline-item__title">${item.title}</h4>
      <p class="timeline-item__description">${item.description}</p>
    </div>
  `).join('');
}

function renderNotifications() {
  const container = document.getElementById('notificationsList');
  container.innerHTML = appData.notifications.map(notification => `
    <div class="notification-item">
      <div class="notification-item__icon notification-item__icon--${notification.type}">
        ${getNotificationIcon(notification.type)}
      </div>
      <div class="notification-item__content">
        <h4 class="notification-item__title">${notification.title}</h4>
        <p class="notification-item__message">${notification.message}</p>
        <span class="notification-item__time">${notification.time}</span>
      </div>
    </div>
  `).join('');
}

// Hints management
function changeHint(index) {
  if (index !== undefined) {
    state.currentHintIndex = index;
  } else {
    state.currentHintIndex = (state.currentHintIndex + 1) % appData.hints.length;
  }
  
  const hintItem = document.querySelector('.hint-item');
  if (hintItem) {
    hintItem.classList.remove('active');
    setTimeout(() => {
      renderHints();
      resetHintsProgress();
    }, 250);
  }
}

function startHintsRotation() {
  // Clear any existing interval
  if (state.hintsInterval) {
    clearInterval(state.hintsInterval);
  }
  
  // Start new interval (30 seconds = 30000ms)
  state.hintsInterval = setInterval(() => {
    changeHint();
  }, 30000);
  
  resetHintsProgress();
}

function resetHintsProgress() {
  const progressBar = document.getElementById('hintsProgress');
  if (progressBar) {
    progressBar.style.width = '0%';
    setTimeout(() => {
      progressBar.style.width = '100%';
    }, 100);
  }
}

// Communication management
function toggleCommunicationForm() {
  const form = document.getElementById('communicationForm');
  state.communicationFormOpen = !state.communicationFormOpen;
  form.style.display = state.communicationFormOpen ? 'block' : 'none';
  
  if (state.communicationFormOpen) {
    document.getElementById('communicationTitle').focus();
  }
}

function addCommunication() {
  const type = document.getElementById('communicationType').value;
  const title = document.getElementById('communicationTitle').value.trim();
  const message = document.getElementById('communicationMessage').value.trim();
  
  if (!title || !message) {
    alert('Por favor, preencha o título e a mensagem.');
    return;
  }
  
  const newCommunication = {
    id: Date.now(),
    type: type,
    title: title,
    message: message,
    date: new Date().toISOString(),
    author: 'Admin'
  };
  
  appData.communications.unshift(newCommunication);
  renderCommunications();
  
  // Clear form
  document.getElementById('communicationTitle').value = '';
  document.getElementById('communicationMessage').value = '';
  toggleCommunicationForm();
}

// Delete communication management
function showDeleteModal(commId) {
  state.communicationToDelete = commId;
  state.deleteModalOpen = true;
  const modal = document.getElementById('deleteModal');
  modal.style.display = 'flex';
}

function hideDeleteModal() {
  state.deleteModalOpen = false;
  state.communicationToDelete = null;
  const modal = document.getElementById('deleteModal');
  modal.style.display = 'none';
}

function confirmDeleteCommunication() {
  if (state.communicationToDelete) {
    // Remove communication from data
    appData.communications = appData.communications.filter(
      comm => comm.id !== state.communicationToDelete
    );
    
    // Re-render communications
    renderCommunications();
    
    // Hide modal
    hideDeleteModal();
  }
}

// Notifications management
function toggleNotifications() {
  const dropdown = document.getElementById('notificationsDropdown');
  state.notificationsOpen = !state.notificationsOpen;
  dropdown.classList.toggle('open', state.notificationsOpen);
}

// Event listeners
function setupEventListeners() {
  // Notifications toggle
  document.getElementById('notificationsToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNotifications();
  });
  
  // Close notifications when clicking outside
  document.addEventListener('click', (e) => {
    if (state.notificationsOpen && !e.target.closest('.notifications')) {
      toggleNotifications();
    }
  });
  
  // Communication form handlers
  document.getElementById('addCommunication').addEventListener('click', toggleCommunicationForm);
  document.getElementById('postCommunication').addEventListener('click', addCommunication);
  document.getElementById('cancelCommunication').addEventListener('click', toggleCommunicationForm);
  
  // Delete modal handlers
  document.getElementById('cancelDelete').addEventListener('click', hideDeleteModal);
  document.getElementById('confirmDelete').addEventListener('click', confirmDeleteCommunication);
  
  // Close modal when clicking overlay
  document.getElementById('deleteModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      hideDeleteModal();
    }
  });
  
  // Sidebar navigation
  document.querySelectorAll('.sidebar__nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sidebar__nav-item').forEach(nav => nav.classList.remove('sidebar__nav-item--active'));
      item.classList.add('sidebar__nav-item--active');
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.notificationsOpen) {
        toggleNotifications();
      }
      if (state.communicationFormOpen) {
        toggleCommunicationForm();
      }
      if (state.deleteModalOpen) {
        hideDeleteModal();
      }
    }
  });
}

// Initialize application
function init() {
  renderStatusChannels();
  renderUserMetrics();
  renderCommunications();
  renderHints();
  renderTimeline();
  renderNotifications();
  setupEventListeners();
  startHintsRotation();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);