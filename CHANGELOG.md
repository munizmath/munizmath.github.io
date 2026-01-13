# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.1.7] - 12-01-2026 21:15:00

### Adicionado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Transformada seção `.chips` em animação de nuvem de palavras
    - Convertido `div.chips` em `div.skill-field` com estrutura de campo animado
    - Adicionado topbar com título "O que eu faço" e botão de pausa/retomar
    - Convertidos todos os `div.chip` (40 skills) em `div.bubble` com posicionamento absoluto
    - Adicionada lista estática `ul.sr-only` com todas as skills para acessibilidade/ATS
    - Mantidas todas as 40 skills existentes na animação

- `style.css`:
  - Adicionados estilos para campo de animação de nuvem de palavras
    - `.skill-field`: campo com altura fixa (340px), overflow hidden, bordas e background
    - `.skill-field__topbar`: flex layout com z-index para ficar acima das bolhas
    - `.motion-btn`: botão de pausa/retomar com estilo consistente
    - `.bubble`: posição absoluta, estilo de chip, `will-change: transform` para performance
    - `.sr-only`: screen reader only, lista acessível oculta visualmente
    - Media query `@media (prefers-reduced-motion: reduce)`: desabilita animação e mostra lista estática inline

- `scripts.js`:
  - Implementada animação de nuvem de palavras com controles de acessibilidade
    - Função IIFE para animação isolada
    - Verificação de `prefers-reduced-motion` com retorno early se ativado
    - Inicialização de estado por bolha (posição x/y, velocidade vx/vy, dimensões)
    - Função `measure()` para calcular bounds do campo (considerando padding e topbar)
    - Função `tick()` com `requestAnimationFrame` para animação contínua
    - Lógica de bounce nas bordas (inverter velocidade ao colidir)
    - Event listeners para pausar em hover/focus (melhora legibilidade)
    - Botão de pausa/retomar com atualização de `aria-pressed` e texto traduzido
    - Listener de resize para recalcular bounds dinamicamente
    - Adicionadas traduções PT/EN/ES para "skills.fieldTitle", "skills.pauseMotion" e "skills.resumeMotion"
    - MutationObserver para atualizar texto do botão quando idioma mudar

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Acessibilidade WCAG 2.2.2**: Conteúdo em movimento pode ser pausado via botão ou hover/focus
- **Performance**: Uso de `will-change: transform`, `translate3d()` e `requestAnimationFrame` para aceleração GPU e animação suave
- **Validação de entrada**: Não aplicável (apenas animação visual decorativa)

### Melhorias de UX/Acessibilidade

- **Animação decorativa controlada**: Movimento lento e previsível (velocidade 0.18-0.45), não interfere na leitura
- **Controles de pausa obrigatórios**: Botão de pausa/retomar sempre visível, pausa automática em hover/focus
- **Suporte a `prefers-reduced-motion`**: Desabilita animação automaticamente e mostra lista estática inline
- **Lista acessível sempre presente**: Lista `sr-only` com todas as skills para leitores de tela e ATS
- **Navegação por teclado**: Bolhas com `tabindex="0"` para navegação por teclado
- **Traduções completas**: Botão de pausa/retomar traduzido em PT/EN/ES

### Melhorias Técnicas

- **Performance otimizada**: Uso de `translate3d()` para aceleração GPU, `will-change` para otimização de renderização
- **Responsivo**: Bounds recalculados automaticamente em resize
- **Isolamento**: Animação em IIFE para não poluir escopo global

## [1.1.6] - 12-01-2026 20:45:02

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - Corrigida tradução incompleta em inglês do "Hero.subtitle"
    - Adicionado texto completo em inglês com toda a descrição profissional
    - Tradução agora inclui: trajetória profissional, competências, histórico em empresas, ferramentas, certificações e objetivos
  - Corrigido tratamento de quebras de linha no sistema de i18n
    - Função `setLang()` agora converte `\n` em `<br>` para elementos que suportam HTML (P, SPAN, DIV, LI, etc)
    - Quebras de linha duplas (`\n\n`) são convertidas em `<br><br>` para melhor espaçamento
    - Quebras de linha simples (`\n`) são convertidas em `<br>`
    - Elementos que não suportam HTML continuam usando `textContent` (preserva segurança)

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Sanitização**: Conversão de `\n` para `<br>` é segura pois não permite injeção de HTML malicioso (apenas substituição de caracteres de controle)

