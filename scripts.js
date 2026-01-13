// Ano
const year = new Date().getFullYear();
const ids = ["y","y2","y3","y4","y5","y6"];
ids.forEach(id => { const el = document.getElementById(id); if(el) el.textContent = year; });

// Traduções (PT/EN/ES) — mantém seu dicionário, só adicionei "proj.details"
const dict = {
  pt: {
    "top.role": "Full Stack • Dados/BI • Automação • Observabilidade",
    "top.location": "Belo Horizonte, MG",
    "meta.title": "Matheus Muniz | Full Stack • Dados • Automação",
    "meta.description": "Currículo/portfólio — Observabilidade, SQL, Python, BI, DevOps e Desenvolvimento Web Full Stack.",
    "meta.ogTitle": "Matheus Muniz | Full Stack • Dados • Automação",
    "meta.ogDescription": "Observabilidade • SQL • Python • BI • DevOps • Full Stack",
    "meta.twitterTitle": "Matheus Muniz | Full Stack • Dados • Automação",
    "meta.twitterDescription": "Observabilidade • SQL • Python • BI • DevOps • Full Stack",
    "nav.rail": "Navegação entre slides",
    "proj.repo": "Repositório",
    "contact.phoneAria": "Ligar para Matheus Muniz",
    "contact.emailAria": "Enviar e-mail para Matheus Muniz",
    "contact.linkedinAria": "Abrir LinkedIn de Matheus Muniz",
    "contact.cvAria": "Abrir currículo em PDF",
    "contact.profileAria": "Abrir perfil LinkedIn em PDF",


    "hero.kicker": "Disponível para vagas e projetos (CLT/PJ)",
    "hero.title": "Web, Dados e Automação com disciplina operacional",
    "hero.subtitle": "Profissional com mais de 10 anos em infraestrutura, monitoramento e automação em ambientes corporativos (setor financeiro). Atuação com análise de dados/BI, observabilidade e rotinas 24x7 — e, mais recentemente, desenvolvimento web full stack.\n\nAo longo da minha trajetória, desenvolvi competências em análise de dados, criação de dashboards e relatórios de performance, automação de processos e gestão de ambientes críticos 24x7. Possuo experiência na implementação de soluções de monitoramento e observabilidade, com histórico em empresas como F1RST Digital Service (Santander), Global Hitss e projetos de outsourcing para grandes corporações como Via Varejo e FCA.\n\nDomino ferramentas como Power BI, Python, SQL, Dynatrace, Grafana, ServiceNow e Control-M, aplicadas na construção de pipelines de dados, modelagem dimensional e desenvolvimento de automações que reduziram significativamente o tempo de execução de rotinas operacionais. Possuo certificações em ITIL V4, COBIT 5 e SRE Practitioner, complementadas por formações em Business Intelligence, Data Science e Cybersecurity. Atualmente busco aplicar minha expertise técnica combinada com conhecimentos em infraestrutura e habilidades em análise de dados, ETL e desenvolvimento de soluções que agregam valor ao negócio.",
    "hero.tagline": "Ferramentas: Dynatrace • Grafana • ServiceNow • Control-M • PowerAutomate • Docker • AWS/Azure",
    "hero.ctaLinkedin": "LinkedIn",
    "hero.ctaGithub": "GitHub",
    "hero.ctaCv": "Abrir CV (PDF)",
    "hero.ctaProfile": "Abrir LinkedIn (PDF)",
    "hero.quickTitle": "Contato",
    "hero.langs": "Idiomas:",
    "hero.langsValue": "Inglês B1 • Espanhol B1",
    "hero.navTip": 'Role para baixo — cada seção é um "slide". (Teclas: PageDown/PageUp)',

    "impact.title": "Impacto",
    "impact.subtitle": "Resultados em ambiente bancário crítico: redução de toil, melhoria de visibilidade e operação 24x7.",
    "impact.i1t": "-72% de toil operacional",
    "impact.i1d": "Automações com Python, PowerShell e PowerAutomate reduziram o tempo de execução de rotinas operacionais do Consignado Santander.",
    "impact.i2t": "Dashboards e redução de MTTR",
    "impact.i2d": "Painéis em Power BI para saúde do ambiente e tendências, reduzindo MTTR em classes recorrentes.",
    "impact.i3t": "Escala operacional (N1/N2)",
    "impact.i3d": "Absorção de rotinas, critérios de entrada, POPs e treinamento; menos handoffs no ServiceNow.",
    "impact.i4t": "Observabilidade",
    "impact.i4b1": "Administração/otimização Dynatrace e Grafana",
    "impact.i4b2": "Análises de latência, erro e tráfego; detecção proativa",
    "impact.i5t": "Deploy e operação",
    "impact.i5b1": "Ciclo de deploy: CloudBees, Rundeck, Ansible, Docker, Liquibase",
    "impact.i5b2": "Middleware/console: Gravity, filas MQ, WAS/Tomcat/JBoss",

    "exp.title": "Experiência (linha do tempo)",
    "exp.subtitle": "Trajetória 2011–2025: suporte → liderança NOC → SRE/Observabilidade → Full Stack (autônomo).",
    "exp.r0": "Autônomo — Desenvolvimento Web Full Stack",
    "exp.r0p": "Belo Horizonte/MG",
    "exp.r0d": "03/2025 – atual",
    "exp.r0b1": "Desenvolvimento ponta-a-ponta (produto, arquitetura, front, back, banco, testes, deploy e operação).",
    "exp.r0b2": "Deveriar (PWA Saúde/TCC): React 19 + Vite PWA + TypeScript; Fastify 4 + TS; Firestore + PostgreSQL (Cloud SQL); Cloud Run + Vercel; GitHub Actions.",
    "exp.r0b3": "Segurança e integrações: Google OAuth, CSRF, sessão via cookies httpOnly; Google APIs (Drive AppData), Vision OCR; billing com Stripe e suporte a IAP (Apple/Google).",
    "exp.r0b4": "Produtos paralelos: UltraHub CRM (Node.js/React/MongoDB), Quiz Tech (GitHub Pages), extensões Chrome (Manifest V3) e pipeline OCR em Python (FastAPI).",
    "exp.r0b5": "IA Analítica (arquitetura): orquestração Node/Fastify + OpenAPI, governança OPA/Rego, Trino, Keycloak (OIDC/LDAP/AD) e Evidence Service em Go + Postgres (planejado).",
    "exp.r1": "F1RST Digital (Santander) — Analista de TI Sr.",
    "exp.r1p": "Campinas/SP",
    "exp.r1d": "12/2022 – 02/2025",
    "exp.r1b1": "Observabilidade: Dynatrace/Grafana; análises de métricas (latência/erro/tráfego) e detecção proativa.",
    "exp.r1b2": "Automação: Python/PowerShell/PowerAutomate + Control-M (RPA) para reduzir toil.",
    "exp.r1b3": "Power BI: modelagem estrela, DAX (MTTR/MTTA/SLO), tendências por serviço e horário.",
    "exp.r1b4": "Deploy: CloudBees, Rundeck, Ansible, Docker, Liquibase (validação e evidências pós-deploy).",
    "exp.r2": "F1RST Digital — Analista de TI Pl.",
    "exp.r2p": "Campinas/SP",
    "exp.r2d": "12/2021 – 12/2022",
    "exp.r2b1": "Tratamento de alertas (N1/N2): Dynatrace, Splunk, Grafana, Kibana; correlação CPU/memória/disco/latência.",
    "exp.r2b2": "Análise de logs/traces/exceptions (Tomcat, JBoss, WebSphere, WebLogic) e troubleshooting ponta a ponta.",
    "exp.r2b3": "Verificação de saúde em AWS/Azure (quotas, IAM, filas, latências) e painéis analíticos em Power BI.",
    "exp.r3": "Global Hitss — Líder Técnico (NOC/Service Desk/Gestão de Acessos)",
    "exp.r3p": "Belo Horizonte/MG",
    "exp.r3d": "11/2020 – 12/2021",
    "exp.r3b1": "Coordenação de times 24x7 e handoffs padronizados (BH/RJ/SP).",
    "exp.r3b2": "Gestão de incidentes críticos: war rooms, timelines, lições aprendidas e redução de MTTR.",
    "exp.r3b3": "Processos e documentação (POPs/fluxos) + relatórios gerenciais (SLA/MTTR/volumetria).",
    "exp.noteD": "A trajetória completa (2011–2025) está no CV em PDF, incluindo suporte, infraestrutura e IAM.",

    "skills.title": "Competências (core)",
    "skills.subtitle": "Foco em observabilidade, dados e automação — com base sólida em operação crítica.",
    "skills.fieldTitle": "Meu campo de atuação",
    "skills.subtitleHero": "Clique em um item para ver projeto/caso relacionado.",
    "skills.pauseMotion": "Pausar animação",
    "skills.resumeMotion": "Retomar animação",
    "skills.s1t": "Observabilidade / Monitoramento",
    "skills.s1d": "Dynatrace, Grafana, Kibana/Splunk; métricas, alertas, troubleshooting e operação 24x7.",
    "skills.s2t": "Dados / BI",
    "skills.s2d": "Power BI, modelagem dimensional, DAX, ETL/ELT e indicadores (MTTR/MTTA/SLO).",
    "skills.s3t": "Automação / DevOps",
    "skills.s3d": "Python, PowerShell, PowerAutomate, Control-M; deploy/ops com Docker e automação de rotinas.",
    "skills.stackT": "Stack (resumo)",
    "skills.stackD": "Web: React • TypeScript • Vite • Fastify • PostgreSQL • Firestore • OAuth/CSRF • Stripe • Playwright. Cloud/Deploy: Cloud Run • Cloud SQL • Vercel • GitHub Actions. Ops: Dynatrace • Grafana • ServiceNow • Control-M • Docker.",
    "skills.fullT": "Full Stack (autônomo)",
    "skills.fullD": "Produto + engenharia: front/back, integrações, segurança, observabilidade e pipelines (03/2025–atual).",

    "cert.title": "Formação & Certificações",
    "cert.eduT": "Formação",
    "cert.edu1": "Gestão de TI — UniBH (conclusão 2014)",
    "cert.certT": "Certificações (destaque)",
    "cert.c1": "ITIL 4 Foundations",
    "cert.c2": "COBIT 5 Foundations",
    "cert.c3": "SRE Practitioner (DevOps Institute)",
    "cert.c4": "Oracle Cloud Infrastructure Foundations",
    "cert.c5": "Scrum Foundations",
    "cert.moreT": "Cursos",
    "cert.more1": "Power BI: modelagem dimensional, DAX e indicadores (MTTR/MTTA/SLO).",
    "cert.more2": "Python: automação, ETL/ELT, APIs e validação de dados.",
    "cert.more3": "Web: TypeScript, React, consumo de APIs e testes (E2E).",
    "cert.more4": "SQL: queries analíticas, modelagem e otimização básica.",
    "cert.more5": "DevOps/Cloud: Docker, pipelines CI/CD e deploy (GCP/Vercel).",
    "cert.more6": "Segurança: fundamentos (OAuth, CSRF, sessões/cookies, rate limiting).",

    "proj.title": "Projetos",
    "proj.subtitle": "Conteúdo enxuto, orientado a prova: o que é, qual problema resolve, como foi construído.",
    "proj.p1d": "PWA para saúde e psicoterapia (TCC/DBT): medicamentos, sinais vitais, sintomas, exercícios guiados e histórico.",
    "proj.p1s": "React 19 • Vite PWA • Fastify • Firestore • PostgreSQL • Cloud Run • Vercel • Stripe",
    "proj.p1cap": "Prints do app: documentação, psicoterapia guiada e análise/insights.",
    "proj.p2cap": "Print da tela de Oportunidade com dashboards.",
    "proj.p2d": "CRM com Oportunidades, Propostas, Clientes, Produtos e Dashboard (em evolução; repo fechado).",
    "proj.p2s": "Node.js • React • Bootstrap • MongoDB",
    "proj.p3d": "Plataforma de quizzes para certificações técnicas (UI moderna, acessibilidade e foco em leitura/contraste).",
    "proj.p3s": "GitHub Pages • Front-end Web • UX/UI",
    "proj.p3cap": "Print da tela inicial e formulário de início de prova.",
    "proj.p4t": "Landing corporativa-tech",
    "proj.p4d": "Página institucional com estética corporativa-tech (apresentação de proposta, CTA e seções de valor).",
    "proj.p4s": "HTML/CSS • Layout responsivo • Design system simples",
    "proj.p4cap": 'Print de seção "hero" e bloco de proposta de valor.',
    "proj.open": "Abrir",
    "proj.details": "Detalhes",
    "proj.todoT": 'TODO (para ficar "contratável")',
    "proj.todo1": "Em cada projeto, escreva 3 bullets: Problema → Solução → Prova/Impacto.",
    "proj.todo2": "Adicione métricas simples: usuários, tempo economizado, latência, custo, etc (mesmo aproximado).",
    "proj.todo3": "Inclua 1 parágrafo de arquitetura: dados, autenticação, deploy e observabilidade.",

    "contact.title": "Contato",
    "contact.subtitle": "Canal recomendado: LinkedIn. PDFs anexos no site para leitura rápida.",
    "contact.ctaLinkedin": "Abrir LinkedIn",
    "contact.ctaEmail": "Enviar e-mail",
    "contact.ctaCv": "Abrir CV (PDF)",
    "contact.ctaProfile": "Abrir LinkedIn (PDF)",

    "nav.skip": "Pular para o conteúdo",
    "nav.hint": "Scroll ↓",
    "nav.prev": "Slide anterior",
    "nav.next": "Próximo slide",
    "nav.goto": "Ir para",

    "modal.close": "Fechar",
    "modal.footerHint": "ESC para fechar • Clique fora para fechar",
    "modal.section.psp": "Problema → Solução → Prova/Impacto",
    "modal.section.metrics": "Métricas (snapshot)",
    "modal.section.metricsSimple": "Métricas",
    "modal.deveriar.title": "Deveriar — Detalhes",
    "modal.deveriar.subtitle": "Problema → Solução → Prova/Impacto • Métricas • Arquitetura",
    "modal.deveriar.kpi1t": "Uso",
    "modal.deveriar.kpi1v": "1.500 usuários ativos",
    "modal.deveriar.kpi2t": "Eficiência",
    "modal.deveriar.kpi2v": "-35% tempo administrativo (~40 min/semana/terapeuta)",
    "modal.deveriar.kpi3t": "Performance",
    "modal.deveriar.kpi3v": "Mediana 280 ms rotas críticas • -22% retries",
    "modal.deveriar.bullet1": "Triagem e evolução terapêutica fragmentadas e manuais → App Deveriar centraliza sessões, convites e planos com fluxos guiados e consentimentos → 1.500 usuários ativos, 35% menos tempo em tarefas administrativas (~40 min/semana por terapeuta).",
    "modal.deveriar.bullet2": "Baixa confiabilidade em registros sensíveis e compliance → Dados com E2EE + Firestore com coleções por usuário e age gate → 0 incidentes de vazamento reportados, custo médio de storage < US$ 0,02/usuário/mês.",
    "modal.deveriar.bullet3": "Experiência lenta na captura e análise de conteúdo → Backend Fastify + fila para Vision API com cache → latência mediana 280 ms nas rotas críticas, 22% menos retries.",
    "modal.deveriar.archT": "Arquitetura (resumo)",
    "modal.deveriar.archP": "Dados ficam em Firestore com coleções por userId e registros auditáveis; autenticação via Firebase Auth com criptografia ponta-a-ponta e sincronização opcional com Google Drive; deploy em stack web padrão (Vite para o frontend e Node/Fastify para o backend), com logs estruturados via Pino, métricas de latência/erros por endpoint e rastreamento de fluxos críticos para convites e billing.",
    "modal.ultrahub.title": "UltraHub CRM — Detalhes",
    "modal.ultrahub.subtitle": "Problema → Solução → Prova/Impacto • Métricas • Arquitetura",
    "modal.ultrahub.bullet1": "Equipes comerciais dispersas e sem visibilidade do funil → Centralizar oportunidades, propostas e clientes com pipeline e dashboard → Redução de tempo em follow-ups (~35%) e economia estimada de ~2h/semana por vendedor.",
    "modal.ultrahub.bullet2": "Criação de propostas manual e lenta → Catálogo de produtos + templates e geração rápida de propostas → ~45% menos tempo para gerar propostas e redução de custo operacional em ~20% no time comercial.",
    "modal.ultrahub.bullet3": "Dados inconsistentes e baixa confiabilidade nos relatórios → Cadastro único com validações e métricas no dashboard → Latência média de leitura <250ms no dashboard e aumento de ~30% na taxa de conversão acompanhada por etapas.",
    "modal.ultrahub.kpi1t": "Eficiência",
    "modal.ultrahub.kpi1v": "-35% tempo em follow-ups (~2h/semana/vendedor)",
    "modal.ultrahub.kpi2t": "Produtividade",
    "modal.ultrahub.kpi2v": "-45% tempo para gerar propostas • -20% custo operacional",
    "modal.ultrahub.kpi3t": "Performance",
    "modal.ultrahub.kpi3v": "Latência média <250ms dashboard • +30% taxa de conversão",
    "modal.ultrahub.archT": "Arquitetura (resumo)",
    "modal.ultrahub.archP": "Dados do CRM são persistidos no MongoDB com coleções separadas por entidades (oportunidades, propostas, clientes e produtos), acessados por uma API Node.js; autenticação via JWT e controle de sessão no frontend React; deploy dividido entre backend e frontend (ex.: VPS/containers) com variáveis de ambiente para URLs e segredo; observabilidade com logs estruturados, métricas básicas (latência, erros, throughput) e alertas simples para quedas de API.",
    "modal.quiz.title": "Quiz Tech — Detalhes",
    "modal.quiz.subtitle": "Problema → Solução → Prova/Impacto • Métricas • Arquitetura",
    "modal.quiz.bullet1": "Estudo para certificações fica fragmentado (PDF/planilha/anotações), sem \"simulado\" consistente nem controle de regras/tempo → PWA de quiz com múltiplos exames (AWS/COBIT/ITIL 4/AZ-900), seleção guiada de grupos e timer com pausa/retomada → simulado configurável de até 75 questões (3×25) por sessão e 30 min por conjunto, com feedback imediato e fluxo dedicado (início → grupos → prova).",
    "modal.quiz.bullet2": "Quizzes \"caseiros\" tendem a ser ruins de usar (alerts, pouca acessibilidade, fricção em mobile/teclado), o que reduz adesão → UI responsiva, modais no lugar de alert(), acessibilidade com navegação por teclado/ARIA, e testes automatizados de acessibilidade → o projeto declara foco em WCAG AA, teclado completo e validações acessíveis; há pipeline de testes incluindo Cypress (E2E) e axe-core (a11y).",
    "modal.quiz.bullet3": "Sem histórico e evidência, fica difícil medir evolução e atacar pontos fracos (e compartilhar resultado) → histórico de tentativas + estatísticas por tópico + modo de revisão (erros) e exportação para PDF → histórico e \"banco de dados\" são locais (IndexedDB, com fallback localStorage), com exportação em PDF (jsPDF) e revisão focada em erros.",
    "modal.quiz.kpi1t": "Eficiência",
    "modal.quiz.kpi1v": "Setup do simulado < 1 min (vs. 5–10 min manual)",
    "modal.quiz.kpi2t": "Performance",
    "modal.quiz.kpi2v": "Latência ~0–50 ms (tudo local)",
    "modal.quiz.kpi3t": "Custo",
    "modal.quiz.kpi3v": "~US$ 0/mês (hosting estático)",
    "modal.quiz.archT": "Arquitetura (resumo)",
    "modal.quiz.archP": "Aplicação 100% front-end (HTML/CSS/JS) com páginas dedicadas (index.html, select-groups.html, quiz.html, history.html, review.html) e modo PWA (manifest + service worker). Os dados (usuários, tentativas, resultados) persistem no navegador via IndexedDB com fallback para localStorage; a autenticação é \"básica\"/local (identificação por nome/e-mail e controle de acesso à rota do quiz), sem depender de backend. O deploy é estático em GitHub Pages (munizmath.github.io), mantendo custo praticamente nulo. A observabilidade é centrada em qualidade preventiva: testes E2E (Cypress), testes de acessibilidade (axe-core) e validações/controles (ex.: prevenção de XSS, validação de entrada) — sem telemetria centralizada por padrão.",
    "modal.landing.title": "Landing corporativa-tech — Detalhes",
    "modal.landing.subtitle": "Problema → Solução → Prova/Impacto • Métricas • Arquitetura",
    "modal.landing.pspTodo": "TODO: cole aqui seus 3 bullets.",
    "modal.landing.metricsTodo": "TODO: performance (Lighthouse), tempo de carregamento, etc.",
    "modal.landing.archT": "Arquitetura (resumo)",
    "modal.landing.archP": "TODO: HTML/CSS, deploy, assets, cache, etc."
  },
  en: {
    "top.role": "Full Stack • Data/BI • Automation • Observability",
    "top.location": "Belo Horizonte, MG",
    "meta.title": "Matheus Muniz | Full Stack • Data • Automation",
    "meta.description": "Resume/portfolio — Observability, SQL, Python, BI, DevOps and Full Stack Web Development.",
    "meta.ogTitle": "Matheus Muniz | Full Stack • Data • Automation",
    "meta.ogDescription": "Observability • SQL • Python • BI • DevOps • Full Stack",
    "meta.twitterTitle": "Matheus Muniz | Full Stack • Data • Automation",
    "meta.twitterDescription": "Observability • SQL • Python • BI • DevOps • Full Stack",
    "nav.rail": "Slide navigation",
    "proj.repo": "Repository",
    "contact.phoneAria": "Call Matheus Muniz",
    "contact.emailAria": "Email Matheus Muniz",
    "contact.linkedinAria": "Open Matheus Muniz’s LinkedIn",
    "contact.cvAria": "Open resume PDF",
    "contact.profileAria": "Open LinkedIn profile PDF",


    "hero.kicker": "Available for positions and projects (CLT/PJ)",
    "hero.title": "Web, Data and Automation with operational discipline",
    "hero.subtitle": "Professional with over 10 years in infrastructure, monitoring and automation in corporate environments (financial sector). Experience with data/BI analysis, observability and 24x7 routines — and, more recently, full stack web development.\n\nThroughout my career, I have developed competencies in data analysis, dashboard creation and performance reporting, process automation and management of critical 24x7 environments. I have experience implementing monitoring and observability solutions, with a history at companies such as F1RST Digital Service (Santander), Global Hitss and outsourcing projects for large corporations such as Via Varejo and FCA.\n\nI master tools such as Power BI, Python, SQL, Dynatrace, Grafana, ServiceNow and Control-M, applied in building data pipelines, dimensional modeling and developing automations that significantly reduced the execution time of operational routines. I hold certifications in ITIL V4, COBIT 5 and SRE Practitioner, complemented by training in Business Intelligence, Data Science and Cybersecurity. I currently seek to apply my technical expertise combined with infrastructure knowledge and skills in data analysis, ETL and developing solutions that add value to the business.",
    "hero.tagline": "Tools: Dynatrace • Grafana • ServiceNow • Control-M • PowerAutomate • Docker • AWS/Azure",
    "hero.ctaLinkedin": "LinkedIn",
    "hero.ctaGithub": "GitHub",
    "hero.ctaCv": "Open CV (PDF)",
    "hero.ctaProfile": "Open LinkedIn (PDF)",
    "hero.quickTitle": "Contact",
    "hero.langs": "Languages:",
    "hero.langsValue": "English B1 • Spanish B1",
    "hero.navTip": 'Scroll down — each section is a "slide". (Keys: PageDown/PageUp)',

    "impact.title": "Impact",
    "impact.subtitle": "Results in critical banking environment: toil reduction, visibility improvement and 24x7 operation.",
    "impact.i1t": "-72% operational toil",
    "impact.i1d": "Automations with Python, PowerShell and PowerAutomate reduced Consignment routine execution time.",
    "impact.i2t": "Dashboards and MTTR reduction",
    "impact.i2d": "Power BI dashboards for environment health and trends, reducing MTTR in recurring classes.",
    "impact.i3t": "Operational scale (N1/N2)",
    "impact.i3d": "Routine absorption, entry criteria, SOPs and training; fewer handoffs in ServiceNow.",
    "impact.i4t": "Observability",
    "impact.i4b1": "Dynatrace and Grafana administration/optimization",
    "impact.i4b2": "Latency, error and traffic analysis; proactive detection",
    "impact.i5t": "Deploy and operation",
    "impact.i5b1": "Deploy cycle: CloudBees, Rundeck, Ansible, Docker, Liquibase",
    "impact.i5b2": "Middleware/console: Gravity, MQ queues, WAS/Tomcat/JBoss",

    "exp.title": "Experience (timeline)",
    "exp.subtitle": "Journey 2011–2025: support → NOC leadership → SRE/Observability → Full Stack (freelance).",
    "exp.r0": "Freelance — Full Stack Web Development",
    "exp.r0p": "Belo Horizonte/MG",
    "exp.r0d": "03/2025 – current",
    "exp.r0b1": "End-to-end development (product, architecture, front, back, database, tests, deploy and operation).",
    "exp.r0b2": "Deveriar (Health PWA/TCC): React 19 + Vite PWA + TypeScript; Fastify 4 + TS; Firestore + PostgreSQL (Cloud SQL); Cloud Run + Vercel; GitHub Actions.",
    "exp.r0b3": "Security and integrations: Google OAuth, CSRF, session via httpOnly cookies; Google APIs (Drive AppData), Vision OCR; billing with Stripe and IAP support (Apple/Google).",
    "exp.r0b4": "Parallel products: UltraHub CRM (Node.js/React/MongoDB), Quiz Tech (GitHub Pages), Chrome extensions (Manifest V3) and OCR pipeline in Python (FastAPI).",
    "exp.r0b5": "Analytical AI (architecture): Node/Fastify orchestration + OpenAPI, OPA/Rego governance, Trino, Keycloak (OIDC/LDAP/AD) and Evidence Service in Go + Postgres (planned).",
    "exp.r1": "F1RST Digital (Santander) — Sr. IT Analyst",
    "exp.r1p": "Campinas/SP",
    "exp.r1d": "12/2022 – 02/2025",
    "exp.r1b1": "Observability: Dynatrace/Grafana; metrics analysis (latency/error/traffic) and proactive detection.",
    "exp.r1b2": "Automation: Python/PowerShell/PowerAutomate + Control-M (RPA) to reduce toil.",
    "exp.r1b3": "Power BI: star schema, DAX (MTTR/MTTA/SLO), trends by service and time.",
    "exp.r1b4": "Deploy: CloudBees, Rundeck, Ansible, Docker, Liquibase (validation and post-deploy evidence).",
    "exp.r2": "F1RST Digital — IT Analyst",
    "exp.r2p": "Campinas/SP",
    "exp.r2d": "12/2021 – 12/2022",
    "exp.r2b1": "Alert handling (N1/N2): Dynatrace, Splunk, Grafana, Kibana; CPU/memory/disk/latency correlation.",
    "exp.r2b2": "Log/trace/exception analysis (Tomcat, JBoss, WebSphere, WebLogic) and end-to-end troubleshooting.",
    "exp.r2b3": "Health checks in AWS/Azure (quotas, IAM, queues, latencies) and analytical dashboards in Power BI.",
    "exp.r3": "Global Hitss — Technical Leader (NOC/Service Desk/Access Management)",
    "exp.r3p": "Belo Horizonte/MG",
    "exp.r3d": "11/2020 – 12/2021",
    "exp.r3b1": "24x7 team coordination and standardized handoffs (BH/RJ/SP).",
    "exp.r3b2": "Critical incident management: war rooms, timelines, lessons learned and MTTR reduction.",
    "exp.r3b3": "Processes and documentation (SOPs/flows) + management reports (SLA/MTTR/volumetrics).",
    "exp.noteD": "The complete journey (2011–2025) is in the PDF CV, including support, infrastructure and IAM.",

    "skills.title": "Skills (core)",
    "skills.subtitle": "Focus on observability, data and automation — with solid foundation in critical operations.",
    "skills.fieldTitle": "My field of expertise",
    "skills.subtitleHero": "Click on an item to see related project/case.",
    "skills.pauseMotion": "Pause animation",
    "skills.resumeMotion": "Resume animation",
    "skills.s1t": "Observability / Monitoring",
    "skills.s1d": "Dynatrace, Grafana, Kibana/Splunk; metrics, alerts, troubleshooting and 24x7 operation.",
    "skills.s2t": "Data / BI",
    "skills.s2d": "Power BI, dimensional modeling, DAX, ETL/ELT and indicators (MTTR/MTTA/SLO).",
    "skills.s3t": "Automation / DevOps",
    "skills.s3d": "Python, PowerShell, PowerAutomate, Control-M; deploy/ops with Docker and routine automation.",
    "skills.stackT": "Stack (summary)",
    "skills.stackD": "Web: React • TypeScript • Vite • Fastify • PostgreSQL • Firestore • OAuth/CSRF • Stripe • Playwright. Cloud/Deploy: Cloud Run • Cloud SQL • Vercel • GitHub Actions. Ops: Dynatrace • Grafana • ServiceNow • Control-M • Docker.",
    "skills.fullT": "Full Stack (freelance)",
    "skills.fullD": "Product + engineering: front/back, integrations, security, observability and pipelines (03/2025–current).",

    "cert.title": "Education & Certifications",
    "cert.eduT": "Education",
    "cert.edu1": "IT Management — UniBH (completed 2014)",
    "cert.certT": "Certifications (highlight)",
    "cert.c1": "ITIL 4 Foundations",
    "cert.c2": "COBIT 5 Foundations",
    "cert.c3": "SRE Practitioner (DevOps Institute)",
    "cert.c4": "Oracle Cloud Infrastructure Foundations",
    "cert.c5": "Scrum Foundations",
    "cert.moreT": "Courses",
    "cert.more1": "Power BI: dimensional modeling, DAX and indicators (MTTR/MTTA/SLO).",
    "cert.more2": "Python: automation, ETL/ELT, APIs and data validation.",
    "cert.more3": "Web: TypeScript, React, API consumption and tests (E2E).",
    "cert.more4": "SQL: analytical queries, modeling and basic optimization.",
    "cert.more5": "DevOps/Cloud: Docker, CI/CD pipelines and deploy (GCP/Vercel).",
    "cert.more6": "Security: fundamentals (OAuth, CSRF, sessions/cookies, rate limiting).",

    "proj.title": "Projects",
    "proj.subtitle": "Lean content, proof-oriented: what it is, what problem it solves, how it was built.",
    "proj.p1d": "PWA for health and psychotherapy (CBT/DBT): medications, vital signs, symptoms, guided exercises and history.",
    "proj.p1s": "React 19 • Vite PWA • Fastify • Firestore • PostgreSQL • Cloud Run • Vercel • Stripe",
    "proj.p1cap": "App screenshots: documentation, guided psychotherapy and analysis/insights.",
    "proj.p2cap": "Opportunity screen screenshot with dashboards.",
    "proj.p2d": "CRM with Opportunities, Proposals, Clients, Products and Dashboard (in progress; private repo).",
    "proj.p2s": "Node.js • React • Bootstrap • MongoDB",
    "proj.p3d": "Quiz platform for technical certifications (modern UI, accessibility and focus on reading/contrast).",
    "proj.p3s": "GitHub Pages • Front-end Web • UX/UI",
    "proj.p3cap": "Home screen and exam start form screenshot.",
    "proj.p4t": "Corporate-tech landing",
    "proj.p4d": "Institutional page with corporate-tech aesthetic (value proposition presentation, CTA and value sections).",
    "proj.p4s": "HTML/CSS • Responsive layout • Simple design system",
    "proj.p4cap": 'Screenshot of "hero" section and value proposition block.',
    "proj.open": "Open",
    "proj.details": "Details",
    "proj.todoT": 'TODO (to become "contractable")',
    "proj.todo1": "In each project, write 3 bullets: Problem → Solution → Proof/Impact.",
    "proj.todo2": "Add simple metrics: users, time saved, latency, cost, etc (even approximate).",
    "proj.todo3": "Include 1 architecture paragraph: data, authentication, deploy and observability.",

    "contact.title": "Contact",
    "contact.subtitle": "Recommended channel: LinkedIn. PDFs attached on the site for quick reading.",
    "contact.ctaLinkedin": "Open LinkedIn",
    "contact.ctaEmail": "Send email",
    "contact.ctaCv": "Open CV (PDF)",
    "contact.ctaProfile": "Open LinkedIn (PDF)",

    "nav.skip": "Skip to content",
    "nav.hint": "Scroll ↓",
    "nav.prev": "Previous slide",
    "nav.next": "Next slide",
    "nav.goto": "Go to",

    "modal.close": "Close",
    "modal.footerHint": "ESC to close • Click outside to close",
    "modal.section.psp": "Problem → Solution → Proof/Impact",
    "modal.section.metrics": "Metrics (snapshot)",
    "modal.section.metricsSimple": "Metrics",
    "modal.deveriar.title": "Deveriar — Details",
    "modal.deveriar.subtitle": "Problem → Solution → Proof/Impact • Metrics • Architecture",
    "modal.deveriar.kpi1t": "Usage",
    "modal.deveriar.kpi1v": "1,500 active users",
    "modal.deveriar.kpi2t": "Efficiency",
    "modal.deveriar.kpi2v": "-35% administrative time (~40 min/week/therapist)",
    "modal.deveriar.kpi3t": "Performance",
    "modal.deveriar.kpi3v": "Median 280 ms critical routes • -22% retries",
    "modal.deveriar.bullet1": "Fragmented and manual therapeutic triage and evolution → Deveriar app centralizes sessions, invitations and plans with guided flows and consents → 1,500 active users, 35% less time on administrative tasks (~40 min/week per therapist).",
    "modal.deveriar.bullet2": "Low reliability in sensitive records and compliance → Data with E2EE + Firestore with collections per user and age gate → 0 reported leakage incidents, average storage cost < US$ 0.02/user/month.",
    "modal.deveriar.bullet3": "Slow experience in content capture and analysis → Fastify backend + queue for Vision API with cache → median latency 280 ms on critical routes, 22% fewer retries.",
    "modal.deveriar.archT": "Architecture (summary)",
    "modal.deveriar.archP": "Data is stored in Firestore with collections per userId and auditable records; authentication via Firebase Auth with end-to-end encryption and optional synchronization with Google Drive; deploy on standard web stack (Vite for frontend and Node/Fastify for backend), with structured logs via Pino, latency/error metrics per endpoint and tracking of critical flows for invitations and billing.",
    "modal.ultrahub.title": "UltraHub CRM — Details",
    "modal.ultrahub.subtitle": "Problem → Solution → Proof/Impact • Metrics • Architecture",
    "modal.ultrahub.bullet1": "Dispersed commercial teams and no funnel visibility → Centralize opportunities, proposals and clients with pipeline and dashboard → Follow-up time reduction (~35%) and estimated savings of ~2h/week per salesperson.",
    "modal.ultrahub.bullet2": "Manual and slow proposal creation → Product catalog + templates and fast proposal generation → ~45% less time to generate proposals and ~20% operational cost reduction in commercial team.",
    "modal.ultrahub.bullet3": "Inconsistent data and low report reliability → Single registration with validations and dashboard metrics → Average read latency <250ms on dashboard and ~30% increase in conversion rate tracked by stages.",
    "modal.ultrahub.kpi1t": "Efficiency",
    "modal.ultrahub.kpi1v": "-35% follow-up time (~2h/week/salesperson)",
    "modal.ultrahub.kpi2t": "Productivity",
    "modal.ultrahub.kpi2v": "-45% time to generate proposals • -20% operational cost",
    "modal.ultrahub.kpi3t": "Performance",
    "modal.ultrahub.kpi3v": "Average latency <250ms dashboard • +30% conversion rate",
    "modal.ultrahub.archT": "Architecture (summary)",
    "modal.ultrahub.archP": "CRM data is persisted in MongoDB with collections separated by entities (opportunities, proposals, clients and products), accessed by a Node.js API; authentication via JWT and session control in React frontend; deploy split between backend and frontend (e.g., VPS/containers) with environment variables for URLs and secret; observability with structured logs, basic metrics (latency, errors, throughput) and simple alerts for API failures.",
    "modal.quiz.title": "Quiz Tech — Details",
    "modal.quiz.subtitle": "Problem → Solution → Proof/Impact • Metrics • Architecture",
    "modal.quiz.bullet1": "Certification study becomes fragmented (PDF/spreadsheet/notes), without consistent \"mock exam\" or rule/time control → Quiz PWA with multiple exams (AWS/COBIT/ITIL 4/AZ-900), guided group selection and timer with pause/resume → configurable mock exam of up to 75 questions (3×25) per session and 30 min per set, with immediate feedback and dedicated flow (start → groups → exam).",
    "modal.quiz.bullet2": "\"Homemade\" quizzes tend to be poor to use (alerts, low accessibility, friction on mobile/keyboard), which reduces adoption → Responsive UI, modals instead of alert(), accessibility with keyboard navigation/ARIA, and automated accessibility tests → the project declares focus on WCAG AA, full keyboard support and accessible validations; there is a test pipeline including Cypress (E2E) and axe-core (a11y).",
    "modal.quiz.bullet3": "Without history and evidence, it's hard to measure progress and target weak points (and share results) → attempt history + statistics by topic + review mode (errors) and PDF export → history and \"database\" are local (IndexedDB, with localStorage fallback), with PDF export (jsPDF) and error-focused review.",
    "modal.quiz.kpi1t": "Efficiency",
    "modal.quiz.kpi1v": "Mock exam setup < 1 min (vs. 5–10 min manual)",
    "modal.quiz.kpi2t": "Performance",
    "modal.quiz.kpi2v": "Latency ~0–50 ms (all local)",
    "modal.quiz.kpi3t": "Cost",
    "modal.quiz.kpi3v": "~US$ 0/month (static hosting)",
    "modal.quiz.archT": "Architecture (summary)",
    "modal.quiz.archP": "100% front-end application (HTML/CSS/JS) with dedicated pages (index.html, select-groups.html, quiz.html, history.html, review.html) and PWA mode (manifest + service worker). Data (users, attempts, results) persists in the browser via IndexedDB with localStorage fallback; authentication is \"basic\"/local (identification by name/email and access control to quiz route), without backend dependency. Deploy is static on GitHub Pages (munizmath.github.io), keeping cost practically null. Observability is centered on preventive quality: E2E tests (Cypress), accessibility tests (axe-core) and validations/controls (e.g.: XSS prevention, input validation) — no centralized telemetry by default.",
    "modal.landing.title": "Corporate-tech landing — Details",
    "modal.landing.subtitle": "Problem → Solution → Proof/Impact • Metrics • Architecture",
    "modal.landing.pspTodo": "TODO: paste your 3 bullets here.",
    "modal.landing.metricsTodo": "TODO: performance (Lighthouse), loading time, etc.",
    "modal.landing.archT": "Architecture (summary)",
    "modal.landing.archP": "TODO: HTML/CSS, deploy, assets, cache, etc."
  },
  es: {
    "top.role": "Full Stack • Datos/BI • Automatización • Observabilidad",
    "top.location": "Belo Horizonte, MG",
    "meta.title": "Matheus Muniz | Full Stack • Datos • Automatización",
    "meta.description": "Currículum/portafolio — Observabilidad, SQL, Python, BI, DevOps y Desarrollo Web Full Stack.",
    "meta.ogTitle": "Matheus Muniz | Full Stack • Datos • Automatización",
    "meta.ogDescription": "Observabilidad • SQL • Python • BI • DevOps • Full Stack",
    "meta.twitterTitle": "Matheus Muniz | Full Stack • Datos • Automatización",
    "meta.twitterDescription": "Observabilidad • SQL • Python • BI • DevOps • Full Stack",
    "nav.rail": "Navegación entre diapositivas",
    "proj.repo": "Repositorio",
    "contact.phoneAria": "Llamar a Matheus Muniz",
    "contact.emailAria": "Enviar correo a Matheus Muniz",
    "contact.linkedinAria": "Abrir LinkedIn de Matheus Muniz",
    "contact.cvAria": "Abrir CV en PDF",
    "contact.profileAria": "Abrir perfil de LinkedIn en PDF",


    "hero.kicker": "Disponible para vacantes y proyectos (CLT/PJ)",
    "hero.title": "Web, Datos y Automatización con disciplina operacional",
    "hero.subtitle": "Profesional con más de 10 años en infraestructura, monitoreo y automatización en entornos corporativos (sector financiero). Experiencia con análisis de datos/BI, observabilidad y rutinas 24x7 — y, más recientemente, desarrollo web full stack.\n\nA lo largo de mi trayectoria, he desarrollado competencias en análisis de datos, creación de dashboards e informes de rendimiento, automatización de procesos y gestión de entornos críticos 24x7. Tengo experiencia en la implementación de soluciones de monitoreo y observabilidad, con historial en empresas como F1RST Digital Service (Santander), Global Hitss y proyectos de outsourcing para grandes corporaciones como Via Varejo y FCA.\n\nDomino herramientas como Power BI, Python, SQL, Dynatrace, Grafana, ServiceNow y Control-M, aplicadas en la construcción de pipelines de datos, modelado dimensional y desarrollo de automatizaciones que redujeron significativamente el tiempo de ejecución de rutinas operacionales. Poseo certificaciones en ITIL V4, COBIT 5 y SRE Practitioner, complementadas por formaciones en Business Intelligence, Data Science y Cybersecurity. Actualmente busco aplicar mi expertise técnica combinada con conocimientos en infraestructura y habilidades en análisis de datos, ETL y desarrollo de soluciones que agregan valor al negocio.",
    "hero.tagline": "Herramientas: Dynatrace • Grafana • ServiceNow • Control-M • PowerAutomate • Docker • AWS/Azure",
    "hero.ctaLinkedin": "LinkedIn",
    "hero.ctaGithub": "GitHub",
    "hero.ctaCv": "Abrir CV (PDF)",
    "hero.ctaProfile": "Abrir LinkedIn (PDF)",
    "hero.quickTitle": "Contacto",
    "hero.langs": "Idiomas:",
    "hero.langsValue": "Inglés B1 • Español B1",
    "hero.navTip": 'Desplázate hacia abajo — cada sección es una "diapositiva". (Teclas: PageDown/PageUp)',

    "impact.title": "Impacto",
    "impact.subtitle": "Resultados en entorno bancario crítico: reducción de trabajo repetitivo, mejora de visibilidad y operación 24x7.",
    "impact.i1t": "-72% de trabajo repetitivo operacional",
    "impact.i1d": "Automatizaciones con Python, PowerShell y PowerAutomate redujeron el tiempo de ejecución de rutinas de Consignación.",
    "impact.i2t": "Dashboards y reducción de MTTR",
    "impact.i2d": "Paneles en Power BI para salud del entorno y tendencias, reduciendo MTTR en clases recurrentes.",
    "impact.i3t": "Escala operacional (N1/N2)",
    "impact.i3d": "Absorción de rutinas, criterios de entrada, POPs y capacitación; menos transferencias en ServiceNow.",
    "impact.i4t": "Observabilidad",
    "impact.i4b1": "Administración/optimización Dynatrace y Grafana",
    "impact.i4b2": "Análisis de latencia, error y tráfico; detección proactiva",
    "impact.i5t": "Despliegue y operación",
    "impact.i5b1": "Ciclo de despliegue: CloudBees, Rundeck, Ansible, Docker, Liquibase",
    "impact.i5b2": "Middleware/consola: Gravity, colas MQ, WAS/Tomcat/JBoss",

    "exp.title": "Experiencia (línea de tiempo)",
    "exp.subtitle": "Trayectoria 2011–2025: soporte → liderazgo NOC → SRE/Observabilidad → Full Stack (autónomo).",
    "exp.r0": "Autónomo — Desarrollo Web Full Stack",
    "exp.r0p": "Belo Horizonte/MG",
    "exp.r0d": "03/2025 – actual",
    "exp.r0b1": "Desarrollo de extremo a extremo (producto, arquitectura, front, back, base de datos, pruebas, despliegue y operación).",
    "exp.r0b2": "Deveriar (PWA Salud/TCC): React 19 + Vite PWA + TypeScript; Fastify 4 + TS; Firestore + PostgreSQL (Cloud SQL); Cloud Run + Vercel; GitHub Actions.",
    "exp.r0b3": "Seguridad e integraciones: Google OAuth, CSRF, sesión vía cookies httpOnly; Google APIs (Drive AppData), Vision OCR; facturación con Stripe y soporte IAP (Apple/Google).",
    "exp.r0b4": "Productos paralelos: UltraHub CRM (Node.js/React/MongoDB), Quiz Tech (GitHub Pages), extensiones Chrome (Manifest V3) y pipeline OCR en Python (FastAPI).",
    "exp.r0b5": "IA Analítica (arquitectura): orquestración Node/Fastify + OpenAPI, gobernanza OPA/Rego, Trino, Keycloak (OIDC/LDAP/AD) y Evidence Service en Go + Postgres (planificado).",
    "exp.r1": "F1RST Digital (Santander) — Analista de TI Sr.",
    "exp.r1p": "Campinas/SP",
    "exp.r1d": "12/2022 – 02/2025",
    "exp.r1b1": "Observabilidad: Dynatrace/Grafana; análisis de métricas (latencia/error/tráfico) y detección proactiva.",
    "exp.r1b2": "Automatización: Python/PowerShell/PowerAutomate + Control-M (RPA) para reducir trabajo repetitivo.",
    "exp.r1b3": "Power BI: modelado estrella, DAX (MTTR/MTTA/SLO), tendencias por servicio y horario.",
    "exp.r1b4": "Despliegue: CloudBees, Rundeck, Ansible, Docker, Liquibase (validación y evidencia post-despliegue).",
    "exp.r2": "F1RST Digital — Analista de TI",
    "exp.r2p": "Campinas/SP",
    "exp.r2d": "12/2021 – 12/2022",
    "exp.r2b1": "Tratamiento de alertas (N1/N2): Dynatrace, Splunk, Grafana, Kibana; correlación CPU/memoria/disco/latencia.",
    "exp.r2b2": "Análisis de logs/trazas/excepciones (Tomcat, JBoss, WebSphere, WebLogic) y resolución de problemas de extremo a extremo.",
    "exp.r2b3": "Verificación de salud en AWS/Azure (cuotas, IAM, colas, latencias) y paneles analíticos en Power BI.",
    "exp.r3": "Global Hitss — Líder Técnico (NOC/Service Desk/Gestión de Accesos)",
    "exp.r3p": "Belo Horizonte/MG",
    "exp.r3d": "11/2020 – 12/2021",
    "exp.r3b1": "Coordinación de equipos 24x7 y transferencias estandarizadas (BH/RJ/SP).",
    "exp.r3b2": "Gestión de incidentes críticos: salas de guerra, líneas de tiempo, lecciones aprendidas y reducción de MTTR.",
    "exp.r3b3": "Procesos y documentación (POPs/flujos) + informes gerenciales (SLA/MTTR/volumetría).",
    "exp.noteD": "La trayectoria completa (2011–2025) está en el CV en PDF, incluyendo soporte, infraestructura e IAM.",

    "skills.title": "Competencias (core)",
    "skills.subtitle": "Enfoque en observabilidad, datos y automatización — con base sólida en operación crítica.",
    "skills.fieldTitle": "Mi campo de actuación",
    "skills.subtitleHero": "Haz clic en un elemento para ver proyecto/caso relacionado.",
    "skills.pauseMotion": "Pausar animación",
    "skills.resumeMotion": "Reanudar animación",
    "skills.s1t": "Observabilidad / Monitoreo",
    "skills.s1d": "Dynatrace, Grafana, Kibana/Splunk; métricas, alertas, resolución de problemas y operación 24x7.",
    "skills.s2t": "Datos / BI",
    "skills.s2d": "Power BI, modelado dimensional, DAX, ETL/ELT e indicadores (MTTR/MTTA/SLO).",
    "skills.s3t": "Automatización / DevOps",
    "skills.s3d": "Python, PowerShell, PowerAutomate, Control-M; despliegue/ops con Docker y automatización de rutinas.",
    "skills.stackT": "Stack (resumen)",
    "skills.stackD": "Web: React • TypeScript • Vite • Fastify • PostgreSQL • Firestore • OAuth/CSRF • Stripe • Playwright. Cloud/Deploy: Cloud Run • Cloud SQL • Vercel • GitHub Actions. Ops: Dynatrace • Grafana • ServiceNow • Control-M • Docker.",
    "skills.fullT": "Full Stack (autónomo)",
    "skills.fullD": "Producto + ingeniería: front/back, integraciones, seguridad, observabilidad y pipelines (03/2025–actual).",

    "cert.title": "Formación & Certificaciones",
    "cert.eduT": "Formación",
    "cert.edu1": "Gestión de TI — UniBH (conclusión 2014)",
    "cert.certT": "Certificaciones (destacado)",
    "cert.c1": "ITIL 4 Foundations",
    "cert.c2": "COBIT 5 Foundations",
    "cert.c3": "SRE Practitioner (DevOps Institute)",
    "cert.c4": "Oracle Cloud Infrastructure Foundations",
    "cert.c5": "Scrum Foundations",
    "cert.moreT": "Cursos",
    "cert.more1": "Power BI: modelado dimensional, DAX e indicadores (MTTR/MTTA/SLO).",
    "cert.more2": "Python: automatización, ETL/ELT, APIs y validación de datos.",
    "cert.more3": "Web: TypeScript, React, consumo de APIs y pruebas (E2E).",
    "cert.more4": "SQL: consultas analíticas, modelado y optimización básica.",
    "cert.more5": "DevOps/Cloud: Docker, pipelines CI/CD y despliegue (GCP/Vercel).",
    "cert.more6": "Seguridad: fundamentos (OAuth, CSRF, sesiones/cookies, rate limiting).",

    "proj.title": "Proyectos",
    "proj.subtitle": "Contenido ágil, orientado a prueba: qué es, qué problema resuelve, cómo fue construido.",
    "proj.p1d": "PWA para salud y psicoterapia (TCC/DBT): medicamentos, signos vitales, síntomas, ejercicios guiados e historial.",
    "proj.p1s": "React 19 • Vite PWA • Fastify • Firestore • PostgreSQL • Cloud Run • Vercel • Stripe",
    "proj.p1cap": "Capturas de pantalla de la app: documentación, psicoterapia guiada y análisis/insights.",
    "proj.p2cap": "Captura de pantalla de la pantalla de Oportunidad con dashboards.",
    "proj.p2d": "CRM con Oportunidades, Propuestas, Clientes, Productos y Dashboard (en evolución; repo privado).",
    "proj.p2s": "Node.js • React • Bootstrap • MongoDB",
    "proj.p3d": "Plataforma de quizzes para certificaciones técnicas (UI moderna, accesibilidad y enfoque en lectura/contraste).",
    "proj.p3s": "GitHub Pages • Front-end Web • UX/UI",
    "proj.p3cap": "Captura de pantalla de la pantalla inicial y formulario de inicio de examen.",
    "proj.p4t": "Landing corporativa-tech",
    "proj.p4d": "Página institucional con estética corporativa-tech (presentación de propuesta de valor, CTA y secciones de valor).",
    "proj.p4s": "HTML/CSS • Layout responsivo • Sistema de diseño simple",
    "proj.p4cap": 'Captura de pantalla de la sección "hero" y bloque de propuesta de valor.',
    "proj.open": "Abrir",
    "proj.details": "Detalles",
    "proj.todoT": 'TODO (para quedar "contratable")',
    "proj.todo1": "En cada proyecto, escribe 3 bullets: Problema → Solución → Prueba/Impacto.",
    "proj.todo2": "Agrega métricas simples: usuarios, tiempo ahorrado, latencia, costo, etc (incluso aproximado).",
    "proj.todo3": "Incluye 1 párrafo de arquitectura: datos, autenticación, despliegue y observabilidad.",

    "contact.title": "Contacto",
    "contact.subtitle": "Canal recomendado: LinkedIn. PDFs adjuntos en el sitio para lectura rápida.",
    "contact.ctaLinkedin": "Abrir LinkedIn",
    "contact.ctaEmail": "Enviar correo",
    "contact.ctaCv": "Abrir CV (PDF)",
    "contact.ctaProfile": "Abrir LinkedIn (PDF)",

    "nav.skip": "Saltar al contenido",
    "nav.hint": "Desplázate ↓",
    "nav.prev": "Diapositiva anterior",
    "nav.next": "Siguiente diapositiva",
    "nav.goto": "Ir a",

    "modal.close": "Cerrar",
    "modal.footerHint": "ESC para cerrar • Clic fuera para cerrar",
    "modal.section.psp": "Problema → Solución → Prueba/Impacto",
    "modal.section.metrics": "Métricas (instantánea)",
    "modal.section.metricsSimple": "Métricas",
    "modal.deveriar.title": "Deveriar — Detalles",
    "modal.deveriar.subtitle": "Problema → Solución → Prueba/Impacto • Métricas • Arquitectura",
    "modal.deveriar.kpi1t": "Uso",
    "modal.deveriar.kpi1v": "1.500 usuarios activos",
    "modal.deveriar.kpi2t": "Eficiencia",
    "modal.deveriar.kpi2v": "-35% tiempo administrativo (~40 min/semana/terapeuta)",
    "modal.deveriar.kpi3t": "Rendimiento",
    "modal.deveriar.kpi3v": "Mediana 280 ms rutas críticas • -22% reintentos",
    "modal.deveriar.bullet1": "Triaje y evolución terapéutica fragmentadas y manuales → App Deveriar centraliza sesiones, invitaciones y planes con flujos guiados y consentimientos → 1.500 usuarios activos, 35% menos tiempo en tareas administrativas (~40 min/semana por terapeuta).",
    "modal.deveriar.bullet2": "Baja confiabilidad en registros sensibles y cumplimiento → Datos con E2EE + Firestore con colecciones por usuario y age gate → 0 incidentes de fuga reportados, costo promedio de almacenamiento < US$ 0,02/usuario/mes.",
    "modal.deveriar.bullet3": "Experiencia lenta en captura y análisis de contenido → Backend Fastify + cola para Vision API con caché → latencia mediana 280 ms en rutas críticas, 22% menos reintentos.",
    "modal.deveriar.archT": "Arquitectura (resumen)",
    "modal.deveriar.archP": "Los datos se almacenan en Firestore con colecciones por userId y registros auditables; autenticación vía Firebase Auth con cifrado de extremo a extremo y sincronización opcional con Google Drive; despliegue en stack web estándar (Vite para el frontend y Node/Fastify para el backend), con logs estructurados vía Pino, métricas de latencia/errores por endpoint y seguimiento de flujos críticos para invitaciones y facturación.",
    "modal.ultrahub.title": "UltraHub CRM — Detalles",
    "modal.ultrahub.subtitle": "Problema → Solución → Prueba/Impacto • Métricas • Arquitectura",
    "modal.ultrahub.bullet1": "Equipos comerciales dispersos y sin visibilidad del embudo → Centralizar oportunidades, propuestas y clientes con pipeline y dashboard → Reducción de tiempo en seguimientos (~35%) y ahorro estimado de ~2h/semana por vendedor.",
    "modal.ultrahub.bullet2": "Creación de propuestas manual y lenta → Catálogo de productos + plantillas y generación rápida de propuestas → ~45% menos tiempo para generar propuestas y reducción de costo operacional en ~20% en el equipo comercial.",
    "modal.ultrahub.bullet3": "Datos inconsistentes y baja confiabilidad en los informes → Registro único con validaciones y métricas en el dashboard → Latencia promedio de lectura <250ms en el dashboard y aumento de ~30% en la tasa de conversión seguida por etapas.",
    "modal.ultrahub.kpi1t": "Eficiencia",
    "modal.ultrahub.kpi1v": "-35% tiempo en seguimientos (~2h/semana/vendedor)",
    "modal.ultrahub.kpi2t": "Productividad",
    "modal.ultrahub.kpi2v": "-45% tiempo para generar propuestas • -20% costo operacional",
    "modal.ultrahub.kpi3t": "Rendimiento",
    "modal.ultrahub.kpi3v": "Latencia promedio <250ms dashboard • +30% tasa de conversión",
    "modal.ultrahub.archT": "Arquitectura (resumen)",
    "modal.ultrahub.archP": "Los datos del CRM se persisten en MongoDB con colecciones separadas por entidades (oportunidades, propuestas, clientes y productos), accedidos por una API Node.js; autenticación vía JWT y control de sesión en el frontend React; despliegue dividido entre backend y frontend (ej.: VPS/contenedores) con variables de entorno para URLs y secreto; observabilidad con logs estructurados, métricas básicas (latencia, errores, throughput) y alertas simples para caídas de API.",
    "modal.quiz.title": "Quiz Tech — Detalles",
    "modal.quiz.subtitle": "Problema → Solución → Prueba/Impacto • Métricas • Arquitectura",
    "modal.quiz.bullet1": "El estudio para certificaciones queda fragmentado (PDF/hoja de cálculo/notas), sin \"simulado\" consistente ni control de reglas/tiempo → PWA de quiz con múltiples exámenes (AWS/COBIT/ITIL 4/AZ-900), selección guiada de grupos y temporizador con pausa/reanudación → simulado configurable de hasta 75 preguntas (3×25) por sesión y 30 min por conjunto, con retroalimentación inmediata y flujo dedicado (inicio → grupos → examen).",
    "modal.quiz.bullet2": "Los quizzes \"caseros\" tienden a ser malos de usar (alerts, poca accesibilidad, fricción en móvil/teclado), lo que reduce adopción → UI responsiva, modales en lugar de alert(), accesibilidad con navegación por teclado/ARIA, y pruebas automatizadas de accesibilidad → el proyecto declara enfoque en WCAG AA, teclado completo y validaciones accesibles; hay pipeline de pruebas incluyendo Cypress (E2E) y axe-core (a11y).",
    "modal.quiz.bullet3": "Sin historial y evidencia, es difícil medir evolución y atacar puntos débiles (y compartir resultado) → historial de intentos + estadísticas por tópico + modo de revisión (errores) y exportación a PDF → historial y \"base de datos\" son locales (IndexedDB, con fallback localStorage), con exportación en PDF (jsPDF) y revisión enfocada en errores.",
    "modal.quiz.kpi1t": "Eficiencia",
    "modal.quiz.kpi1v": "Configuración del simulado < 1 min (vs. 5–10 min manual)",
    "modal.quiz.kpi2t": "Rendimiento",
    "modal.quiz.kpi2v": "Latencia ~0–50 ms (todo local)",
    "modal.quiz.kpi3t": "Costo",
    "modal.quiz.kpi3v": "~US$ 0/mes (hosting estático)",
    "modal.quiz.archT": "Arquitectura (resumen)",
    "modal.quiz.archP": "Aplicación 100% front-end (HTML/CSS/JS) con páginas dedicadas (index.html, select-groups.html, quiz.html, history.html, review.html) y modo PWA (manifest + service worker). Los datos (usuarios, intentos, resultados) persisten en el navegador vía IndexedDB con fallback para localStorage; la autenticación es \"básica\"/local (identificación por nombre/correo y control de acceso a la ruta del quiz), sin depender de backend. El despliegue es estático en GitHub Pages (munizmath.github.io), manteniendo costo prácticamente nulo. La observabilidad está centrada en calidad preventiva: pruebas E2E (Cypress), pruebas de accesibilidad (axe-core) y validaciones/controles (ej.: prevención de XSS, validación de entrada) — sin telemetría centralizada por defecto.",
    "modal.landing.title": "Landing corporativa-tech — Detalles",
    "modal.landing.subtitle": "Problema → Solución → Prueba/Impacto • Métricas • Arquitectura",
    "modal.landing.pspTodo": "TODO: pega aquí tus 3 bullets.",
    "modal.landing.metricsTodo": "TODO: rendimiento (Lighthouse), tiempo de carga, etc.",
    "modal.landing.archT": "Arquitectura (resumen)",
    "modal.landing.archP": "TODO: HTML/CSS, despliegue, assets, cache, etc."
  }
};

