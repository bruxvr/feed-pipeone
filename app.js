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

    {
      "title": "Mark as unread",
      "description": "Lets agents flag conversations as unread, making it easier to revisit and prioritize important messages.",
      "time": "há 23h",
      "badge": "PO-202"
    },
    {
      "title": "Block transfer/resolve for other agents' tickets",
      "description": "Prevents agents from transferring or resolving tickets assigned to others, ensuring ticket ownership and accountability.",
      "time": "há 3h",
      "badge": "PO-703"
    },
    {
      "title": "Remove \"take over\" prompt",
      "description": "Removes the prompt asking if you want to take over a conversation already handled by another agent, streamlining workflow.",
      "time": "há 14h",
      "badge": "PO-755"
    },
    {
      "title": "Quick template access via slash",
      "description": "Instantly access frequently used message templates by typing \"/\" in the message field, speeding up responses.",
      "time": "há 1 dia(s)",
      "badge": "PO-653"
    },
    {
      "title": "Display channel next to profile picture",
      "description": "Displays the communication channel icon next to each contact’s profile photo, improving visual clarity and context.",
      "time": "há 18h",
      "badge": "PO-926"
    },
    {
      "title": "Agent MT name toggle",
      "description": "Allows admins to enable or disable the display of the agent's MT name in global settings for more customization.",
      "time": "há 2 dia(s)",
      "badge": "PO-178"
    },
    {
      "title": "Automated responses 2.0 – name & email order + languages",
      "description": "Collects name and email in a defined order and supports multiple languages in automated responses, enhancing data quality and user experience.",
      "time": "há 11h",
      "badge": "PO-678"
    },
    {
      "title": "Automated responses 2.0 – flows & decision trees",
      "description": "Enables the creation of complex decision trees and flows, allowing chatbots to handle more scenarios automatically.",
      "time": "há 3 dia(s)",
      "badge": "PO-390"
    },
    {
      "title": "Automated responses 3.0 – stop after 3 incorrect attempts",
      "description": "Automatically halts automation after three failed attempts, reducing user frustration and improving accuracy.",
      "time": "há 7h",
      "badge": "PO-834"
    },
    {
      "title": "Automated responses 3.0 – ask & overwrite CRM name",
      "description": "Allows the system to ask for and update the CRM name, even if one already exists, ensuring up-to-date information.",
      "time": "há 6h",
      "badge": "PO-717"
    },
    {
      "title": "Chatbot – site auto-direct",
      "description": "Automatically routes web chat conversations to the correct school, reducing manual intervention and errors.",
      "time": "há 4 dia(s)",
      "badge": "PO-663"
    },
    {
      "title": "Chatbot – widget visual adjustments",
      "description": "Adds new visual improvements to the site widget, making interactions more intuitive and appealing.",
      "time": "há 12h",
      "badge": "PO-1301"
    },
    {
      "title": "Kanban – sort contacts by most recent",
      "description": "Displays contacts in the Kanban board from the most recent to the oldest, helping agents focus on new leads.",
      "time": "há 22h",
      "badge": "PO-697"
    },
    {
      "title": "Kanban – dynamic initial column",
      "description": "Adds a dynamic initial column that automatically gathers all open conversations, ensuring no new lead is missed.",
      "time": "há 5h",
      "badge": "PO-657"
    },
    {
      "title": "Kanban – limit view by agent + filter combo for managers",
      "description": "Restricts agents to view only their own conversations, while managers and admins get advanced filtering options.",
      "time": "há 1 dia(s)",
      "badge": "PO-655/788"
    },
    {
      "title": "Kanban – use contact box layout + tags",
      "description": "Uses the same contact box design from the conversations screen in Kanban, now with visible tags for better organization.",
      "time": "há 17h",
      "badge": "PO-700"
    },
    {
      "title": "Kanban 3.0 – complete redesign",
      "description": "Introduces a fully redesigned Kanban board, offering a modern, intuitive, and efficient user experience.",
      "time": "há 6 dia(s)",
      "badge": "PO-693..."
    },
    {
      "title": "Kanban 3.1 – mark as unread (react)",
      "description": "Lets users mark a conversation as unread with a simple click, closing the screen and updating icons instantly.",
      "time": "há 8h",
      "badge": "PO-786"
    },
    {
      "title": "Kanban 3.1 – remove \"+\" option per column",
      "description": "Removes the add contact \"+\" from each column, centralizing the action in a single top button for cleaner navigation.",
      "time": "há 2 dia(s)",
      "badge": "PO-706"
    },
    {
      "title": "Kanban 3.2 – slash command in conversations",
      "description": "Enables use of slash commands within conversations, speeding up actions and improving productivity.",
      "time": "há 9h",
      "badge": "PO-828"
    },
    {
      "title": "Kanban 3.2 – horizontal scroll for small screens",
      "description": "Adds a horizontal scroll bar at the top for laptops and smaller screens, making navigation smoother.",
      "time": "há 21h",
      "badge": "PO-833"
    },
    {
      "title": "Kanban 3.2 – top filter (status, unread, teams)",
      "description": "Introduces a top filter for conversation status, unread, unassigned, and teams, making it easier to manage pipelines.",
      "time": "há 3 dia(s)",
      "badge": "PO-698"
    },
    {
      "title": "Kanban 3.3 – UX for small screens",
      "description": "Optimizes the Kanban interface for small screens, showing more leads and columns at once.",
      "time": "há 13h",
      "badge": "PO-839"
    },
    {
      "title": "Kanban 3.3 – remove contact from pipeline",
      "description": "Lets users remove a contact from the pipeline, keeping boards organized and up to date.",
      "time": "há 15h",
      "badge": "PO-775"
    },
    {
      "title": "Kanban 3.3 – edit/create dynamic columns",
      "description": "Allows users to add or edit columns in the Kanban, customizing the workflow to their needs.",
      "time": "há 4 dia(s)",
      "badge": "PO-774"
    },
    {
      "title": "Kanban 3.3 – add new contact (no timeline)",
      "description": "Enables adding a new contact directly to the Kanban, even if they have no previous timeline or conversation.",
      "time": "há 6h",
      "badge": "PO-851"
    },
    {
      "title": "Kanban 3.3 – restrict remove contact to manager/admin",
      "description": "Restricts the ability to remove contacts from the pipeline to managers and admins for better governance.",
      "time": "há 7h",
      "badge": "PO-894"
    },
    {
      "title": "Kanban 3.1 – contact name search",
      "description": "Lets users quickly find contacts by typing their name in the Kanban search field.",
      "time": "há 1 dia(s)",
      "badge": "PO-699"
    },
    {
      "title": "Kanban – filter when switching sub-account",
      "description": "Automatically applies filters when switching sub-accounts in the pipeline, saving time and clicks.",
      "time": "há 19h",
      "badge": "PO-891"
    },
    {
      "title": "Kanban – search with underscore in name",
      "description": "Supports searching for contacts whose names contain underscores, improving search flexibility.",
      "time": "há 22h",
      "badge": "PO-912"
    },
    {
      "title": "Kanban – search with only 2 characters",
      "description": "Allows searching for contacts with names as short as two characters, increasing accessibility.",
      "time": "há 11h",
      "badge": "PO-928"
    },
    {
      "title": "Kanban – move contact to first column after taking over",
      "description": "Automatically moves a contact to the first column after an agent takes over from a dynamic column.",
      "time": "há 2 dia(s)",
      "badge": "PO-895"
    },
    {
      "title": "Kanban – prompt when sending message to new contact",
      "description": "Prompts the agent to take ownership when sending a message to a new contact, ensuring accountability.",
      "time": "há 3h",
      "badge": "PO-898"
    },
    {
      "title": "Kanban – refresh pipeline after taking over",
      "description": "Instantly refreshes the pipeline for all agents when a conversation is taken over, keeping everyone updated.",
      "time": "há 12h",
      "badge": "PO-900"
    },
    {
      "title": "Kanban – move contact after forwarding from dynamic col",
      "description": "Automatically moves the contact to the first column after forwarding from a dynamic column.",
      "time": "há 20h",
      "badge": "PO-915"
    },
    {
      "title": "Kanban – migrate conversation to correct team",
      "description": "Ensures conversations are moved to the correct team when forwarded, improving organization and tracking.",
      "time": "há 5 dia(s)",
      "badge": "PO-941"
    },
    {
      "title": "Kanban – audio message processing fix",
      "description": "Fixes an issue where the previous conversation reloads when sending an audio message and switching contacts.",
      "time": "há 2h",
      "badge": "PO-958"
    },
    {
      "title": "Kanban 3.5 – update stage from contact profile",
      "description": "Lets agents view and update the pipeline stage directly from the contact’s profile sidebar.",
      "time": "há 23h",
      "badge": "PO-321"
    },
    {
      "title": "Kanban 3.5 – log pipeline moves in timeline",
      "description": "Automatically logs pipeline stage changes in the contact’s timeline for better tracking.",
      "time": "há 1 dia(s)",
      "badge": "PO-856"
    },
    {
      "title": "Kanban 3.5 – react only on contact, not list",
      "description": "Applies reactions only to the contact, not the entire list, avoiding unnecessary refreshes.",
      "time": "há 6 dia(s)",
      "badge": "PO-854/791"
    },
    {
      "title": "Kanban 3.5 – filter by kanban stage in conversations",
      "description": "Adds a filter by kanban stage directly in the conversations screen, making it easier to organize work.",
      "time": "há 9h",
      "badge": "PO-789"
    },
    {
      "title": "Kanban 3.5 – create contact from pipeline",
      "description": "Lets users create a new contact straight from the pipeline when not found in search, saving time.",
      "time": "há 4 dia(s)",
      "badge": "PO-855"
    },
    {
      "title": "Kanban 3.5 – font size adjustment for screen size",
      "description": "Adjusts font size dynamically for different screen sizes, improving readability and UX.",
      "time": "há 7h",
      "badge": "PO-927"
    },
    {
      "title": "Kanban 3.5 – performance evolution",
      "description": "Brings significant performance improvements to the new version, making the system faster and more reliable.",
      "time": "há 13h",
      "badge": "PO-884"
    },
    {
      "title": "WABA – \"button\" type for templates",
      "description": "Enables sending WhatsApp templates with interactive buttons, increasing engagement.",
      "time": "há 17h",
      "badge": "PO-681"
    },
    {
      "title": "WABA – adjust MT link to plain text",
      "description": "Converts MT links in the message box to plain text, improving clarity and reducing errors.",
      "time": "há 3 dia(s)",
      "badge": "PO-836"
    },
    {
      "title": "WABA – display session time per contact",
      "description": "Shows the session time for each contact (closed, open, or ongoing), providing better context for agents.",
      "time": "há 6h",
      "badge": "PO-922"
    },
    {
      "title": "WhatsApp – direct integration",
      "description": "Connects directly to WhatsApp without intermediaries, improving performance and reducing costs.",
      "time": "há 2 dia(s)",
      "badge": "PO-950"
    },
    {
      "title": "Instagram – new integration format",
      "description": "Updates the Instagram integration process to align with Meta’s latest changes, making setup easier.",
      "time": "há 10h",
      "badge": "PO-1013"
    },
    {
      "title": "WABA – series of template sending fixes",
      "description": "Delivers a series of fixes for template sending issues caused by recent Meta updates, ensuring reliability.",
      "time": "há 5h",
      "badge": "908, etc"
    },
    {
      "title": "Triggers – move pipe stage on tag",
      "description": "Automatically moves a contact’s pipeline stage when a specific tag is added, streamlining automation.",
      "time": "há 2 dia(s)",
      "badge": "PO-666"
    },
    {
      "title": "Triggers – performance & logic improvements",
      "description": "Introduces performance and logic enhancements to triggers, including anti-loop protections.",
      "time": "há 18h",
      "badge": "783, etc"
    },
    {
      "title": "Triggers – condition operators (and, or, not)",
      "description": "Enables use of logical operators (and, or, not) in triggers for more flexible automations.",
      "time": "há 19h",
      "badge": "PO-745"
    },
    {
      "title": "Triggers – timing after last message",
      "description": "Sends automated messages after a defined period since the last message, improving follow-up.",
      "time": "há 4 dia(s)",
      "badge": "PO-424"
    },
    {
      "title": "Inbox tabs – new filter concept",
      "description": "Introduces tabs to filter conversations by all, queue, or my conversations, making navigation easier.",
      "time": "há 1 dia(s)",
      "badge": "PO-981"
    },
    {
      "title": "Templates – slash optimization for large volume",
      "description": "Optimizes template search and filtering when using slash commands with a large number of templates.",
      "time": "há 8h",
      "badge": "PO-897"
    }
  ]
};

  "helpSuggestions": [
    {"category": "integration", "title": "Exemplo", "priority": "medium"},
    {"category": "settings", "title": "Alterar configurações de usuário", "priority": "low"},
    {"category": "troubleshooting", "title": "Exemplo", "priority": "medium"},
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