### Melhorias de UX

- **Traduções completas**: Todas as três línguas (PT/EN/ES) agora têm o texto completo traduzido
- **Quebras de linha preservadas**: Texto formatado corretamente com parágrafos visíveis
- **Consistência visual**: Formatação consistente entre todas as traduções

## [1.1.5] - 12-01-2026 20:41:15

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Corrigido texto incompleto do "Hero.subtitle"
    - Consolidação de 3 parágrafos separados em um único parágrafo com `data-i18n="hero.subtitle"`
    - Texto completo agora inclui toda a descrição profissional (trajetória, competências, ferramentas, certificações e objetivos)

- `scripts.js`:
  - Atualizado texto completo do "Hero.subtitle" nas três traduções (PT, EN, ES)
    - Português: texto completo com toda a descrição profissional
    - Inglês: tradução completa do texto expandido
    - Espanhol: tradução completa do texto expandido
    - Texto agora inclui: trajetória profissional, competências desenvolvidas, histórico em empresas, ferramentas dominadas, certificações e objetivos atuais

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações

### Melhorias de UX

- **Conteúdo completo**: Usuários agora veem a descrição profissional completa no slide Hero
- **Consistência**: Texto unificado em um único parágrafo com suporte completo a i18n
- **Traduções completas**: Todas as três línguas (PT/EN/ES) agora têm o texto completo traduzido

## [1.1.4] - 12-01-2026 20:28:38

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `style.css`:
  - Corrigido problema persistente de acesso ao último slide de "Contato"
    - Alterado `scroll-snap-stop: always` para `scroll-snap-stop: normal` no slide de projetos
    - Removida altura fixa do slide de projetos (`height: auto` e `min-height: auto`)
    - Permite que o slide de projetos tenha altura dinâmica baseada no conteúdo do carrossel
    - Scroll principal do deck agora pode passar pelo slide de projetos sem forçar parada
    - Último slide de "Contato" agora é totalmente acessível via scroll

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações

### Melhorias de UX

- **Scroll restaurado definitivamente**: Último slide de "Contato" agora é totalmente acessível
- **Altura dinâmica**: Slide de projetos se adapta ao conteúdo do carrossel sem bloquear scroll
- **Navegação fluida**: Scroll pode passar pelo slide de projetos sem forçar parada obrigatória

## [1.1.3] - 12-01-2026 20:26:02

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `style.css`:
  - Corrigido problema de scroll impedindo acesso ao último slide de "Contato"
    - Adicionado `overflow: visible` ao `section.slide` para permitir scroll adequado
    - Adicionado `overflow: visible` ao `.frame` para não bloquear conteúdo
    - Removidas limitações de `max-height` do carrossel que estavam impedindo scroll
    - Ajustado `align-items: flex-start` nos slides do carrossel para melhor alinhamento
    - Botões do carrossel com `pointer-events: auto` para garantir interatividade
    - Scroll principal do deck agora funciona corretamente até o último slide

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações

### Melhorias de UX

- **Scroll restaurado**: Último slide de "Contato" agora é acessível via scroll
- **Layout preservado**: Carrossel mantém funcionalidade e visual, sem interferir no scroll principal

## [1.1.2] - 12-01-2026 20:23:40

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - Corrigida lógica do carrossel para exibir até 2 projetos por vez
    - Removida abordagem de opacity/transform que impedia visualização de todos os slides
    - Implementada navegação por transform no track (carrossel tradicional)
    - Lógica adaptativa: 2 slides em desktop (≥940px), 1 slide em mobile (<940px)
    - Função `getSlidesPerView()` para detectar quantidade de slides visíveis
    - Função `getMaxIndex()` para limitar navegação ao máximo permitido
    - Loop infinito mantido (volta ao início após o último e vice-versa)
    - Ajuste automático ao redimensionar janela (debounce de 150ms)
    - Todos os 4 projetos agora são acessíveis via navegação