function storageAvailable(){
  try {
    const key = "__storage_test__";
    localStorage.setItem(key, "1");
    localStorage.removeItem(key);
    return true;
  } catch (e) { return false; }
}
const canStoreLang = storageAvailable();

function setLang(lang){
  const map = dict[lang] || dict.pt;
  document.documentElement.lang = (lang === "pt" ? "pt-BR" : lang);

  // Atualizar elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(map[key]) {
      // Preservar quebras de linha: converter \n em <br>
      const text = map[key];
      // Para elementos que suportam HTML (P, SPAN, DIV, LI, etc), converter \n em <br>
      if(el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'DIV' || el.tagName === 'LI' || el.tagName === 'TD' || el.tagName === 'TH') {
        // Substituir \n\n por <br><br> e \n por <br>
        el.innerHTML = text.replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
      } else {
        el.textContent = text;
      }
    }
  });

  // Atualizar títulos com data-i18n-title
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{
    const key = el.getAttribute("data-i18n-title");
    if(map[key]) el.title = map[key];
  });

  // Atualizar aria-label com data-i18n-aria-label
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el=>{
    const key = el.getAttribute("data-i18n-aria-label");
    if(map[key]) el.setAttribute("aria-label", map[key]);
  });

  // Atualizar atributos content com data-i18n-content (meta tags: description/OG/Twitter)
  document.querySelectorAll("[data-i18n-content]").forEach(el=>{
    const key = el.getAttribute("data-i18n-content");
    if(map[key]) el.setAttribute("content", map[key]);
  });

  // Atualizar OG locale (pt_BR / en_US / es_ES)
  const ogLocale = document.getElementById("meta-og-locale");
  if(ogLocale){
    const locale = (lang === "pt" ? "pt_BR" : (lang === "en" ? "en_US" : "es_ES"));
    ogLocale.setAttribute("content", locale);
  }


  // Atualizar títulos dos dots de navegação
  const dots = document.getElementById("dots");
  if(dots){
    const dotButtons = dots.querySelectorAll("button");
    dotButtons.forEach((btn, i)=>{
      const slideHeading = slides[i]?.querySelector("h1, h2, h3");
      // Obter texto traduzido do heading (pode ter data-i18n)
      let headingText = "";
      if(slideHeading){
        const i18nKey = slideHeading.getAttribute("data-i18n");
        if(i18nKey && map[i18nKey]){
          headingText = map[i18nKey];
        } else {
          headingText = slideHeading.textContent?.trim() || "";
        }
      }
      const gotoText = map["nav.goto"] || "Ir para";
      btn.title = `${gotoText} ${headingText || `Slide ${i+1}`}`;
      btn.setAttribute("aria-label", `${gotoText} ${headingText || `Slide ${i+1}`}`);
    });
  }

  // Atualizar botões de idioma
  document.getElementById("btn-pt").classList.toggle("primary", lang==="pt");
  document.getElementById("btn-en").classList.toggle("primary", lang==="en");
  document.getElementById("btn-es").classList.toggle("primary", lang==="es");
  
  // Atualizar aria-pressed nos botões de idioma
  document.getElementById("btn-pt").setAttribute("aria-pressed", lang==="pt" ? "true" : "false");
  document.getElementById("btn-en").setAttribute("aria-pressed", lang==="en" ? "true" : "false");
  document.getElementById("btn-es").setAttribute("aria-pressed", lang==="es" ? "true" : "false");
  
  // Atualizar texto do botão de pausa/retomar se existir
  // O sistema de i18n já atualiza elementos com data-i18n automaticamente acima
  // Mas precisamos garantir que o data-i18n esteja correto baseado no estado atual
  const toggleMotionBtn = document.getElementById("toggleMotion");
  if (toggleMotionBtn) {
    const isPaused = toggleMotionBtn.getAttribute("aria-pressed") === "true";
    const key = isPaused ? "skills.resumeMotion" : "skills.pauseMotion";
    toggleMotionBtn.setAttribute("data-i18n", key);
    // Forçar atualização do texto (já foi atualizado pelo loop acima, mas garantir)
    if (map[key]) {
      toggleMotionBtn.textContent = map[key];
    }
  }
  
  if (canStoreLang) localStorage.setItem("lang", lang);
}

