# SISGRA - Software House | Landing Page Moderna

Landing Page moderna, responsiva e ultraleve para a **Sisgra Software House**, desenvolvida com **HTML5 puro**, **CSS3 Vanilla** e **JavaScript nativo** (Zero dependências/plugins).

## Estrutura do Projeto

```
sisgra-landing-page/
├── index.html                  # Landing Page One-Page consolidada (Root)
├── html/
│   ├── index.html              # Landing Page One-Page (espelho na pasta html/)
│   ├── home.html               # Seção modular isolada: Home / Hero
│   ├── quem-somos.html         # Seção modular isolada: Quem Somos & Linha do Tempo
│   ├── parceiros.html          # Seção modular isolada: Parceiros & Ecossistema
│   └── contato.html            # Seção modular isolada: Contato & Redes Sociais
├── css/
│   └── style.css               # Design System moderno, responsivo para desktop e mobile
├── js/
│   └── main.js                 # ScrollSpy, Menu Mobile, Smooth Scroll e WhatsApp
└── assets/
    └── images/                 # Imagens essenciais ativas (logo, hero, foto histórica, favicons)
```

## Destaques

- **Código Limpo & Otimizado**: Todos os arquivos legados de plugins/Elementor foram removidos;
- **100% Responsivo para Telas Menores**: Adaptado para smartphones (320px, 375px, 480px) e tablets com menu mobile animado, formulário otimizado para iOS/Android e layout fluído;
- **Linha do Tempo Completa (1992 - 2026)**:
  - 1992: POVAV (MS-DOS)
  - 1993: GB-VENDAS
  - 2001 - 2002: GB-CUSTO
  - 2009: Sistema SATURNO
  - 2021 - 2024: Reformulação & Expansão
  - **2026**: **Novo ERP Web Sisgra** (Plataforma moderna 100% web e nuvem);
- **ScrollSpy Ativo**: O menu superior com efeito glassmorphism destaca automaticamente a seção ativa ao rolar a página;
- **Canais Integrados**: Formulário inteligente e botão flutuante integrados diretamente ao WhatsApp comercial `(14) 99685-1290`.

## Como Executar

Execute um servidor estático local a partir da raiz do projeto:

```bash
python3 -m http.server 8080
```
E acesse no navegador: `http://localhost:8080`