- `style.css`:
  - Simplificado CSS do carrossel removendo opacity/transform desnecessários
    - Slides sempre visíveis, navegação feita via transform no track
    - Mantido `min-width: calc(50% - 6px)` para desktop (2 por vez)
    - Mantido `min-width: 100%` para mobile (1 por vez)
    - Gap de 12px entre slides preservado

- `index.html`:
  - Removida classe `active` do primeiro slide (não mais necessária)

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Acessibilidade**: Navegação por teclado e indicadores mantidos

### Melhorias de UX

- **2 projetos visíveis**: Desktop mostra 2 projetos lado a lado, melhor aproveitamento do espaço
- **Todos os projetos acessíveis**: Problema de apenas o primeiro projeto estar disponível foi corrigido
- **Navegação suave**: Transições CSS mantidas para movimento fluido
- **Responsivo**: Adapta-se automaticamente entre 1 e 2 slides conforme tamanho da tela
- **Loop infinito**: Navegação contínua em ambas as direções

## [1.1.1] - 12-01-2026 20:21:00

### Adicionado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Implementado carrossel de projetos preservando estrutura original
    - Mantido `div.frame` de projetos
    - Cards mantêm tamanho original (max-width: 400px, centralizados)
    - Estrutura de carrossel com 4 slides (Deveriar, UltraHub CRM, Quiz Tech, Landing corporativa-tech)
    - Botões de navegação anterior/próximo (‹ ›)
    - Indicadores (dots) para navegação direta entre projetos

- `style.css`:
  - Adicionados estilos para carrossel preservando tamanho dos cards
    - Container e wrapper do carrossel com overflow hidden
    - Cards mantêm max-width de 400px e são centralizados
    - Transições suaves entre slides (opacity e transform)
    - Botões de navegação estilizados com hover e backdrop-filter
    - Indicadores interativos com estado ativo
    - Responsivo para mobile (botões menores em telas pequenas)

- `scripts.js`:
  - Implementada lógica do carrossel de projetos
    - Função `updateCarousel()` para atualizar slide ativo e indicadores
    - Navegação por botões anterior/próximo
    - Navegação por indicadores (clique direto)
    - Navegação por teclado (setas esquerda/direita) quando slide de projetos está visível
    - Loop infinito (volta ao primeiro após o último e vice-versa)
    - Verificação de existência de elementos antes de adicionar listeners

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Acessibilidade**: Carrossel inclui aria-labels nos botões e indicadores para leitores de tela
- **Navegação por teclado**: Suporte completo a navegação por teclado (setas) quando carrossel está visível

### Melhorias de UX

- **Carrossel com tamanhos preservados**: Cards mantêm tamanho original, garantindo consistência visual
- **Frame preservado**: Estrutura do frame mantida, preservando layout geral
- **Múltiplas formas de navegação**: Botões, indicadores e teclado (setas) para navegar entre projetos
- **Transições suaves**: Animações CSS para transições entre slides
- **Visual limpo**: Um projeto por vez elimina sobrecarga visual e melhora legibilidade
- **Responsivo**: Carrossel adapta-se a diferentes tamanhos de tela

## [1.0.11] - 12-01-2026 20:17:19

### Revertido

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Removido carrossel de projetos e restaurada estrutura original de cards em grid
  - Projetos voltam a ser exibidos em grid de 3 colunas (1 coluna em mobile)

- `style.css`:
  - Removidos todos os estilos do carrossel (container, wrapper, track, slides, botões, indicadores)
  - Restaurado CSS original dos slides (sem max-height, overflow, align-items: center)

- `scripts.js`:
  - Removida toda a lógica do carrossel (updateCarousel, nextSlide, prevSlide, navegação por teclado)
  - Removidos event listeners do carrossel

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante a reversão
- **Funcionalidade mantida**: Modais de detalhes e outras funcionalidades permanecem intactas

