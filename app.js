// Dashboard PLG Application
class PLGDashboard {
  constructor() {
    this.data = {
      feedCards: [
        {
          id: "PO-202",
          type: "Nova Funcionalidade",
          color: "#22C55E",
          title: "Marcar como não lida",
          description:
            "Permite que agentes sinalizem conversas como não lidas, facilitando o acompanhamento e priorização de mensagens importantes.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Marcar+como+n%C3%A3o+lida",
        },

        {
          id: "PO-703",
          type: "Melhoria",
          color: "blue",
          title:
            "Bloquear transferência/resolução de tickets de outros agentes",
          description:
            "Impede que agentes transfiram ou resolvam tickets atribuídos a outros, garantindo propriedade e responsabilidade sobre os atendimentos.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Bloquear+transfer%C3%AAncia",
        },

        {
          id: "PO-755",
          type: "Melhoria de Fluxo",
          color: "#22C55E",
          title: "Retirar prompt 'deseja assumir'",
          description:
            "Remove o prompt que pergunta se deseja assumir uma conversa já em atendimento, tornando o fluxo mais ágil.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Retirar+prompt",
        },

        {
          id: "PO-653",
          type: "Nova Funcionalidade",
          color: "#22C55E",
          title: "Acesso rápido a templates via barra",
          description:
            "Permite acessar rapidamente templates de mensagens digitando '/' no campo de mensagem, acelerando as respostas.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Templates+via+Barra",
        },

        {
          id: "PO-926",
          type: "Melhoria",
          color: "blue",
          title: "Exibir canal junto à foto do perfil",
          description:
            "Exibe o ícone do canal de comunicação ao lado da foto do perfil de cada contato, melhorando a clareza visual e o contexto.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Exibir+Canal",
        },
        {
          id: "PO-424",
          type: "Nova Funcionalidade",
          color: "#22C55E",
          title: "Triggers – timing após última mensagem",
          description:
            "Envia mensagens automáticas após um período definido desde a última mensagem, melhorando o follow-up.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Triggers+Timing",
        },

        {
          id: "PO-981",
          type: "Nova Funcionalidade",
          color: "#22C55E",
          title: "Abas de inbox – novo conceito de filtro",
          description:
            "Introduz abas para filtrar conversas por todas, fila ou minhas, facilitando a navegação.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Inbox+Tabs",
        },

        {
          id: "PO-897",
          type: "Melhoria de Fluxo",
          color: "blue",
          title: "Templates – otimização do slash para grande volume",
          description:
            "Otimiza a busca e o filtro de templates ao usar comandos de barra com grande volume de templates.",
          image:
            "https://via.placeholder.com/320x180/22C55E/ffffff?text=Templates+Slash+Otimiza%C3%A7%C3%A3o",
        },
      ],
      latestNews: [
        {
          id: "news-1",
          title: "PipeOne atinge a marca de 1 milhão de usuários",
          timestamp: "1 hora atrás",
          thumbnail: "https://via.placeholder.com/40x40/4A154B/ffffff?text=S",
          content:
            "A comunidade PipeOne cresceu rapidamente, alcançando 1 milhão de usuários ativos. Agradecemos a todos pelo apoio contínuo e feedback valioso.",
        },
        {
          id: "news-2",
          title:
            "Meta está implementando atualizações e pode apresentar instabilidade",
          timestamp: "3 horas atrás",
          thumbnail: "https://via.placeholder.com/40x40/DC2626/ffffff?text=🔒",
          content:
            "A Meta anunciou que está implementando atualizações de segurança críticas. Durante este período, alguns usuários podem enfrentar instabilidades temporárias na plataforma. Nossa equipe está monitorando a situação de perto e trabalhando para minimizar qualquer impacto.",
        },
        {
          id: "news-3",
          title: "Lançamento de aplicativo mobile",
          timestamp: "5 horas atrás",
          thumbnail: "https://via.placeholder.com/40x40/059669/ffffff?text=📱",
          content:
            "Estamos animados em anunciar o lançamento do nosso novo aplicativo mobile, disponível para iOS e Android. Agora você pode acessar todas as funcionalidades do PipeOne diretamente do seu celular, facilitando a gestão de tarefas e comunicação em qualquer lugar.",
        },
        {
          id: "news-4",
          title: "Novo tutorial de onboarding ativo",
          timestamp: "8 horas atrás",
          thumbnail: "https://via.placeholder.com/40x40/7C3AED/ffffff?text=📚",
          content:
            "Lançamos um tutorial interativo para novos usuários com passo-a-passo completo das principais funcionalidades.",
        },
        {
          id: "news-5",
          title:
            "Marcio, CEO do PipeOne, foi convidado para palestrar na TEDx em 2026, que ocorrerá em Vancouver",
          timestamp: "3 dias atrás",
          thumbnail: "https://via.placeholder.com/40x40/DB2777/ffffff?text=🎨",
          content:
            "Marcio, CEO do PipeOne, foi convidado para compartilhar sua visão sobre o futuro da tecnologia e inovação. A palestra abordará como a PipeOne está moldando o futuro do trabalho colaborativo e a importância da comunidade no desenvolvimento de soluções tecnológicas.",
        },
        {
          id: "news-6",
          title: "Gabs fez mágica e agora tudo está mais rápido",
          timestamp: "1 dia atrás",
          thumbnail: "https://via.placeholder.com/40x40/B45309/ffffff?text=🏆",
          content:
            "Após otimizações de performance, o tempo de resposta do sistema foi reduzido em 50%. Agradecemos ao Gabs pela dedicação e trabalho árduo! Bruxo!",
        },
        {
          id: "news-7",
          title: "Google anuncia parceria com a startup PipeOne",
          timestamp: "2 dias atrás",
          thumbnail: "https://via.placeholder.com/40x40/EA580C/ffffff?text=📊",
          content:
            "Google e PipeOne firmaram uma parceria estratégica para integrar serviços de IA e machine learning, melhorando a análise de dados e insights para nossos usuários.",
        },
      ],
    };

    this.state = {
      sidebarCollapsed: false,
      newsOpen: true,
      activeFilter: "all",
      isMobile: window.innerWidth <= 768,
    };

    this.elements = {};
    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.renderCards();
    this.renderNews();
    this.setupInitialState();
    this.setupKeyboardNavigation();
  }