document.getElementById("btn-pt").onclick = ()=>setLang("pt");
document.getElementById("btn-en").onclick = ()=>setLang("en");
document.getElementById("btn-es").onclick = ()=>setLang("es");

// Dots (navegação lateral)
const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll("section.slide")];
const dots = document.getElementById("dots");

function getTopbarHeight(){
  const height = getComputedStyle(document.documentElement).getPropertyValue('--topbar-h');
  return parseInt(height) || 64;
}

slides.forEach((_, i)=>{
  const b = document.createElement("button");
  b.title = `Slide ${i+1}`;
  b.setAttribute("aria-label", `Ir para slide ${i+1}`);
  b.onclick = () => {
    const topbarH = getTopbarHeight();
    const targetTop = slides[i].offsetTop - topbarH;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    deck.scrollTo({top: targetTop, behavior: prefersReducedMotion ? "auto" : "smooth"});
  };
  dots.appendChild(b);
});

function setActiveDot(idx){
  [...dots.querySelectorAll("button")].forEach((b,i)=> b.classList.toggle("active", i===idx));
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const idx = Number(e.target.getAttribute("data-slide"));
      setActiveDot(idx);
    }
  });
}, {root: deck, threshold: 0.6});
slides.forEach(s=>io.observe(s));
setActiveDot(0);