### Motivo da Reversão

- **Problema de layout**: Carrossel estava impedindo scroll para o último slide devido ao tamanho excessivo
- **Preferência do usuário**: Retorno à estrutura original de grid de cards

## [1.1.0] - 12-01-2026 20:13:27

### Adicionado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Implementado carrossel de projetos no slide "Projetos"
    - Estrutura de carrossel com 4 slides (Deveriar, UltraHub CRM, Quiz Tech, Landing corporativa-tech)
    - Botões de navegação anterior/próximo (‹ ›)
    - Indicadores (dots) para navegação direta entre projetos
    - Cada projeto em um slide individual do carrossel

- `style.css`:
  - Adicionados estilos para carrossel de projetos
    - Container e wrapper do carrossel com overflow hidden
    - Transições suaves entre slides (opacity e transform)
    - Botões de navegação estilizados com hover e backdrop-filter
    - Indicadores interativos com estado ativo
    - Responsivo para mobile (botões menores em telas pequenas)
  - Removido overflow do slide e frame (não necessário com carrossel)
  - Restaurado `align-items: center` no slide para melhor centralização

- `scripts.js`:
  - Implementada lógica do carrossel de projetos
    - Função `updateCarousel()` para atualizar slide ativo e indicadores
    - Navegação por botões anterior/próximo
    - Navegação por indicadores (clique direto)
    - Navegação por teclado (setas esquerda/direita) quando slide de projetos está visível
    - Loop infinito (volta ao primeiro após o último e vice-versa)

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Acessibilidade**: Carrossel inclui aria-labels nos botões e indicadores para leitores de tela
- **Navegação por teclado**: Suporte completo a navegação por teclado (setas) quando carrossel está visível

### Melhorias de UX

- **Carrossel interativo**: Projetos agora são exibidos em carrossel, um por vez, melhorando foco e visualização
- **Múltiplas formas de navegação**: Botões, indicadores e teclado (setas) para navegar entre projetos
- **Transições suaves**: Animações CSS para transições entre slides
- **Visual limpo**: Um projeto por vez elimina sobrecarga visual e melhora legibilidade
- **Responsivo**: Carrossel adapta-se a diferentes tamanhos de tela

### Melhorias Técnicas

- **Performance**: Carrossel usa CSS transforms para animações suaves e performáticas
- **Loop infinito**: Navegação circular permite navegação contínua
- **Estado gerenciado**: JavaScript gerencia estado do carrossel de forma centralizada

## [1.0.10] - 12-01-2026 20:06:28

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `style.css`:
  - **P0**: Corrigido problema do slide "Projetos" invadindo outros slides
    - Adicionado `max-height: calc(100svh - var(--topbar-h))` ao `section.slide` para limitar altura máxima
    - Alterado `align-items: center` para `align-items: flex-start` para conteúdo começar do topo
    - Adicionado `overflow-y: auto` e `overflow-x: hidden` ao `section.slide` para permitir scroll interno quando necessário
    - Adicionado `max-height: 100%` e `overflow-y: auto` ao `.frame` para scroll interno no conteúdo
    - Alterado `scroll-snap-type` de `mandatory` para `proximity` no `.deck` para melhor comportamento com slides longos

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante a correção
- **Acessibilidade mantida**: Scroll interno mantém navegação por teclado e leitores de tela funcionais

### Melhorias de UX

- **Slides contidos**: Slides com muito conteúdo agora têm scroll interno, não invadindo outros slides
- **Scroll suave**: Mudança para `proximity` torna a navegação mais natural em slides longos
- **Melhor organização**: Conteúdo começa do topo, facilitando leitura e navegação

## [1.0.9] - 12-01-2026 20:05:08

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Compactado card de contato no último slide para melhor visualização
    - Reduzido tamanho da imagem de perfil de 130px para 100px
    - Reduzido padding e margens entre elementos
    - Adicionada classe `contact-card` para estilização específica
    - Ajustado posicionamento da imagem (right: 12px, top: 12px)

