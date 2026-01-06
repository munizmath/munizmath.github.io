---
name: Portfólio Currículo Híbrido
overview: "Criar página de apresentação profissional mantendo a estrutura atual (dark theme com slides) mas incorporando as melhores práticas do Simplefolio: animações reveal, layout otimizado, seções bem estruturadas e responsividade aprimorada."
todos:
  - id: extract-cv-data
    content: Extrair e estruturar dados do currículo PDF
    status: completed
  - id: create-assets-folder
    content: Criar estrutura de pastas e assets (profile, projects placeholders)
    status: completed
  - id: add-animations
    content: Integrar ScrollReveal e Vanilla-tilt via CDN com SRI
    status: completed
    dependencies:
      - create-assets-folder
  - id: expand-hero
    content: Melhorar seção Hero com foto de perfil e animações
    status: completed
  - id: create-experience-section
    content: Criar seção Experiência Profissional com timeline
    status: completed
  - id: enhance-skills
    content: Expandir seção Competências com badges tecnologias
    status: completed
  - id: improve-projects
    content: Melhorar cards de projetos com tilt, screenshots e badges
    status: completed
  - id: create-education-section
    content: Criar seção Formação Acadêmica e certificações
    status: completed
  - id: update-i18n
    content: Expandir dicionários de tradução PT/EN/ES
    status: completed
    dependencies:
      - create-experience-section
      - create-education-section
  - id: seo-optimization
    content: Adicionar meta tags Open Graph e Schema.org
    status: completed
  - id: create-docs
    content: Criar README.md e CHANGELOG.md conforme regras
    status: completed
---

# Plano: Portfólio Currículo Híbrido - Matheus Muniz

## 1. Análise e Estruturação de Conteúdo

**Objetivo**: Extrair e organizar informações do currículo para popular o site

- Revisar [`index.html`](e:\DESENVOLVIMENTO\munizmath.io\index.html) atual (dark theme, slides, i18n)
- Extrair dados estruturados do currículo PDF:
- Informações pessoais e contato
- Experiências profissionais (empresas, períodos, responsabilidades)
- Projetos destacados (Deveriar, UltraHub + outros)
- Habilidades técnicas (já tem: Observabilidade, SQL, Python, Automação, Full Stack)
- Formação acadêmica
- Certificações/cursos relevantes
- Organizar conteúdo em estrutura JSON para facilitar manutenção

## 2. Melhorias no Design (inspiradas no Simplefolio)

**Objetivo**: Manter dark theme atual mas adicionar elementos visuais do Simplefolio

### Componentes a adicionar:

- **Animações Reveal**: Adicionar ScrollReveal.js ou animações CSS para fade-in suave ao scroll
- **Tilt Effect**: Efeito parallax sutil nos cards de projetos (inspirado no Simplefolio)
- **Gradientes de destaque**: Melhorar gradientes de fundo existentes
- **Transições suaves**: Entre slides/seções
- **Imagem de perfil**: Placeholder circular com borda accent no Hero
- **Timeline visual**: Para experiências profissionais

### Otimizações de layout:

- Grid responsivo melhorado para projetos (cards uniformes)
- Espaçamento consistente entre seções
- Tipografia com hierarquia mais clara
- Hover states nos links e botões

## 3. Estrutura de Seções (Balanceada)

**Mantendo estrutura atual** mas expandindo conteúdo:

### Hero (já existe)

- Manter título dinâmico
- Adicionar foto de perfil
- Melhorar CTA com animação

### Sobre (já existe)

- Expandir com resumo profissional mais detalhado
- Adicionar métricas de impacto (se disponíveis no CV)
- Badge do LinkedIn (código fornecido)

### Experiência Profissional (NOVA seção)

- Timeline com empresas e períodos
- Responsabilidades-chave por cargo
- Tecnologias utilizadas em cada posição
- Layout: card com logo empresa (placeholder) + detalhes

### Competências (já existe)

