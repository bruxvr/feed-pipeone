// Application data
const appData = {
  "channels": [
    {"name": "Meta", "status": "online", "uptime": "99.9%", "lastChecked": "há 1 min"},
    {"name": "WhatsApp", "status": "online", "uptime": "99.1%", "lastChecked": "há 2 min"},
    {"name": "OpenAI", "status": "warning", "uptime": "98.5%", "lastChecked": "há 5 min"},
    {"name": "AWS", "status": "online", "uptime": "99.9%", "lastChecked": "há 3 min"},
    {"name": "Google Cloud", "status": "offline", "uptime": "97.2%", "lastChecked": "há 15 min"}
  ],
  "metrics": {
    "conversasAbertas": 23,
    "conversasResolvidas": 156,
    "conversasEmPausa": 7,
    "conversasEmAndamento": 12,
    "mensagensNaoLidas": 45
  },
  "notifications": [
    {"type": "info", "title": "Atualização de Sistema", "message": "Nova versão disponível", "time": "10 min atrás"},
    {"type": "warning", "title": "Limite de API", "message": "OpenAI próximo ao limite", "time": "25 min atrás"},
    {"type": "success", "title": "Backup Concluído", "message": "Backup automático realizado", "time": "1h atrás"},
    {"type": "error", "title": "Falha de Conexão", "message": "Google Cloud apresentou instabilidade", "time": "2h atrás"}
  ],
  "timeline": [
    {"title": "Novo Recurso PLG", "description": "Automação de follow-up implementada", "time": "há 2h", "badge": "NOVO"},
    {"title": "Workshop Gratuito", "description": "Como otimizar conversões", "time": "há 4h", "badge": "GRÁTIS"},
    {"title": "Upgrade Disponível", "description": "Plano Pro com 50% de desconto", "time": "há 6h", "badge": "PRO"},
    {"title": "Relatório Mensal", "description": "Análise de performance disponível", "time": "há 1 dia", "badge": "NOVO"},
    {"title": "Integração API", "description": "Nova integração com Slack", "time": "há 2 dias", "badge": "NOVO"},
    {"title": "Webinar PLG", "description": "Estratégias de crescimento", "time": "há 3 dias", "badge": "GRÁTIS"}
  ],
  "helpSuggestions": [
    {"category": "integration", "title": "Como integrar nova API?", "priority": "low"},
    {"category": "integration", "title": "Configurar webhook", "priority": "medium"},
    {"category": "settings", "title": "Alterar configurações de usuário", "priority": "low"},
    {"category": "settings", "title": "Gerenciar permissões", "priority": "high"},
    {"category": "troubleshooting", "title": "Resolver erro de conexão", "priority": "medium"},
    {"category": "troubleshooting", "title": "Problemas de sincronização", "priority": "low"}
  ],
  "menuItems": [
    {"id": "dashboard", "label": "Dashboard", "icon": "🏠", "active": true},
    {"id": "conversas", "label": "Conversas", "icon": "💬", "active": false},
    {"id": "pipeline", "label": "Pipeline", "icon": "📊", "active": false},
    {"id": "bulk", "label": "Bulk", "icon": "📦", "active": false},
    {"id": "contatos", "label": "Contatos", "icon": "👥", "active": false},
    {"id": "relatorios", "label": "Relatórios", "icon": "📈", "active": false},
    {"id": "automacoes", "label": "Automações", "icon": "⚙️", "active": false},
    {"id": "configuracoes", "label": "Configurações", "icon": "🔧", "active": false}
  ],
  "user": {
    "name": "Admin",
    "role": "Usuário",
    "avatar": "👤"
  }
};

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const appLayout = document.querySelector('.app-layout');
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const notificationBtn = document.getElementById('notificationBtn');
const notificationDropdown = document.getElementById('notificationDropdown');
const notificationList = document.getElementById('notificationList');
const needHelpBtn = document.getElementById('needHelpBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const sendHelpBtn = document.getElementById('sendHelpBtn');
const helpInput = document.getElementById('helpInput');
const helpFeedback = document.getElementById('helpFeedback');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeStatusGrid();
    initializeMetrics();
    initializeNotifications();
    initializeTimeline();
    initializeHelpModal();
    initializeSidebar();
    setupEventListeners();
});

// Initialize sidebar navigation
function initializeSidebar() {
    // Set initial active state
    const activeSection = 'dashboard';
    showContentSection(activeSection);
    setActiveNavItem(activeSection);
}

// Show content section
function showContentSection(sectionId) {
    // Hide all content sections
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(`${sectionId}-content`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Set active navigation item
function setActiveNavItem(sectionId) {
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the selected nav link
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

// Handle navigation
function handleNavigation(sectionId) {
    showContentSection(sectionId);
    setActiveNavItem(sectionId);
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('show');
    }
}

// Toggle sidebar (for mobile)
function toggleSidebar() {
    sidebar.classList.toggle('show');
}

// Populate status grid
function initializeStatusGrid() {
    const statusGrid = document.getElementById('statusGrid');
    
    appData.channels.forEach(channel => {
        const statusItem = document.createElement('div');
        statusItem.className = 'status-item';
        
        statusItem.innerHTML = `
            <div class="status-indicator ${channel.status}"></div>
            <div class="status-details">
                <h3>${channel.name}</h3>
                <p>Uptime: ${channel.uptime}</p>
                <p>Última verificação: ${channel.lastChecked}</p>
            </div>
        `;
        
        statusGrid.appendChild(statusItem);
    });
}

// Populate metrics
function initializeMetrics() {
    const metricsGrid = document.getElementById('metricsGrid');
    
    const metricsConfig = [
        { key: 'conversasAbertas', label: 'Conversas Abertas', class: 'abertas' },
        { key: 'conversasResolvidas', label: 'Conversas Resolvidas', class: 'resolvidas' },
        { key: 'conversasEmPausa', label: 'Conversas em Pausa', class: 'pausa' },
        { key: 'conversasEmAndamento', label: 'Conversas em Andamento', class: 'andamento' },
        { key: 'mensagensNaoLidas', label: 'Mensagens Não Lidas', class: 'nao-lidas' }
    ];
    
    metricsConfig.forEach(metric => {
        const metricCard = document.createElement('div');
        metricCard.className = 'metric-card';
        
        metricCard.innerHTML = `
            <div class="metric-number ${metric.class}">${appData.metrics[metric.key]}</div>
            <p class="metric-label">${metric.label}</p>
        `;
        
        metricsGrid.appendChild(metricCard);
    });
}

// Populate notifications
function initializeNotifications() {
    appData.notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = `notification-item ${notification.type}`;
        
        notificationItem.innerHTML = `
            <h4>${notification.title}</h4>
            <p>${notification.message}</p>
            <div class="time">${notification.time}</div>
        `;
        
        notificationList.appendChild(notificationItem);
    });
}