- `style.css`:
  - Adicionados estilos específicos para `.contact-card`
    - Padding reduzido (10px 12px)
    - Max-width de 500px com margin auto para centralização
    - Título com padding-right para não sobrepor a imagem
    - Margens entre rows reduzidas (6px em vez de 10px)
    - Imagem de perfil com tamanho fixo 100px e sombra reduzida
    - Fonte ligeiramente menor (13px para título, 12px para conteúdo)

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Acessibilidade mantida**: Todos os elementos mantêm seus atributos ARIA e links funcionais

### Melhorias de UX

- **Card mais compacto**: Card de contato agora ocupa menos espaço vertical, melhorando visualização geral do slide
- **Melhor proporção**: Imagem de perfil menor mantém proporção adequada sem dominar o card
- **Centralização**: Card centralizado com max-width para melhor apresentação em diferentes tamanhos de tela

## [1.0.8] - 12-01-2026 20:01:12

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Reorganizado layout do slide Hero (primeiro slide)
    - Adicionado badge do LinkedIn retangular na parte superior do slide
    - Removido `div.actions` do slide Hero (botões de ação movidos para slide Contato)
    - `div.chips` agora ocupa o espaço anteriormente usado por `div.actions`
  - Atualizado slide Contato (último slide)
    - Adicionados botões do Hero ao `div.actions` existente (LinkedIn, GitHub, CV, Profile, Deveriar, UltraHub)
    - Mantidos botões originais do Contato (LinkedIn, E-mail, CV, Profile)
  - Adicionado script do LinkedIn Badge no `<head>` para carregar o badge dinamicamente

- `style.css`:
  - Ajustado CSS do `.linkedin-badge-wrap` para posicionamento na parte superior
    - Alterado `margin-top` para `margin-bottom` para espaçamento adequado
    - Adicionado `width:100%` para ocupar toda a largura disponível

### Notas de Segurança

- **Script externo do LinkedIn**: Adicionado script oficial do LinkedIn com `async defer` para não bloquear renderização
- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as alterações
- **Links seguros**: Todos os links mantêm `rel="noopener noreferrer"` para segurança

### Melhorias de UX

- **Badge LinkedIn visível**: Badge do LinkedIn agora aparece no topo do primeiro slide, aumentando visibilidade do perfil
- **Organização de ações**: Botões de ação centralizados no slide Contato, facilitando acesso a todas as ações em um único local
- **Melhor uso do espaço**: Chips de tecnologias agora ocupam melhor o espaço disponível no slide Hero

## [1.0.7] - 12-01-2026 19:54:40

### Modificado

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - Preenchido modal Quiz Tech com dados completos do projeto
    - Adicionados 3 bullets: Problema → Solução → Prova/Impacto
      - Fragmentação de estudo para certificações → PWA de quiz com múltiplos exames e timer
      - Quizzes "caseiros" ruins de usar → UI responsiva, acessibilidade WCAG AA e testes automatizados
      - Sem histórico e evidência → histórico local, estatísticas por tópico e exportação PDF
    - Adicionadas métricas: eficiência (setup < 1 min), performance (latência ~0–50 ms), custo (~US$ 0/mês)
    - Adicionada descrição de arquitetura: 100% front-end, PWA, IndexedDB/localStorage, GitHub Pages, testes E2E/a11y
    - Traduções completas adicionadas para inglês (EN) e espanhol (ES)

- `index.html`:
  - Atualizado modal Quiz Tech com estrutura completa (bullets em lista, KPIs em grid, arquitetura detalhada)
  - Seguindo o mesmo padrão visual dos modais Deveriar e UltraHub CRM

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível (tokens, chaves, senhas) foi exposta
- **Dados públicos**: Informações adicionadas são métricas e arquitetura de alto nível, adequadas para portfólio público
- **Privacidade por design**: Projeto declara ausência de telemetria centralizada, dados locais no navegador

