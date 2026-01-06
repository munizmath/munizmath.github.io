# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

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

**Versão Atual**: 1.0.0  
**Data de Lançamento**: 2026-01-06 14:45:00