// Populate timeline
function initializeTimeline() {
    const timeline = document.getElementById('timeline');
    
    appData.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const badgeClass = item.badge.toLowerCase().replace('ú', 'u').replace('á', 'a');
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${item.title}</h3>
                    <span class="timeline-badge ${badgeClass}">${item.badge}</span>
                </div>
                <p class="timeline-description">${item.description}</p>
                <div class="timeline-time">${item.time}</div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Initialize help modal with suggestions
function initializeHelpModal() {
    const categories = {
        'integration': 'Integração',
        'settings': 'Configurações', 
        'troubleshooting': 'Solução de Problemas'
    };
    
    Object.keys(categories).forEach(categoryKey => {
        const categoryContainer = document.querySelector(`[data-category="${categoryKey}"]`);
        const categoryTitle = categories[categoryKey];
        
        const suggestions = appData.helpSuggestions.filter(s => s.category === categoryKey);
        
        suggestions.forEach((suggestion, index) => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'help-suggestion';
            
            // Pre-select low priority items as specified
            const isChecked = suggestion.priority === 'low' ? 'checked' : '';
            const selectedClass = suggestion.priority === 'low' ? 'selected' : '';
            
            if (suggestion.priority === 'low') {
                suggestionDiv.classList.add('selected');
            }
            
            const suggestionId = `suggestion-${categoryKey}-${index}`;
            
            suggestionDiv.innerHTML = `
                <input type="checkbox" id="${suggestionId}" ${isChecked}>
                <label for="${suggestionId}">${suggestion.title}</label>
                <span class="priority-badge ${suggestion.priority}">${suggestion.priority.toUpperCase()}</span>
            `;
            
            categoryContainer.appendChild(suggestionDiv);
            
            // Add click event to toggle selection
            suggestionDiv.addEventListener('click', function(e) {
                if (e.target.type !== 'checkbox') {
                    const checkbox = suggestionDiv.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                }
                
                suggestionDiv.classList.toggle('selected', suggestionDiv.querySelector('input[type="checkbox"]').checked);
            });
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Sidebar toggle for mobile
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSidebar();
        });
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            handleNavigation(sectionId);
        });
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('show');
        }
    });
    
    // Notification dropdown toggle
    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationDropdown.classList.toggle('show');
    });
    
    // Close notification dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
            notificationDropdown.classList.remove('show');
        }
    });
    
    // Need Help modal
    needHelpBtn.addEventListener('click', function() {
        modalOverlay.classList.add('show');
    });
    
    closeModalBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('show');
    });
    
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
    
    // Help form submission
    sendHelpBtn.addEventListener('click', function() {
        const message = helpInput.value.trim();
        
        if (message) {
            // Show feedback
            helpFeedback.textContent = 'Abrindo Alfredo...';
            helpFeedback.classList.add('show');
            
            // Disable button temporarily
            sendHelpBtn.disabled = true;
            sendHelpBtn.textContent = 'Enviando...';
            
            // Simulate opening Alfredo chat
            setTimeout(() => {
                helpFeedback.textContent = 'Alfredo foi aberto! Você será redirecionado em breve.';
                
                setTimeout(() => {
                    // Reset form
                    helpInput.value = '';
                    helpFeedback.classList.remove('show');
                    sendHelpBtn.disabled = false;
                    sendHelpBtn.textContent = 'Enviar';
                }, 2000);
            }, 1000);
        } else {
            // Show error if no message
            helpFeedback.textContent = 'Por favor, digite sua pergunta antes de enviar.';
            helpFeedback.classList.add('show');
            helpFeedback.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.1)';
            helpFeedback.style.color = 'var(--color-error)';
            helpFeedback.style.borderColor = 'rgba(var(--color-error-rgb), 0.2)';
            
            setTimeout(() => {
                helpFeedback.classList.remove('show');
                helpFeedback.style.backgroundColor = '';
                helpFeedback.style.color = '';
                helpFeedback.style.borderColor = '';
            }, 3000);
        }
    });
    
    // Allow Enter key to submit help form
    helpInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            sendHelpBtn.click();
        }
    });
    
    // ESC key to close modal and sidebar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalOverlay.classList.remove('show');
            notificationDropdown.classList.remove('show');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        }
    });
}

// Update notification badge count
function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    badge.textContent = appData.notifications.length;
}

// Call initial badge update
updateNotificationBadge();

// Export functions for potential external use
window.PipeOneApp = {
    handleNavigation,
    toggleSidebar,
    showContentSection,
    setActiveNavItem
};