- Manter estrutura de 3 cards
- Adicionar badges visuais para tecnologias
- Categorizar: Backend, Frontend, DevOps, Data, Soft Skills

### Projetos (já existe)

- Expandir com capturas de tela (placeholders)
- Adicionar badges de tecnologias usadas
- Links: Demo + Repositório
- Tilt effect nos cards

### Formação Acadêmica (NOVA seção)

- Cards com instituição, curso, período
- Certificações relevantes

### Contato (já existe)

- Manter estrutura atual
- Adicionar form de contato opcional (placeholder)

## 4. Funcionalidades Técnicas

### Scripts a adicionar:

- **ScrollReveal.js** (CDN): Animações ao scroll
- **Vanilla-tilt.js** (CDN): Efeito parallax nos cards
- **Smooth scroll** nativo (já tem)
- **Lazy loading** para imagens (quando adicionar)

### Assets necessários:

- Criar pasta [`assets/`](e:\DESENVOLVIMENTO\munizmath.io\assets):
- [`cv.pdf`](e:\DESENVOLVIMENTO\munizmath.io\assets\cv.pdf): Link para download do currículo
- [`profile.jpg`](e:\DESENVOLVIMENTO\munizmath.io\assets\profile.jpg): Foto de perfil (placeholder)
- [`projects/`](e:\DESENVOLVIMENTO\munizmath.io\assets\projects): Screenshots dos projetos (placeholders)

### I18n:

- Expandir dicionários `pt`, `en`, `es` com novos textos
- Traduzir experiências e formação

## 5. Otimização e Performance

- Minificar CSS inline (opcional, para produção)
- Adicionar meta tags Open Graph para compartilhamento
- Melhorar meta description
- Schema.org markup para SEO (Person + WebPage)
- Favicon adequado

## 6. Documentação e Ajustes Finais

- Comentários TODO destacando onde adicionar conteúdo real
- README.md com instruções de customização
- Seção de "Como atualizar" no próprio código
- Validação HTML5 e acessibilidade básica

## Arquivos a Modificar/Criar

| Arquivo | Ação |
|---------|------|
| [`index.html`](e:\DESENVOLVIMENTO\munizmath.io\index.html) | Modificar: expandir seções, adicionar animações, melhorar estrutura |
| [`assets/cv.pdf`](e:\DESENVOLVIMENTO\munizmath.io\assets\cv.pdf) | Criar: copiar currículo para download |
| [`assets/profile.jpg`](e:\DESENVOLVIMENTO\munizmath.io\assets\profile.jpg) | Criar: placeholder 400x400px |
| [`assets/projects/deveriar.jpg`](e:\DESENVOLVIMENTO\munizmath.io\assets\projects\deveriar.jpg) | Criar: placeholder 1366x767px |
| [`assets/projects/ultrahub.jpg`](e:\DESENVOLVIMENTO\munizmath.io\assets\projects\ultrahub.jpg) | Criar: placeholder 1366x767px |
| [`README.md`](e:\DESENVOLVIMENTO\munizmath.io\README.md) | Criar: documentação |
| [`CHANGELOG.md`](e:\DESENVOLVIMENTO\munizmath.io\CHANGELOG.md) | Criar: conforme regras do projeto |

## Notas de Segurança (conforme 52-DDS v2.0)

- Sem secrets no código (LinkedIn badge será embed oficial)
- Sem JavaScript de terceiros não confiáveis (CDN com SRI)
- Sanitização de inputs (se adicionar form)
- Links externos com `rel="noreferrer noopener"`
- HTTPS obrigatório em produção

## Resultado Esperado

Uma página de portfólio moderna, profissional e completa que:

- Mantém a identidade visual atual (dark theme, slides)
- Incorpora animações suaves e efeitos visuais do Simplefolio
- Apresenta todas as seções de forma balanceada e atraente
- É totalmente responsiva e otimizada
- Facilita atualização futura de conteúdo
- Pronta para deploy em Netlify/Vercel/GitHub Pages