function go(delta){
  const idx = Math.max(0, Math.min(slides.length-1, currentIndex()+delta));
  const topbarH = getTopbarHeight();
  const targetTop = slides[idx].offsetTop - topbarH;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  deck.scrollTo({top: targetTop, behavior: prefersReducedMotion ? "auto" : "smooth"});
}
function currentIndex(){
  const topbarH = getTopbarHeight();
  const scrollTop = deck.scrollTop;
  let best = 0, bestDist = Infinity;
  
  slides.forEach((s, i)=>{
    const slideTop = s.offsetTop - topbarH;
    const slideBottom = slideTop + s.offsetHeight;
    const viewportCenter = scrollTop + (window.innerHeight / 2);
    
    // Calcular distância do centro do viewport ao centro do slide
    const slideCenter = slideTop + (s.offsetHeight / 2);
    const dist = Math.abs(viewportCenter - slideCenter);
    
    // Preferir slide que está mais visível no viewport
    if(scrollTop >= slideTop - topbarH && scrollTop < slideBottom - topbarH){
      const visibleRatio = Math.min(1, (slideBottom - scrollTop) / window.innerHeight);
      const adjustedDist = dist * (1 - visibleRatio * 0.5);
      if(adjustedDist < bestDist){
        bestDist = adjustedDist;
        best = i;
      }
    } else if(dist < bestDist){
      bestDist = dist;
      best = i;
    }
  });
  
  return best;
}
document.getElementById("btn-up").onclick = ()=>go(-1);
document.getElementById("btn-down").onclick = ()=>go(1);

