// Criar partículas douradas elegantes
function createElegantParticles() {
    const elegantContainer = document.getElementById('elegant-particles');
    const elegantCount = 45;

    for (let i = 0; i < elegantCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'elegant-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 22 + 's';
        particle.style.animationDuration = (Math.random() * 12 + 18) + 's';
        particle.style.opacity = Math.random() * 0.4 + 0.3;
        elegantContainer.appendChild(particle);
    }
}

// Criar partículas neurais laranja
function createNeuralParticles() {
    const neuralContainer = document.getElementById('neural-particles');
    const neuralCount = 35;

    for (let i = 0; i < neuralCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'neural-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 28 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        particle.style.opacity = Math.random() * 0.3 + 0.2;
        neuralContainer.appendChild(particle);
    }
}

// Efeito 3D harmônico
function addHarmonicInteraction() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${deltaY * 3}deg) 
                rotateY(${deltaX * 3}deg) 
                translateZ(8px)
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
        });
    });
}

// Parallax harmônico
function handleHarmonicParallax() {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
        const speed = 0.03 + (index * 0.008);
        const yPos = -(scrolled * speed);
        if (Math.abs(yPos) < 12) {
            card.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// Narrativa de conquistas sofisticadas com linguagem executiva
const modalData = {
    agentes: {
        title: "Intelligence Suite • Performance Recuperada",
        metrics: [
            { value: "R$ 127k", label: "Receita Recuperada (Mensal)" },
            { value: "2.8s", label: "Tempo Resposta Otimizado" },
            { value: "89%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "Receita Recuperada: Projeção vs Realizado",
                type: "bars"
            },
            right: {
                title: "Eficiência Operacional Atual",
                type: "circular",
                value: "89%"
            }
        },
        insights: [
            {
                icon: "📊",
                text: "Meta Q4 85% concluída - 23 dias restantes",
                impact: "Projeção de superação em 127% mantendo ritmo atual"
            },
            {
                icon: "⚡",
                text: "Receita noturna recuperada representa 34% do total mensal",
                impact: "Sistema operacional eliminou constraint de horário comercial"
            },
            {
                icon: "🎯",
                text: "Tempo de resposta otimizado de 8.5h para 2.8s",
                impact: "Conversão recuperada em 247% sobre baseline anterior"
            }
        ],
        investment: {
            range: "R$ 180k - 450k",
            period: "Implementação 4-8 meses",
            roi: "ROI médio: 340% em 12 meses"
        },
        cta: "Solicitar Qualificação"
    },
    desenvolvimento: {
        title: "Performance Engine • Conversão Otimizada",
        metrics: [
            { value: "0.7s", label: "Load Time Conquistado" },
            { value: "R$ 89k", label: "Conversão Recuperada (Mensal)" },
            { value: "91%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "Conversão Otimizada: Baseline vs Performance",
                type: "bars"
            },
            right: {
                title: "Índice de Performance Atual",
                type: "circular",
                value: "91%"
            }
        },
        insights: [
            {
                icon: "📈",
                text: "Meta Q4 91% executada - previsão de fechamento 134%",
                impact: "Performance sustentada indica superação de R$ 156k"
            },
            {
                icon: "⚡",
                text: "Load time otimizado eliminou 89% do abandono técnico",
                impact: "Cada 100ms economizado representa R$ 3.2k mensais"
            },
            {
                icon: "🎭",
                text: "Credibilidade visual estabelecida em primeiros 50ms",
                impact: "Conversão inicial recuperada sustenta pipeline robusto"
            }
        ],
        investment: {
            range: "R$ 120k - 380k",
            period: "Desenvolvimento 3-6 meses",
            roi: "ROI médio: 280% em 10 meses"
        },
        cta: "Solicitar Qualificação"
    },
    apps: {
        title: "Mobile Dominance • Engagement Maximizado",
        metrics: [
            { value: "6.8h", label: "Tempo Médio Diário" },
            { value: "R$ 134k", label: "LTV Adicional Recuperado" },
            { value: "87%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "Engagement Móvel: Evolução Trimestral",
                type: "bars"
            },
            right: {
                title: "Índice de Retenção Atual",
                type: "circular",
                value: "87%"
            }
        },
        insights: [
            {
                icon: "📱",
                text: "Meta Q4 87% atingida - 19 dias para conclusão",
                impact: "Trajetória indica fechamento 142% acima do planejado"
            },
            {
                icon: "🔄",
                text: "LTV médio recuperado em R$ 134k por usuário ativo",
                impact: "Presença móvel estabelece vantagem competitiva sustentável"
            },
            {
                icon: "🎯",
                text: "Push notifications calibradas: 78% taxa de abertura",
                impact: "Timing otimizado recupera 67% dos abandonos naturais"
            }
        ],
        investment: {
            range: "R$ 200k - 580k",
            period: "Desenvolvimento 5-9 meses",
            roi: "ROI médio: 420% em 14 meses"
        },
        cta: "Solicitar Qualificação"
    },
    infraestrutura: {
        title: "Digital Fortress • Disponibilidade Assegurada",
        metrics: [
            { value: "99.94%", label: "Uptime Estabelecido" },
            { value: "R$ 267k", label: "Custos Evitados (Anual)" },
            { value: "93%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "Disponibilidade: Padrão vs Conquistado",
                type: "bars"
            },
            right: {
                title: "Índice de Segurança Atual",
                type: "circular",
                value: "93%"
            }
        },
        insights: [
            {
                icon: "🛡️",
                text: "Meta Q4 93% consolidada - finalização projetada 156%",
                impact: "Infraestrutura robusta assegura operação ininterrupta"
            },
            {
                icon: "⚡",
                text: "Custos operacionais otimizados em R$ 267k anuais",
                impact: "Escalabilidade inteligente elimina desperdício estrutural"
            },
            {
                icon: "🔒",
                text: "Zero incidentes de segurança registrados em 347 dias",
                impact: "Arquitetura defensiva mantém integridade operacional"
            }
        ],
        investment: {
            range: "R$ 350k - 750k",
            period: "Implementação 6-12 meses",
            roi: "ROI médio: 290% em 18 meses"
        },
        cta: "Solicitar Qualificação"
    },
    estrategias: {
        title: "Strategic Intelligence • Decisões Otimizadas",
        metrics: [
            { value: "R$ 456k", label: "ROI Adicional (Anual)" },
            { value: "4.2m", label: "Antecipação de Mercado" },
            { value: "88%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "ROI Estratégico: Evolução Anualizada",
                type: "bars"
            },
            right: {
                title: "Índice de Precisão Atual",
                type: "circular",
                value: "88%"
            }
        },
        insights: [
            {
                icon: "🎯",
                text: "Meta Q4 88% executada - projeção de superação 178%",
                impact: "Intelligence preditiva mantém vantagem competitiva sustentada"
            },
            {
                icon: "💰",
                text: "ROI estratégico recuperado em R$ 456k anualizados",
                impact: "Precificação científica otimiza margem sem comprometer volume"
            },
            {
                icon: "🔮",
                text: "Antecipação de mercado estabelecida em 4.2 meses",
                impact: "Insights comportamentais revelam oportunidades latentes"
            }
        ],
        investment: {
            range: "R$ 280k - 650k",
            period: "Consultoria 4-10 meses",
            roi: "ROI médio: 380% em 15 meses"
        },
        cta: "Solicitar Qualificação"
    },
    automacao: {
        title: "Process Liberation • Eficiência Conquistada",
        metrics: [
            { value: "7.4h", label: "Tempo Liberado (Diário)" },
            { value: "R$ 178k", label: "Valor Criado (Anual)" },
            { value: "85%", label: "Meta Q4 Atual" }
        ],
        charts: {
            left: {
                title: "Eficiência Operacional: Ganhos Acumulados",
                type: "bars"
            },
            right: {
                title: "Índice de Automação Atual",
                type: "circular",
                value: "85%"
            }
        },
        insights: [
            {
                icon: "⚡",
                text: "Meta Q4 85% consolidada - 28 dias para fechamento 167%",
                impact: "Automação estabelece operação autônoma sustentável"
            },
            {
                icon: "🚀",
                text: "Valor operacional criado em R$ 178k anualizados",
                impact: "Sistemas liberaram capacidade para estratégia de alto valor"
            },
            {
                icon: "🎭",
                text: "Follow-up sistemático: 12 toques automatizados por lead",
                impact: "Nurturing otimizado elimina vazamento no pipeline"
            }
        ],
        investment: {
            range: "R$ 160k - 420k",
            period: "Automação 3-7 meses",
            roi: "ROI médio: 450% em 12 meses"
        },
        cta: "Solicitar Qualificação"
    }
};

// Funções do dashboard modal
function openModal(serviceType) {
    const overlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const data = modalData[serviceType];
    
    if (!data) return;
    
    // Gerar conteúdo do dashboard
    let content = `
        <div class="dashboard-header">
            <h2 class="dashboard-title">${data.title}</h2>
            <div class="dashboard-status">
                <div class="status-dot"></div>
                <span>Análise em Tempo Real</span>
            </div>
        </div>
        <div class="dashboard-body">
            <div class="metrics-overview">
    `;
    
    // Métricas principais
    data.metrics.forEach(metric => {
        content += `
            <div class="metric-card">
                <span class="metric-value">${metric.value}</span>
                <span class="metric-label">${metric.label}</span>
            </div>
        `;
    });
    
    content += `
            </div>
            
            <div class="chart-container">
                <h3 class="chart-title">${data.charts.left.title}</h3>
                <div class="simple-chart">
                    <div class="chart-bar" style="height: 48px;" data-value="45%"></div>
                    <div class="chart-bar" style="height: 78px;" data-value="73%"></div>
                    <div class="chart-bar" style="height: 108px;" data-value="89%"></div>
                    <div class="chart-bar" style="height: 120px;" data-value="95%"></div>
                    <div class="chart-bar" style="height: 90px;" data-value="78%"></div>
                </div>
            </div>
            
            <div class="chart-container">
                <h3 class="chart-title">${data.charts.right.title}</h3>
                <div class="circular-chart">
                    <svg class="circular-progress" width="140" height="140">
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#d4af37"/>
                                <stop offset="100%" style="stop-color:#ff8c00"/>
                            </linearGradient>
                        </defs>
                        <circle class="circle-bg" cx="70" cy="70" r="50"/>
                        <circle class="circle-progress" cx="70" cy="70" r="50"/>
                    </svg>
                    <div class="circle-text">${data.charts.right.value}</div>
                </div>
            </div>
            
            <div class="insights-section">
    `;
    
    // Insights
    data.insights.forEach(insight => {
        content += `
            <div class="insight-item">
                <div class="insight-icon">${insight.icon}</div>
                <p class="insight-text">${insight.text}</p>
                <p class="insight-impact">${insight.impact}</p>
            </div>
        `;
    });
    
    content += `
            </div>
            
            <div class="investment-section">
                <h4 class="investment-title">Informações de Investimento</h4>
                <div class="investment-grid">
                    <div class="investment-item">
                        <span class="investment-label">Faixa de Investimento</span>
                        <span class="investment-value">${data.investment.range}</span>
                    </div>
                    <div class="investment-item">
                        <span class="investment-label">Prazo</span>
                        <span class="investment-value">${data.investment.period}</span>
                    </div>
                    <div class="investment-item">
                        <span class="investment-label">Retorno</span>
                        <span class="investment-value">${data.investment.roi}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="subtle-cta">
            <a href="../assessment/index.html" class="cta-button">
                ${data.cta}
            </a>
        </div>
    `;
    
    modalBody.innerHTML = content;
    
    // Mostrar modal
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// Fechar modal clicando fora
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Inicializar tudo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    createElegantParticles();
    createNeuralParticles();
    addHarmonicInteraction();
    
    // Parallax suave apenas no desktop
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleHarmonicParallax);
    }
});