  cacheElements() {
    this.elements = {
      dashboardLayout: document.querySelector(".dashboard-layout"),
      hamburgerBtn: document.getElementById("hamburger-btn"),
      filterButtons: document.getElementById("filter-buttons"),
      cardsGrid: document.getElementById("cards-grid"),
      sidebarRight: document.getElementById("sidebar-right"),
      closeNewsBtn: document.getElementById("close-news-btn"),
      bellBtn: document.getElementById("bell-btn"),
      newsList: document.getElementById("news-list"),
      modalOverlay: document.getElementById("modal-overlay"),
      modalTitle: document.getElementById("modal-title"),
      modalBody: document.getElementById("modal-body"),
      modalCloseBtn: document.getElementById("modal-close-btn"),
      mobileOverlay: document.getElementById("mobile-overlay"),
      sidebarLeft: document.querySelector(".sidebar-left"),
      navLinks: document.querySelectorAll(".nav-link"),
    };
  }

  bindEvents() {
    // Hamburger menu toggle
    this.elements.hamburgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleSidebar();
    });

    // Filter buttons
    this.elements.filterButtons.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        e.preventDefault();
        this.handleFilterClick(e.target);
      }
    });

    // News sidebar controls
    this.elements.closeNewsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeNews();
    });

    this.elements.bellBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.openNews();
    });

    // Modal controls
    this.elements.modalCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeModal();
    });

    this.elements.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.elements.modalOverlay) {
        this.closeModal();
      }
    });

    // Mobile overlay
    this.elements.mobileOverlay.addEventListener("click", () => {
      this.closeMobileSidebar();
    });

    // Navigation links
    this.elements.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleNavigation(link);
      });
    });

    // Keyboard events
    document.addEventListener("keydown", (e) => {
      this.handleKeyboardEvents(e);
    });

    // Resize events
    window.addEventListener(
      "resize",
      this.debounce(() => {
        this.handleResize();
      }, 250)
    );
  }

  renderCards() {
    const filteredCards = this.getFilteredCards();
    console.log(
      "Rendering cards:",
      filteredCards.length,
      "cards for filter:",
      this.state.activeFilter
    );

    const cardsHTML = filteredCards
      .map((card) => this.createCardHTML(card))
      .join("");
    this.elements.cardsGrid.innerHTML = cardsHTML;

    // Add click events to cards
    this.elements.cardsGrid
      .querySelectorAll(".plg-card")
      .forEach((cardElement) => {
        cardElement.addEventListener("click", (e) => {
          e.preventDefault();
          const cardId = cardElement.dataset.cardId;
          const card = this.data.feedCards.find((c) => c.id === cardId);
          if (card) {
            this.openModal(card, "card");
          }
        });

        // Add keyboard support
        cardElement.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cardElement.click();
          }
        });
      });
  }

  createCardHTML(card) {
    return `
            <div class="plg-card" data-card-id="${card.id}" tabindex="0" role="button" aria-label="Abrir detalhes do ${card.title}">
                <div class="card-header">
                    <span class="card-badge">${card.id}</span>
                    <span class="card-tag" style="--tag-color: ${card.color}">${card.type}</span>
                </div>
                <div class="card-image" style="background-image: url('${card.image}')"></div>
                <div class="card-content">
                    <h3 class="card-title">${card.title}</h3>
                    <p class="card-description">${card.description}</p>
                </div>
            </div>
        `;
  }

  renderNews() {
    const newsHTML = this.data.latestNews
      .map((news) => this.createNewsHTML(news))
      .join("");
    this.elements.newsList.innerHTML = newsHTML;

    // Add click events to news items
    this.elements.newsList
      .querySelectorAll(".news-item")
      .forEach((newsElement) => {
        newsElement.addEventListener("click", (e) => {
          e.preventDefault();
          const newsId = newsElement.dataset.newsId;
          const news = this.data.latestNews.find((n) => n.id === newsId);
          if (news) {
            this.openModal(news, "news");
          }
        });

        // Add keyboard support
        newsElement.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            newsElement.click();
          }
        });
      });
  }

  createNewsHTML(news) {
    return `
            <div class="news-item" data-news-id="${news.id}" tabindex="0" role="button" aria-label="Abrir notícia: ${news.title}">
                <div class="news-thumbnail" style="background-image: url('${news.thumbnail}')"></div>
                <div class="news-content">
                    <h4 class="news-title-item">${news.title}</h4>
                    <span class="news-timestamp">${news.timestamp}</span>
                </div>
            </div>
        `;
  }

  getFilteredCards() {
    if (this.state.activeFilter === "all") {
      return this.data.feedCards;
    }

    const filterMap = {
      "nova-funcionalidade": "Nova Funcionalidade",
      melhoria: "Melhoria",
      correcao: "Correção",
      integracao: "Integração",
      beta: "Beta",
    };

    const filterType = filterMap[this.state.activeFilter];
    return this.data.feedCards.filter((card) => card.type === filterType);
  }

  handleFilterClick(button) {
    const filter = button.dataset.filter;
    console.log("Filter clicked:", filter);

    this.state.activeFilter = filter;

    // Update active states
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    // Re-render cards with animation
    this.animateCardsTransition(() => {
      this.renderCards();
    });

    // Announce filter change
    this.announceFilterChange(button.textContent);
  }

  animateCardsTransition(callback) {
    this.elements.cardsGrid.style.transition =
      "opacity 0.2s ease, transform 0.2s ease";
    this.elements.cardsGrid.style.opacity = "0";
    this.elements.cardsGrid.style.transform = "translateY(10px)";

    setTimeout(() => {
      callback();
      this.elements.cardsGrid.style.opacity = "1";
      this.elements.cardsGrid.style.transform = "translateY(0)";
    }, 200);
  }

  toggleSidebar() {
    console.log(
      "Toggle sidebar clicked, current state:",
      this.state.sidebarCollapsed
    );

    this.state.sidebarCollapsed = !this.state.sidebarCollapsed;

    if (this.state.isMobile) {
      this.elements.sidebarLeft.classList.toggle("mobile-open");
      this.elements.mobileOverlay.classList.toggle("active");
    } else {
      this.elements.dashboardLayout.classList.toggle(
        "sidebar-collapsed",
        this.state.sidebarCollapsed
      );
    }

    console.log("New sidebar state:", this.state.sidebarCollapsed);

    // Announce state change
    const state = this.state.sidebarCollapsed ? "colapsado" : "expandido";
    this.announce(`Menu lateral ${state}`);
  }

  closeNews() {
    this.state.newsOpen = false;
    this.elements.dashboardLayout.classList.add("news-closed");
    this.elements.bellBtn.classList.remove("hidden");
    this.announce("Painel de notícias fechado");
  }

  openNews() {
    this.state.newsOpen = true;
    this.elements.dashboardLayout.classList.remove("news-closed");
    this.elements.bellBtn.classList.add("hidden");
    this.announce("Painel de notícias aberto");
  }

  closeMobileSidebar() {
    this.elements.sidebarLeft.classList.remove("mobile-open");
    this.elements.mobileOverlay.classList.remove("active");
    this.state.sidebarCollapsed = true;
  }

  openModal(item, type) {
    const isCard = type === "card";

    this.elements.modalTitle.textContent = item.title;

    const modalContent = `
            ${
              isCard
                ? `
                <div class="modal-badge" style="background-color: ${item.color}; color: white; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-bottom: 16px; display: inline-block;">
                    ${item.id}
                </div>
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
            `
                : ""
            }
            <div style="margin-bottom: 16px;">
                <p style="font-size: 16px; line-height: 1.5; color: var(--color-text); margin: 0;">
                    ${isCard ? item.description : item.content}
                </p>
            </div>
            ${
              !isCard
                ? `
                <div style="font-size: 12px; color: var(--color-text-secondary);">
                    ${item.timestamp}
                </div>
            `
                : ""
            }
            <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
                <button class="btn btn--secondary" onclick="plgDashboard.closeModal()">Fechar</button>
                ${
                  isCard
                    ? '<button class="btn btn--primary">Ver detalhes</button>'
                    : ""
                }
            </div>
        `;

    this.elements.modalBody.innerHTML = modalContent;
    this.elements.modalOverlay.classList.remove("hidden");

    // Focus management
    setTimeout(() => {
      this.elements.modalCloseBtn.focus();
    }, 100);

    // Announce modal open
    this.announce(`Modal aberto: ${item.title}`);
  }

  closeModal() {
    this.elements.modalOverlay.classList.add("hidden");
    this.announce("Modal fechado");
  }

  handleNavigation(link) {
    // Update active states
    this.elements.navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    const menuType = link.dataset.menu;
    this.announce(
      `Navegando para ${link.querySelector(".nav-text").textContent}`
    );

    // Close mobile sidebar after navigation
    if (this.state.isMobile) {
      this.closeMobileSidebar();
    }
  }

  handleKeyboardEvents(e) {
    // ESC key closes modal or mobile sidebar
    if (e.key === "Escape") {
      if (!this.elements.modalOverlay.classList.contains("hidden")) {
        this.closeModal();
      } else if (
        this.state.isMobile &&
        this.elements.sidebarLeft.classList.contains("mobile-open")
      ) {
        this.closeMobileSidebar();
      }
    }
  }

  handleResize() {
    const wasMobile = this.state.isMobile;
    this.state.isMobile = window.innerWidth <= 768;

    if (wasMobile !== this.state.isMobile) {
      // Reset mobile states when switching between mobile/desktop
      if (this.state.isMobile) {
        this.elements.sidebarLeft.classList.remove("mobile-open");
        this.elements.mobileOverlay.classList.remove("active");
      } else {
        this.elements.dashboardLayout.classList.toggle(
          "sidebar-collapsed",
          this.state.sidebarCollapsed
        );
      }
    }
  }

  setupInitialState() {
    // Set initial filter state
    const activeFilterBtn = document.querySelector(".filter-btn.active");
    if (activeFilterBtn) {
      this.state.activeFilter = activeFilterBtn.dataset.filter;
    }

    // Apply initial sidebar state
    if (this.state.sidebarCollapsed && !this.state.isMobile) {
      this.elements.dashboardLayout.classList.add("sidebar-collapsed");
    }

    // Apply initial news state
    if (!this.state.newsOpen) {
      this.elements.dashboardLayout.classList.add("news-closed");
      this.elements.bellBtn.classList.remove("hidden");
    }
  }

  setupKeyboardNavigation() {
    // Keyboard navigation will be handled by individual event listeners
    // This ensures proper event handling for all interactive elements
  }

  announce(message) {
    // Create announcement for screen readers
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }

  announceFilterChange(filterName) {
    this.announce(`Filtro ativo: ${filterName}`);
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Public methods for debugging
  getCurrentState() {
    return { ...this.state };
  }

  resetState() {
    this.state = {
      sidebarCollapsed: false,
      newsOpen: true,
      activeFilter: "all",
      isMobile: window.innerWidth <= 768,
    };
    location.reload();
  }
}

// Initialize application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 PLG Dashboard initializing...");

  // Initialize the main application
  window.plgDashboard = new PLGDashboard();

  console.log("🚀 PLG Dashboard loaded successfully!");
  console.log("📊 Current state:", window.plgDashboard.getCurrentState());
  console.log(
    "⌨️  Keyboard shortcuts: ESC to close modals, Enter/Space on cards"
  );
  console.log(
    "🛠️  Debug commands: plgDashboard.resetState(), plgDashboard.getCurrentState()"
  );
});

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
  console.log("Navigation detected");
});

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("Page visible - refreshing data if needed");
  }
});

// Error handling
window.addEventListener("error", (event) => {
  console.error("PLG Dashboard Error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
});
