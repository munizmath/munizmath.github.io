# Portfólio Currículo - Matheus Muniz

Portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript vanilla. Design moderno com dark theme, animações suaves e suporte a múltiplos idiomas (PT/EN/ES).

## 🚀 Características

- **Design Moderno**: Dark theme com gradientes sutis e animações suaves
- **Responsivo**: Totalmente adaptável a diferentes tamanhos de tela
- **Multi-idioma**: Suporte a Português, Inglês e Espanhol
- **Animações**: ScrollReveal para reveal animations e Vanilla-tilt para efeito parallax nos cards
- **Navegação por Slides**: Sistema de slides com scroll-snap e navegação por teclado
- **SEO Otimizado**: Meta tags Open Graph, Twitter Cards e Schema.org markup

## 📁 Estrutura de Arquivos

```
munizmath.io/
├── index.html              # Página principal
├── assets/
│   ├── docs/              # Documentos (PDFs)
│   │   ├── Curriculo-Matheus-Muniz.pdf
│   │   └── Profile.pdf
│   └── prints/            # Screenshots dos projetos
│       ├── deveriar.png
│       ├── ultrahub.png
│       ├── quiz-tech.png
│       └── landing-corporativa.png
├── README.md              # Este arquivo
└── CHANGELOG.md           # Histórico de mudanças
```

## 🛠️ Como Personalizar

### 1. Adicionar Foto de Perfil

Substitua o placeholder SVG na seção Hero por:

```html
<img src="assets/profile.jpg" alt="Matheus Muniz" class="profile-img reveal" id="profile-img" />
```

**Recomendação**: Imagem quadrada 400x400px, formato JPG ou PNG.

### 2. Adicionar Screenshots dos Projetos

Os screenshots devem ser colocados em `assets/prints/` e referenciados no HTML:

```html
<img class="shot" src="assets/prints/nome-projeto.png" alt="Descrição" loading="lazy" />
```

**Recomendação**: Imagens 1366x767px (ou proporção similar), formato PNG ou JPG.

### 3. Atualizar Documentos PDF

Os PDFs do currículo e perfil LinkedIn devem estar em `assets/docs/`:

- `assets/docs/Curriculo-Matheus-Muniz.pdf`
- `assets/docs/Profile.pdf`

### 4. Adicionar LinkedIn Badge

Na seção Hero e Contato, substitua o placeholder pelo código oficial do LinkedIn:

```html
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
<div class="LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="matheus-muniz-oliveira" data-version="v1"></div>
```

### 5. Atualizar Conteúdo

- **Experiências**: Edite a seção "Experiência" com suas experiências profissionais
- **Projetos**: Atualize os cards de projetos com descrições detalhadas
- **Competências**: Ajuste as tecnologias e habilidades
- **Formação**: Atualize a seção de formação e certificações

### 6. Traduções

As traduções estão no objeto `dict` no JavaScript. Adicione ou edite as chaves conforme necessário.

## 🎨 Customização de Cores

As cores principais estão definidas nas variáveis CSS:

```css
:root{
  --bg:#0b0f17;           /* Cor de fundo */
  --panel:#0f1626;        /* Cor dos painéis */
  --text:#e8eefc;         /* Cor do texto */
  --muted:#a9b7d0;        /* Texto secundário */
  --accent:#6aa9ff;       /* Cor de destaque principal */
  --accent2:#7dffca;      /* Cor de destaque secundária */
}
```

## 📦 Dependências Externas (CDN)

- **ScrollReveal.js**: Animações ao scroll
- **Vanilla-tilt.js**: Efeito parallax nos cards de projetos

Ambos são carregados via CDN com SRI (Subresource Integrity) para segurança.

## 🚀 Deploy

### GitHub Pages

Este repositório está configurado para GitHub Pages. O site está disponível em:
- **URL**: https://munizmath.github.io/

Para atualizar:
1. Faça commit das mudanças
2. Faça push para a branch `main`
3. O GitHub Pages atualiza automaticamente

### Netlify

1. Conecte seu repositório Git ao Netlify
2. Configure o build command: (deixe vazio, é um site estático)
3. Configure o publish directory: `/` (raiz)
4. Deploy automático a cada push

### Vercel

1. Conecte seu repositório Git ao Vercel
2. Configure como projeto estático
3. Deploy automático a cada push

## 🔒 Segurança

- Todos os links externos usam `rel="noreferrer noopener"`
- Scripts de terceiros carregados com SRI (Subresource Integrity)
- Sem secrets ou informações sensíveis no código
- HTTPS obrigatório em produção

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio.

## 👤 Autor

**Matheus Muniz**

- LinkedIn: [matheus-muniz-oliveira](https://www.linkedin.com/in/matheus-muniz-oliveira/)
- GitHub: [munizmath](https://github.com/munizmath)
- Email: matheusmuniz@outlook.com
- Site: [munizmath.github.io](https://munizmath.github.io/)

---

**Última atualização**: Janeiro 2026