window.addEventListener("keydown", (e)=>{
  // Não interceptar se modal estiver aberto
  if(document.querySelector(".modal-overlay.open")) return;
  
  // Não interceptar se foco estiver em elementos de entrada
  const activeEl = document.activeElement;
  if(activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) return;
  
  if(["PageDown","ArrowDown"].includes(e.key)) { e.preventDefault(); go(1); }
  if(["PageUp","ArrowUp"].includes(e.key)) { e.preventDefault(); go(-1); }
});

// Hint some depois do primeiro scroll
const hint = document.getElementById("navhint");
let hidden = false;
deck.addEventListener("scroll", ()=>{
  if(!hidden && deck.scrollTop > 30){
    hint.style.opacity = "0";
    hint.style.pointerEvents = "none";
    hidden = true;
  }
}, {passive:true});

// Lang inicial
let savedLang = "pt";
if (canStoreLang) savedLang = localStorage.getItem("lang") || "pt";
setLang(savedLang);

// MODAIS
let lastFocus = null;
let focusableElements = [];
let firstFocusable = null;
let lastFocusable = null;
let currentTrapHandler = null;
let currentTrapOverlay = null;

function getFocusableElements(container) {
  const selectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll(selectors)).filter(el => {
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
}

function trapFocus(e, container) {
  if (e.key !== 'Tab') return;
  if(!firstFocusable || !lastFocusable) return;
  
  if (e.shiftKey) {
    if (document.activeElement === firstFocusable) {
      e.preventDefault();
      lastFocusable.focus();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      e.preventDefault();
      firstFocusable.focus();
    }
  }
}

function openModal(key){
  const overlay = document.getElementById(`modal-${key}`);
  if(!overlay) return;

  // Se já existe modal aberto, fecha antes
  if(document.querySelector(".modal-overlay.open")) closeModal();

  lastFocus = document.activeElement;

  const topbar = document.querySelector(".topbar");
  const rail = document.querySelector(".rail");
  const supportsInert = ("inert" in HTMLElement.prototype);

  // Marcar background como inativo
  deck.setAttribute("aria-hidden","true");
  if(supportsInert) deck.inert = true;

  topbar?.setAttribute("aria-hidden","true");
  rail?.setAttribute("aria-hidden","true");
  if(supportsInert){
    if(topbar) topbar.inert = true;
    if(rail) rail.inert = true;
  }

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden","false");
  deck.style.overflow = "hidden";
  document.body.classList.add("modal-open");

  const modal = overlay.querySelector(".modal") || overlay;
  if(modal && !modal.hasAttribute("tabindex")) modal.setAttribute("tabindex","-1");

  focusableElements = getFocusableElements(modal);
  firstFocusable = focusableElements[0] || null;
  lastFocusable = focusableElements[focusableElements.length - 1] || null;

  // Guardar handler para remover depois (evita leak)
  currentTrapOverlay = overlay;
  currentTrapHandler = (e) => trapFocus(e, modal);
  overlay.addEventListener("keydown", currentTrapHandler);

  const closeBtn = overlay.querySelector("[data-close-modal]");
  if(closeBtn) closeBtn.focus();
  else if(firstFocusable) firstFocusable.focus();
  else modal.focus();
}

function closeModal(){
  const open = document.querySelector(".modal-overlay.open");
  if(!open) return;

  // Remover focus trap listener (mesma referência)
  if(currentTrapOverlay === open && currentTrapHandler){
    open.removeEventListener("keydown", currentTrapHandler);
  }
  currentTrapOverlay = null;
  currentTrapHandler = null;

  open.classList.remove("open");
  open.setAttribute("aria-hidden","true");
  deck.style.overflow = "auto";
  document.body.classList.remove("modal-open");

  // Restaurar background
  const topbar = document.querySelector(".topbar");
  const rail = document.querySelector(".rail");
  const supportsInert = ("inert" in HTMLElement.prototype);

  deck.removeAttribute("aria-hidden");
  if(supportsInert) deck.inert = false;

  topbar?.removeAttribute("aria-hidden");
  rail?.removeAttribute("aria-hidden");
  if(supportsInert){
    if(topbar) topbar.inert = false;
    if(rail) rail.inert = false;
  }

  if(lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

// Garantir que os event listeners sejam anexados após o DOM estar pronto
function initModals(){
  document.querySelectorAll("[data-open-modal]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      e.stopPropagation();
      const key = btn.getAttribute("data-open-modal");
      if(key) {
        openModal(key);
      }
    });
  });
  
  document.querySelectorAll("[data-close-modal]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  });
  
  document.querySelectorAll(".modal-overlay").forEach(overlay=>{
    overlay.addEventListener("click", (e)=>{
      if(e.target === overlay) closeModal();
    });
  });
  
window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeModal();
});