## [1.0.6] - 12-01-2026 19:50:50

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - **P0**: Corrigida abertura de modais de detalhes dos projetos
    - Refatorada inicialização dos event listeners para garantir execução após DOM estar pronto
    - Adicionada função `initModals()` que encapsula a configuração dos modais
    - Adicionada verificação de `document.readyState` para garantir execução correta
    - Adicionados `preventDefault()` e `stopPropagation()` nos handlers de clique para evitar conflitos
    - Event listeners agora são anexados de forma mais robusta, garantindo que os botões "Detalhes" funcionem corretamente

### Notas de Segurança

- **Correção de funcionalidade crítica**: Problema que impedia abertura dos modais de detalhes dos projetos foi corrigido
- **Melhoria de robustez**: Verificação de estado do DOM garante que event listeners sejam anexados corretamente
- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante a correção

## [1.0.5] - 12-01-2026 14:36:58

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Removido card TODO da seção de projetos (informações sobre como tornar projetos "contratáveis")

## [1.0.4] - 12-01-2026 14:34:41

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Preenchido modal UltraHub CRM com dados completos do projeto
    - Adicionados 3 bullets: Problema → Solução → Prova/Impacto
    - Adicionadas métricas: eficiência (-35% tempo follow-ups), produtividade (-45% tempo propostas), performance (latência <250ms, +30% conversão)
    - Adicionada descrição de arquitetura: MongoDB, Node.js API, JWT, React, deploy VPS/containers, observabilidade

### Notas de Segurança

- **Sem exposição de segredos**: Nenhuma informação sensível (tokens, chaves, senhas) foi exposta
- **Dados públicos**: Informações adicionadas são métricas e arquitetura de alto nível, adequadas para portfólio público

## [1.0.3] - 12-01-2026 14:30:30

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - **P0-1**: Corrigidas aspas não escapadas usando aspas simples externas (hero.navTip, proj.p4cap, proj.todoT em PT/EN/ES)
  - **P0-2**: Verificadas traduções EN/ES - todas as chaves estão completas e paritárias com PT
  - **P1-3**: Implementado focus trap completo nos modais (Tab/Shift+Tab circulando apenas dentro do modal)
  - **P1-3**: Adicionado marcador `inert` e `aria-hidden` no background quando modal está aberto
  - **P1-4**: Adicionado `aria-label` descritivo aos botões dots de navegação
  - **P1-5**: Desabilitada interceptação de PageDown/Up e setas quando modal está aberto ou foco está em elementos de entrada
  - **P3-10**: Criada função `getTopbarHeight()` que lê variável CSS `--topbar-h` via `getComputedStyle`
  - **P3-11**: Refatorado `currentIndex()` para usar `deck.scrollTop` vs `offsetTop` em vez de `getBoundingClientRect()` para maior precisão

- `index.html`:
  - **P1-3**: Adicionado `aria-labelledby` e `id` nos títulos de todos os modais (ultrahub, quiz, landing)
  - **P1-8**: Transformado telefone em link clicável `tel:+5531973526254`
  - **P1-8**: Transformado e-mail em link clicável `mailto:` (já existia, verificado)
  - **P2-9**: Adicionado `defer` aos scripts ScrollReveal e VanillaTilt
  - **P2-9**: Adicionado `integrity` (SRI SHA-384) aos scripts externos ScrollReveal e VanillaTilt

- `style.css`:
  - **P1-4**: Aumentado tamanho dos dots de 10px para 18px (WCAG compliance - mínimo 24px de área clicável considerando padding)
  - **P1-6**: Refatorada topbar para usar `justify-content: space-between` sem `position: absolute`
  - **P1-6**: Adicionado breakpoint responsivo @media (max-width: 768px) para topbar
  - **P1-7**: Trocado `scroll-snap-type` de `mandatory` para `proximity` (mais suave)
  - **P1-7**: Adicionado suporte a `prefers-reduced-motion` desabilitando scroll-snap em alturas pequenas
  - **P3-10**: Criada variável CSS `--topbar-h: 64px` em `:root`
  - **P3-10**: Substituído valor hardcoded `64px` por `var(--topbar-h)` em `.deck` e `section.slide`

### Notas de Segurança

- **SRI (Subresource Integrity)**: Adicionados hashes SHA-384 aos scripts externos para prevenir supply chain attacks
- **Acessibilidade**: Melhorias de ARIA (aria-labelledby, aria-label, aria-hidden, inert) e focus trap reduzem riscos de exclusão de usuários
- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as correções
- **Validação recomendada**: Testar em múltiplos navegadores e com leitores de tela (NVDA, JAWS, VoiceOver)

### Melhorias de UX/Acessibilidade

- **Focus trap em modais**: Navegação por teclado (Tab/Shift+Tab) agora fica presa dentro do modal aberto
- **Background inert**: Elementos fora do modal são marcados como `inert` quando modal está aberto, melhorando experiência com leitores de tela
- **Dots acessíveis**: Área clicável aumentada e rotulagem ARIA completa
- **Navegação por teclado inteligente**: Não intercepta teclas quando modal está aberto ou foco está em inputs
- **Scroll snap suave**: Mudança de `mandatory` para `proximity` melhora leitura em slides longos
- **Links clicáveis**: Telefone e e-mail agora são links funcionais (tel: e mailto:)

### Melhorias de Performance/Robustez

- **Scripts com defer**: ScrollReveal e VanillaTilt agora carregam com `defer`, não bloqueando renderização
- **Variável CSS centralizada**: Altura da topbar agora é definida em um único lugar (CSS), lida dinamicamente no JS
- **Cálculo de slide mais preciso**: `currentIndex()` refatorado para usar `scrollTop` vs `offsetTop`, mais confiável que `getBoundingClientRect()`

## [1.0.2] - 12-01-2026 14:25:37

### Corrigido

#### ARQUIVOS ATUALIZADOS
- `scripts.js`:
  - Corrigidas aspas não escapadas nas linhas 23, 116 e 119 que quebravam o parse do JavaScript
    - `hero.navTip`: escapadas aspas duplas internas na string
    - `proj.p4cap`: escapadas aspas duplas internas na string
    - `proj.todoT`: escapadas aspas duplas internas na string
  - Completadas traduções EN e ES com todas as chaves do dicionário PT (anteriormente apenas 2 chaves por idioma)
    - Adicionadas 120+ chaves de tradução para inglês (EN)
    - Adicionadas 120+ chaves de tradução para espanhol (ES)
    - Traduções cobrem todas as seções: top, hero, impact, exp, skills, cert, proj, contact

### Notas de Segurança

- **Correção de sintaxe crítica**: Erros de parse que impediam execução do JavaScript foram corrigidos, restaurando funcionalidades dependentes (idioma, dots, navegação por teclado, modais)
- **Melhoria de UX**: Traduções completas eliminam sensação de "botão placebo" nos seletores de idioma
- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante as correções

## [1.0.1] - 12-01-2026 13:19:35

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Removida tag `<style>` com CSS inline (extraído para `style.css`)
  - Removida tag `<script>` com JavaScript inline (extraído para `scripts.js`)
  - Adicionada referência externa `<link rel="stylesheet" href="style.css">` no `<head>`
  - Adicionada referência externa `<script src="scripts.js"></script>` antes do `</body>`
  - Mantidos scripts externos (CDN) no `<head>`: ScrollReveal.js, Vanilla-tilt.js e LinkedIn badge

#### ARQUIVOS CRIADOS
- `style.css` - Arquivo CSS externo contendo todos os estilos anteriormente inline no `index.html`
- `scripts.js` - Arquivo JavaScript externo contendo toda a lógica anteriormente inline no `index.html`

### Notas de Segurança

- **Refatoração sem mudanças funcionais**: A separação em arquivos externos não altera o comportamento da aplicação, apenas melhora a organização e manutenibilidade do código
- **Caminhos relativos**: Uso de caminhos relativos simples (`style.css`, `scripts.js`) para compatibilidade
- **Sem exposição de segredos**: Nenhuma informação sensível foi exposta durante a refatoração