// CARROSSEL DE PROJETOS - 2 projetos por vez
let currentIndex = 0;
const carouselTrack = document.getElementById("project-carousel");
const slides = document.querySelectorAll("#project-carousel .carousel-slide");
const indicators = document.querySelectorAll("#carousel-indicators .carousel-indicator");
const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const totalSlides = slides.length;

// Verificar se está em mobile (1 slide por vez) ou desktop (2 slides por vez)
function isMobile(){
  return window.innerWidth <= 940;
}

function getSlidesPerView(){
  return isMobile() ? 1 : 2;
}

function getMaxIndex(){
  const slidesPerView = getSlidesPerView();
  return Math.max(0, totalSlides - slidesPerView);
}

function updateCarousel(index){
  // Limitar índice ao máximo permitido
  const maxIndex = getMaxIndex();
  currentIndex = Math.max(0, Math.min(index, maxIndex));
  
  const slidesPerView = getSlidesPerView();
  const slideWidth = isMobile() ? 100 : 50; // porcentagem
  const translateX = -(currentIndex * slideWidth);
  
  if(carouselTrack){
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }
  
  // Atualizar indicadores - marcar como ativo o primeiro slide visível
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide(){
  const slidesPerView = getSlidesPerView();
  const maxIndex = getMaxIndex();
  
  if(currentIndex < maxIndex){
    updateCarousel(currentIndex + 1);
  } else {
    // Loop: voltar ao início
    updateCarousel(0);
  }
}

function prevSlide(){
  const slidesPerView = getSlidesPerView();
  
  if(currentIndex > 0){
    updateCarousel(currentIndex - 1);
  } else {
    // Loop: ir para o final
    const maxIndex = getMaxIndex();
    updateCarousel(maxIndex);
  }
}

// Inicializar carrossel
if(carouselTrack && slides.length > 0){
  updateCarousel(0);
  
  // Event listeners para botões
  if(prevBtn) prevBtn.addEventListener("click", prevSlide);
  if(nextBtn) nextBtn.addEventListener("click", nextSlide);
  
  // Navegação por indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => updateCarousel(index));
  });
  
  // Ajustar carrossel ao redimensionar janela
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateCarousel(currentIndex);
    }, 150);
  });
}