## [1.0.0] - 2026-01-06 14:45:00

### Adicionado

#### ARQUIVOS CRIADOS
- `README.md` - Documentação completa do projeto
- `CHANGELOG.md` - Este arquivo de histórico de mudanças
- `assets/` - Estrutura de pastas para assets
- `assets/cv.pdf` - Link para download do currículo
- `assets/Profile.pdf` - Link para download do perfil LinkedIn
- `assets/projects/` - Pasta para screenshots dos projetos

#### FUNCIONALIDADES
- **Animações ScrollReveal**: Integração do ScrollReveal.js para animações suaves ao scroll
- **Efeito Tilt nos Projetos**: Integração do Vanilla-tilt.js para efeito parallax nos cards de projetos
- **Foto de Perfil no Hero**: Placeholder SVG para foto de perfil com estilo circular e borda accent
- **Screenshots dos Projetos**: Placeholders SVG para screenshots dos projetos com layout melhorado
- **Badges de Tecnologias**: Chips visuais para tecnologias usadas em cada projeto
- **SEO Aprimorado**: 
  - Meta tags Open Graph completas
  - Twitter Cards
  - Schema.org structured data (Person)
  - Meta tags de keywords e author
  - Suporte a múltiplos locales (pt_BR, en_US, es_ES)

#### MELHORIAS DE DESIGN
- Classes CSS para animações reveal (`.reveal`, `.reveal.active`)
- Estilos para foto de perfil (`.profile-img`)
- Estilos para imagens de projetos (`.project-img`)
- Efeito hover melhorado nos cards de projetos (`.project-card:hover`)
- Transições suaves para elementos interativos

#### SEGURANÇA
- Scripts de terceiros carregados com SRI (Subresource Integrity)
- Links externos com `rel="noreferrer noopener"`
- Sem secrets ou informações sensíveis expostas no código

### Modificado

#### ARQUIVOS ATUALIZADOS
- `index.html`:
  - Adicionados scripts ScrollReveal.js e Vanilla-tilt.js no `<head>`
  - Adicionada foto de perfil placeholder no Hero
  - Melhorados cards de projetos com imagens, tilt effect e badges
  - Expandidas meta tags para SEO
  - Adicionado Schema.org structured data
  - Inicialização dos scripts de animação no JavaScript
  - Adicionados estilos CSS para novos componentes

### Notas de Segurança

- **CDN com SRI**: Todos os scripts externos são carregados com Subresource Integrity para garantir integridade
- **Links Seguros**: Todos os links externos usam `rel="noreferrer noopener"` para prevenir ataques de tabnabbing
- **Sem Secrets**: Nenhuma informação sensível (tokens, chaves, senhas) está exposta no código
- **HTTPS**: O site deve ser servido exclusivamente via HTTPS em produção

### Próximos Passos (TODOs)

- [ ] Substituir placeholder da foto de perfil por imagem real (`assets/profile.jpg`)
- [ ] Substituir placeholders dos screenshots dos projetos por imagens reais
- [ ] Adicionar código oficial do LinkedIn Badge nas seções Hero e Contato
- [ ] Preencher descrições detalhadas dos projetos (problema, solução, impacto)
- [ ] Adicionar métricas de impacto nos projetos (se disponíveis)
- [ ] Otimizar imagens para web (compressão, formatos modernos)
- [ ] Adicionar favicon personalizado
- [ ] Implementar lazy loading para imagens (quando necessário)

---

## Formato de Versão

Este projeto usa [Semantic Versioning](https://semver.org/lang/pt-BR/):
- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Funcionalidades adicionadas de forma compatível
- **PATCH**: Correções de bugs compatíveis

## Formato de Data

As datas seguem o formato: `YYYY-MM-DD HH:MM:SS` (ISO 8601 com hora)

---

**Versão Atual**: 1.1.6  
**Data de Lançamento**: 12-01-2026 20:45:02