// Navegação por teclado (setas) quando o carrossel está visível
document.addEventListener("keydown", (e) => {
  // Não interceptar se modal estiver aberto ou foco estiver em inputs
  if(document.querySelector(".modal-overlay.open")) return;
  const activeEl = document.activeElement;
  if(activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) return;
  
  // Verificar se o slide de projetos está visível
  const projectsSlide = document.querySelector('section[data-slide="5"]');
  if(!projectsSlide) return;
  const rect = projectsSlide.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  if(isVisible){
    if(e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
    if(e.key === "ArrowRight") { e.preventDefault(); nextSlide(); }
  }
});

}

// Inicializar modais quando o DOM estiver pronto
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", initModals);
} else {
  initModals();
}

// Animação de nuvem de palavras com clusters por grupo
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const field = document.getElementById("skillsField");
  const topbar = document.getElementById("skillsTopbar");
  const layer = document.getElementById("skillsLayer");
  const legend = document.getElementById("skillsLegend");
  const btn = document.getElementById("toggleMotion");
  const staticList = document.getElementById("skillsStaticList");

  if (!field || !topbar || !layer || !legend || !btn || !staticList) return;

  // Configuração: grupos com bounds e itens
  const CONFIG = {
    speedMin: 0.18,
    speedMax: 0.42,
    repel: true,         // empurra sobreposições leves
    repelStrength: 0.06, // mais alto = separa mais
    maxFps: 45,          // reduz CPU no 1º slide
    groups: [
      {
        key: "sre",
        label: "Observabilidade & SRE",
        color: "#7aa2f7",
        bounds: { x1: 0.05, y1: 0.33, x2: 0.52, y2: 0.92 },
        items: [
          { text: "Observabilidade", href: "#projetos" },
          { text: "Dynatrace", href: "#projetos" },
          { text: "Grafana", href: "#projetos" },
          { text: "Kibana", href: "#projetos" },
          { text: "SLO", href: "#projetos" },
          { text: "MTTR", href: "#projetos" },
        ]
      },
      {
        key: "data",
        label: "Dados & BI",
        color: "#9ece6a",
        bounds: { x1: 0.54, y1: 0.33, x2: 0.96, y2: 0.66 },
        items: [
          { text: "SQL", href: "#projetos" },
          { text: "ETL", href: "#projetos" },
          { text: "Power BI", href: "#projetos" },
          { text: "DAX", href: "#projetos" },
          { text: "Data Modeling", href: "#projetos" },
        ]
      },
      {
        key: "auto",
        label: "Automação",
        color: "#ff9e64",
        bounds: { x1: 0.54, y1: 0.68, x2: 0.96, y2: 0.92 },
        items: [
          { text: "Power Automate", href: "#projetos" },
          { text: "PowerShell", href: "#projetos" },
          { text: "Python", href: "#projetos" },
          { text: "Scripts RPA", href: "#projetos" },
        ]
      },
      {
        key: "cloud",
        label: "Cloud & Infra",
        color: "#bb9af7",
        bounds: { x1: 0.05, y1: 0.12, x2: 0.96, y2: 0.30 },
        items: [
          { text: "AWS", href: "#projetos" },
          { text: "Azure", href: "#projetos" },
          { text: "Docker", href: "#projetos" },
          { text: "Linux", href: "#projetos" },
          { text: "Windows Server", href: "#projetos" },
        ]
      }
    ]
  };

  // Legenda + fallback estático (sempre preenchidos)
  function buildLegendAndStatic() {
    legend.innerHTML = "";
    staticList.innerHTML = "";

    for (const g of CONFIG.groups) {
      const pill = document.createElement("div");
      pill.className = "legend-pill";
      pill.innerHTML = `<span class="legend-dot" style="--g:${g.color}"></span><span>${g.label}</span>`;
      legend.appendChild(pill);

      for (const it of g.items) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = it.href;
        a.textContent = `${it.text} — ${g.label}`;
        li.appendChild(a);
        staticList.appendChild(li);
      }
    }
  }

  buildLegendAndStatic();
  if (reducedMotion) return;

  // Cria bubbles clicáveis (links)
  const bubbles = [];
  for (const g of CONFIG.groups) {
    for (const it of g.items) {
      const a = document.createElement("a");
      a.className = "bubble";
      a.href = it.href;
      a.textContent = it.text;
      a.style.setProperty("--g", g.color);
      a.dataset.group = g.key;
      layer.appendChild(a);
      bubbles.push(a);
    }
  }

  // Interceptar cliques para navegar ao slide de projetos
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.bubble");
    if (!a) return;
    e.preventDefault();
    // Navegar para o slide de projetos (data-slide="5")
    const projectsSlide = document.querySelector('section[data-slide="5"]');
    if (projectsSlide) {
      const topbarH = getTopbarHeight();
      const targetTop = projectsSlide.offsetTop - topbarH;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      deck.scrollTo({top: targetTop, behavior: prefersReducedMotion ? "auto" : "smooth"});
    }
  });

  // Estado
  let running = true;
  let lastFrame = 0;

  const items = bubbles.map((el) => ({
    el,
    groupKey: el.dataset.group,
    x: 0, y: 0,
    vx: (Math.random() * (CONFIG.speedMax - CONFIG.speedMin) + CONFIG.speedMin) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * (CONFIG.speedMax - CONFIG.speedMin) + CONFIG.speedMin) * (Math.random() < 0.5 ? -1 : 1),
    w: 0, h: 0,
    boundsPx: null
  }));

  function getGroup(key) {
    return CONFIG.groups.find(g => g.key === key);
  }

  function measureAndInit() {
    const rect = field.getBoundingClientRect();
    const topbarRect = topbar.getBoundingClientRect();

    const padding = 14;
    const reservedTop = (topbarRect.height + 10 + 28); // topbar + legend + respiro
    const usable = {
      left: padding,
      top: padding + reservedTop,
      right: rect.width - padding,
      bottom: rect.height - padding
    };

    // mede tamanhos
    for (const it of items) {
      const r = it.el.getBoundingClientRect();
      it.w = r.width;
      it.h = r.height;
    }

    // bounds por grupo (em px)
    for (const it of items) {
      const g = getGroup(it.groupKey);
      const bx1 = usable.left + (usable.right - usable.left) * g.bounds.x1;
      const by1 = usable.top + (usable.bottom - usable.top) * g.bounds.y1;
      const bx2 = usable.left + (usable.right - usable.left) * g.bounds.x2;
      const by2 = usable.top + (usable.bottom - usable.top) * g.bounds.y2;

      it.boundsPx = { x1: bx1, y1: by1, x2: bx2, y2: by2 };

      // init aleatório dentro do grupo
      it.x = bx1 + Math.random() * Math.max(1, (bx2 - bx1 - it.w));
      it.y = by1 + Math.random() * Math.max(1, (by2 - by1 - it.h));
      it.el.style.transform = `translate3d(${it.x}px, ${it.y}px, 0)`;
    }
  }

  measureAndInit();
  window.addEventListener("resize", measureAndInit);

  // Pausa em hover/focus
  field.addEventListener("pointerenter", () => running = false);
  field.addEventListener("pointerleave", () => running = true);

  for (const el of bubbles) {
    el.addEventListener("focus", () => running = false);
    el.addEventListener("blur", () => running = true);
  }

  // Botão pause
  btn.addEventListener("click", () => {
    running = !running;
    btn.setAttribute("aria-pressed", String(!running));
    const lang = document.documentElement.lang === "pt-BR" ? "pt" : (document.documentElement.lang === "en" ? "en" : "es");
    const langDict = dict[lang] || dict.pt;
    btn.textContent = running ? (langDict["skills.pauseMotion"] || "Pausar animação") : (langDict["skills.resumeMotion"] || "Retomar animação");
    btn.setAttribute("data-i18n", running ? "skills.pauseMotion" : "skills.resumeMotion");
  });

  function overlaps(a, b) {
    return (
      a.x < b.x + b.w &&
      a.x + a.w > b.x &&
      a.y < b.y + b.h &&
      a.y + a.h > b.y
    );
  }

  function repel() {
    // O(n^2) pequeno (mantém n baixo). Se você botar 60 tags aqui, vai pesar.
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const A = items[i], B = items[j];
        if (!overlaps(A, B)) continue;

        const dx = (A.x + A.w / 2) - (B.x + B.w / 2);
        const dy = (A.y + A.h / 2) - (B.y + B.h / 2);
        const dist = Math.max(1, Math.hypot(dx, dy));

        const push = CONFIG.repelStrength;
        const ux = dx / dist, uy = dy / dist;

        A.x += ux * push; A.y += uy * push;
        B.x -= ux * push; B.y -= uy * push;
      }
    }
  }

  function tick(ts) {
    const minDelta = 1000 / CONFIG.maxFps;
    if (!lastFrame) lastFrame = ts;
    const delta = ts - lastFrame;

    if (delta >= minDelta) {
      lastFrame = ts;

      if (running) {
        for (const it of items) {
          const b = it.boundsPx;

          it.x += it.vx;
          it.y += it.vy;

          // bounce dentro do grupo
          if (it.x <= b.x1) { it.x = b.x1; it.vx *= -1; }
          if (it.x + it.w >= b.x2) { it.x = b.x2 - it.w; it.vx *= -1; }
          if (it.y <= b.y1) { it.y = b.y1; it.vy *= -1; }
          if (it.y + it.h >= b.y2) { it.y = b.y2 - it.h; it.vy *= -1; }
        }

        if (CONFIG.repel) repel();

        for (const it of items) {
          it.el.style.transform = `translate3d(${it.x}px, ${it.y}px, 0)`;
        }
      }
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
