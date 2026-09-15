/**
 * SISGRA - Software House
 * Agregador e Router Modular de Sessões (Vanilla JS)
 * Carrega cada seção a partir do seu respectivo arquivo em html/*.html
 */

// Armazenamento de contingência para execução direta via file:/// (quando CORS do navegador bloqueia fetch local)
const ROUTE_FALLBACKS = {
  "home": "<!-- ==========================================================================\n     SISGRA - SE\u00c7\u00c3O HOME / HERO\n     Arquivo: html/home.html\n     Estilos: css/home.css (espec\u00edfico) e css/global.css (base)\n     ========================================================================== -->\n<link rel=\"stylesheet\" href=\"css/home.css\">\n\n<section id=\"home\" class=\"hero-section\">\n  <div class=\"container\">\n    <div class=\"hero-grid\">\n      <!-- Conte\u00fado Textual / Call to Action -->\n      <div class=\"hero-content\">\n        <div class=\"hero-badge\">\n          <span class=\"badge-dot\"></span>\n          <span>Tecnologia & Gest\u00e3o Av\u00edcola h\u00e1 mais de 30 anos</span>\n        </div>\n\n        <h1 class=\"hero-title\">\n          Descomplicando a <span class=\"gradient-text\">gest\u00e3o e tecnologia</span> da sua empresa.\n        </h1>\n\n        <p class=\"hero-description\">\n          Software house pioneira no desenvolvimento de sistemas robustos, \u00e1geis e inteligentes para o setor av\u00edcola e agroneg\u00f3cio. Da produ\u00e7\u00e3o ao controle financeiro e fiscal.\n        </p>\n\n        <div class=\"hero-actions\">\n          <a href=\"#quem-somos\" class=\"btn btn-primary\">\n            <span>Conhecer a Sisgra</span>\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg>\n          </a>\n          <a href=\"#contato\" class=\"btn btn-secondary\">\n            <span>Falar com Especialista</span>\n          </a>\n        </div>\n\n        <!-- Indicadores / M\u00e9tricas -->\n        <div class=\"hero-stats\">\n          <div class=\"stat-item\">\n            <span class=\"stat-number\">30+</span>\n            <span class=\"stat-label\">Anos de experi\u00eancia</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-number\">100%</span>\n            <span class=\"stat-label\">Foco no setor av\u00edcola</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-number\">Cont\u00ednuas</span>\n            <span class=\"stat-label\">Inova\u00e7\u00f5es e updates</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Card Tecnol\u00f3gico Visual -->\n      <div class=\"hero-visual\">\n        <div class=\"hero-main-card\">\n          <div class=\"card-header-bar\">\n            <div class=\"window-dots\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n            <span class=\"card-status-tag\">\u25cf Sistema Operacional Ativo</span>\n          </div>\n\n          <div class=\"card-content-preview\">\n            <img src=\"assets/images/01sombra.jpg\" alt=\"Sisgra - Gest\u00e3o Av\u00edcola Inteligente\" loading=\"lazy\">\n          </div>\n\n          <!-- Badge Flutuante -->\n          <div class=\"card-floating-badge\">\n            <div class=\"floating-icon\">\n              <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg>\n            </div>\n            <div class=\"floating-text\">\n              <strong>Estabilidade & Seguran\u00e7a</strong>\n              <span>Controle total da sua granja</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n",
  "quem-somos": "<!-- ==========================================================================\n     SISGRA - SE\u00c7\u00c3O QUEM SOMOS & HIST\u00d3RIA\n     Arquivo: html/quem-somos.html\n     Estilos: css/quem-somos.css (espec\u00edfico) e css/global.css (base)\n     ========================================================================== -->\n<link rel=\"stylesheet\" href=\"css/quem-somos.css\">\n\n<section id=\"quem-somos\" class=\"section section-alt\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <span class=\"section-tag\">Nossa Trajet\u00f3ria</span>\n      <h2 class=\"section-title\">Tr\u00eas d\u00e9cadas transformando a gest\u00e3o av\u00edcola com tecnologia</h2>\n      <p class=\"section-subtitle\">\n        Uma software house nascida da necessidade real do produtor, focada em estabilidade, precis\u00e3o e evolu\u00e7\u00e3o constante.\n      </p>\n    </div>\n\n    <!-- Grid com Foto e Texto Hist\u00f3rico -->\n    <div class=\"about-grid\">\n      <div class=\"about-image-wrapper\">\n        <div class=\"about-image-card\">\n          <img src=\"assets/images/Sisgrafestadoovobastos2020-768x1024.jpeg\" alt=\"Sisgra na Festa do Ovo de Bastos\" loading=\"lazy\">\n          <div class=\"about-image-caption\">\n            <strong>Festa do Ovo de Bastos</strong> \u2022 Tradi\u00e7\u00e3o, presen\u00e7a constante e compromisso junto aos produtores.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"about-text-content\">\n        <h3>Evolu\u00e7\u00e3o cont\u00ednua guiada por quem entende do campo</h3>\n        <p>\n          Nossa hist\u00f3ria come\u00e7ou com o compromisso de levar tecnologia, estabilidade e controle para a gest\u00e3o de granjas. Em 1992, com o intuito de informatizar a \u00e1rea cont\u00e1bil, a Granja Tsuru trouxe Luiz Ricardo Ruiz Estevam como contador, que rapidamente percebeu a necessidade de um sistema espec\u00edfico para produ\u00e7\u00e3o.\n        </p>\n        <p>\n          Assim nasceu a Sisgra: constru\u00edda ouvindo o dia a dia das opera\u00e7\u00f5es e transformando rotinas manuais em solu\u00e7\u00f5es digitais confi\u00e1veis. Hoje somos uma software house consolidada, com novas vers\u00f5es lan\u00e7adas continuamente para proporcionar m\u00e1xima agilidade.\n        </p>\n      </div>\n    </div>\n\n    <!-- Linha do Tempo Hist\u00f3rica -->\n    <h3 class=\"timeline-title\">A Evolu\u00e7\u00e3o dos Nossos Softwares</h3>\n\n    <div class=\"timeline-container\">\n      <!-- 1992 -->\n      <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">1992</span>\n          <h4>POVAV (MS-DOS)</h4>\n          <p>O ponto de partida: controle detalhado da produ\u00e7\u00e3o de ovos e relat\u00f3rios semanais de an\u00e1lise para informatizar granjas.</p>\n        </div>\n      </div>\n\n      <!-- 1993 -->\n      <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">1993</span>\n          <h4>GB-VENDAS</h4>\n          <p>Cria\u00e7\u00e3o da primeira solu\u00e7\u00e3o estruturada para gest\u00e3o comercial, controle de pedidos e finan\u00e7as do setor av\u00edcola.</p>\n        </div>\n      </div>\n\n      <!-- 2001/2002 -->\n      <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">2001 - 2002</span>\n          <h4>GB-CUSTO</h4>\n          <p>Aprofundamento no controle estrat\u00e9gico de custos: convers\u00f5es, custo de ra\u00e7\u00e3o e \u00edndices de produtividade por lote.</p>\n        </div>\n      </div>\n\n      <!-- 2009 -->\n      <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">2009</span>\n          <h4>Sistema SATURNO</h4>\n          <p>Sistema corporativo em rede, ampliando o controle financeiro de ponta a ponta, estoques de mat\u00e9ria-prima e gest\u00e3o de silos.</p>\n        </div>\n      </div>\n\n      <!-- 2021 -->\n      <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">2021 - 2024</span>\n          <h4>Reformula\u00e7\u00e3o & Expans\u00e3o</h4>\n          <p>Reformula\u00e7\u00e3o tecnol\u00f3gica completa: sistemas mais leves, integra\u00e7\u00e3o fiscal (NF-e), aplicativo m\u00f3vel de vendas e rotina de updates cont\u00ednuos.</p>\n        </div>\n      </div>\n\n      <!-- 2026: Novo ERP Web Sisgra -->\n      <div class=\"timeline-item highlight\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-card\">\n          <span class=\"timeline-year\">2026</span>\n          <span class=\"badge-new\">Lan\u00e7amento</span>\n          <h4>Novo ERP Web Sisgra</h4>\n          <p>O futuro da gest\u00e3o av\u00edcola: plataforma 100% em nuvem e moderna, acess\u00edvel de qualquer dispositivo, com alta performance, dados em tempo real e experi\u00eancia visual intuitiva para transformar a opera\u00e7\u00e3o da granja.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n",
  "parceiros": "<!-- ==========================================================================\n     SISGRA - SE\u00c7\u00c3O PARCEIROS & ECOSSISTEMA\n     Arquivo: html/parceiros.html\n     Estilos: css/parceiros.css (espec\u00edfico) e css/global.css (base)\n     ========================================================================== -->\n<link rel=\"stylesheet\" href=\"css/parceiros.css\">\n\n<section id=\"parceiros\" class=\"section\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <span class=\"section-tag\">Ecossistema</span>\n      <h2 class=\"section-title\">Parceiros & Clientes em Todo o Brasil</h2>\n      <p class=\"section-subtitle\">\n        Presen\u00e7a consolidada nos principais polos av\u00edcolas brasileiros, conectando produtores, cooperativas e especialistas.\n      </p>\n    </div>\n\n    <!-- Grid de Parceiros -->\n    <div class=\"partners-grid\">\n      <div class=\"partner-card\">\n        <div class=\"partner-icon\">\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n        </div>\n        <h4 class=\"partner-name\">Granjas e Produtores</h4>\n        <p class=\"partner-desc\">Centenas de granjas av\u00edcolas de postura e corte com gest\u00e3o di\u00e1ria e controle de lotes integrado.</p>\n      </div>\n\n      <div class=\"partner-card\">\n        <div class=\"partner-icon\">\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path></svg>\n        </div>\n        <h4 class=\"partner-name\">Cooperativas Regionais</h4>\n        <p class=\"partner-desc\">Parcerias estrat\u00e9gicas para padroniza\u00e7\u00e3o de dados, compras coletivas e relat\u00f3rios consolidados.</p>\n      </div>\n\n      <div class=\"partner-card\">\n        <div class=\"partner-icon\">\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path></svg>\n        </div>\n        <h4 class=\"partner-name\">Consultores Cont\u00e1beis & Fiscais</h4>\n        <p class=\"partner-desc\">Integra\u00e7\u00e3o fiscal completa para emiss\u00e3o de NF-e e apura\u00e7\u00e3o de cr\u00e9dito de ICMS do produtor rural.</p>\n      </div>\n\n      <div class=\"partner-card\">\n        <div class=\"partner-icon\">\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 14 14\"></polyline></svg>\n        </div>\n        <h4 class=\"partner-name\">Distribui\u00e7\u00e3o & Log\u00edstica</h4>\n        <p class=\"partner-desc\">Aplicativos m\u00f3veis de for\u00e7a de vendas com sincroniza\u00e7\u00e3o em tempo real e agilidade nas rotas.</p>\n      </div>\n    </div>\n\n    <!-- Banner de Parceria -->\n    <div class=\"partners-banner\">\n      <div class=\"partners-banner-content\">\n        <h4>Quer integrar sua empresa ou revenda ao ecossistema Sisgra?</h4>\n        <p>Desenvolvemos conex\u00f5es personalizadas para cooperativas, consultorias cont\u00e1beis e distribuidores de insumos.</p>\n      </div>\n      <a href=\"#contato\" class=\"btn btn-secondary\">Seja um Parceiro</a>\n    </div>\n  </div>\n</section>\n",
  "contato": "<!-- ==========================================================================\n     SISGRA - SE\u00c7\u00c3O CONTATO & REDES SOCIAIS\n     Arquivo: html/contato.html\n     Estilos: css/contato.css (espec\u00edfico) e css/global.css (base)\n     ========================================================================== -->\n<link rel=\"stylesheet\" href=\"css/contato.css\">\n\n<section id=\"contato\" class=\"section section-alt\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <span class=\"section-tag\">Canais Oficiais</span>\n      <h2 class=\"section-title\">Vamos conversar sobre a sua gest\u00e3o?</h2>\n      <p class=\"section-subtitle\">\n        Entre em contato agora, tire d\u00favidas ou solicite uma demonstra\u00e7\u00e3o personalizada dos nossos sistemas.\n      </p>\n    </div>\n\n    <div class=\"contact-grid\">\n      <!-- Informa\u00e7\u00f5es de Contato e Redes Sociais -->\n      <div class=\"contact-info\">\n        <!-- WhatsApp -->\n        <div class=\"contact-card\">\n          <div class=\"contact-card-icon whatsapp\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.182-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z\"/></svg>\n          </div>\n          <div class=\"contact-card-info\">\n            <h4>WhatsApp Comercial</h4>\n            <p>Atendimento r\u00e1pido e direto com nossos consultores</p>\n            <a href=\"https://wa.me/5514996851290\" target=\"_blank\" rel=\"noopener noreferrer\">(14) 99685-1290</a>\n          </div>\n        </div>\n\n        <!-- Telefone / Suporte -->\n        <div class=\"contact-card\">\n          <div class=\"contact-card-icon\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path></svg>\n          </div>\n          <div class=\"contact-card-info\">\n            <h4>Telefone Fixo</h4>\n            <p>Hor\u00e1rio comercial de segunda a sexta</p>\n            <a href=\"tel:1434781444\">(14) 3478-1444</a>\n          </div>\n        </div>\n\n        <!-- Redes Sociais Oficiais -->\n        <div>\n          <h4 class=\"social-links-title\">Acompanhe a Sisgra nas Redes</h4>\n          <div class=\"social-links\">\n            <a href=\"https://www.instagram.com/sisgra/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" title=\"Instagram\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line></svg>\n            </a>\n            <a href=\"https://www.facebook.com/SisgraAvicultura\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" title=\"Facebook\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z\"/></svg>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC3rzWiqxX7A8O26vVP5CwmQ\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" title=\"YouTube\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>\n            </a>\n            <a href=\"https://twitter.com/SisgraSistemas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" title=\"Twitter / X\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"/></svg>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Formul\u00e1rio de Mensagem Direta -->\n      <div class=\"contact-form-container\">\n        <h3>Envie uma Mensagem</h3>\n        <p>Preencha os campos abaixo e nosso time entrar\u00e1 em contato prontamente.</p>\n\n        <form id=\"contactForm\">\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"form-label\">Nome Completo</label>\n            <input type=\"text\" id=\"name\" class=\"form-input\" placeholder=\"Ex: Jo\u00e3o da Silva\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"form-label\">E-mail Profissional</label>\n            <input type=\"email\" id=\"email\" class=\"form-input\" placeholder=\"Ex: joao@suagranja.com.br\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"subject\" class=\"form-label\">Interesse Principal</label>\n            <select id=\"subject\" class=\"form-select\">\n              <option value=\"Demonstra\u00e7\u00e3o de Sistemas\">Demonstra\u00e7\u00e3o dos Sistemas</option>\n              <option value=\"D\u00favida Comercial\">D\u00favida Comercial / Or\u00e7amento</option>\n              <option value=\"Parceria de Neg\u00f3cios\">Parceria de Neg\u00f3cios</option>\n              <option value=\"Suporte T\u00e9cnico\">Suporte T\u00e9cnico</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"message\" class=\"form-label\">Mensagem</label>\n            <textarea id=\"message\" class=\"form-textarea\" placeholder=\"Conte-nos sobre a sua necessidade ou granja...\" required></textarea>\n          </div>\n\n          <button type=\"submit\" class=\"btn-submit\">\n            <span>Enviar pelo WhatsApp</span>\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon></svg>\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
};

/**
 * 1. Router / Agregador: Carrega dinamicamente cada seção no contêiner principal
 */
async function aggregateSections() {
  const routeElements = document.querySelectorAll('#router-app [data-route]');

  const loadPromises = Array.from(routeElements).map(async (container) => {
    const routeName = container.getAttribute('data-route');
    const srcFile = container.getAttribute('data-src');

    let htmlContent = '';

    // Tenta carregar via fetch do arquivo html/*.html
    try {
      const response = await fetch(srcFile);
      if (response.ok) {
        htmlContent = await response.text();
      } else {
        throw new Error();
      }
    } catch (err) {
      // Fallback automático quando executado em file:/// sem servidor HTTP
      console.warn();
      htmlContent = ROUTE_FALLBACKS[routeName] || '';
    }

    if (htmlContent) {
      container.outerHTML = htmlContent;
    }
  });

  await Promise.all(loadPromises);
}

/**
 * 2. Inicialização dos Componentes de Navegação e Interatividade
 */
function initInteractiveComponents() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const contactForm = document.getElementById('contactForm');

  // Sombra suave no header ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Menu Mobile Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar em link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ScrollSpy via IntersectionObserver
  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === ) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // Smooth Scroll preciso compensando altura do cabeçalho fixo
  document.querySelectorAll('a[href^=#]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        if (window.history && window.history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Suporte a âncora direta na URL (#quem-somos)
  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      setTimeout(() => {
        const headerOffset = 75;
        const offsetPosition = initialTarget.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }, 150);
    }
  }

  // Envio de formulário para WhatsApp Oficial (14) 99685-1290
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const subject = document.getElementById('subject')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      if (!name || !message) {
        alert('Por favor, preencha seu nome e a mensagem.');
        return;
      }

      const text = ;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = ;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      contactForm.reset();
    });
  }
}

// 3. Ponto de Entrada: Agrega as seções e inicializa a aplicação
document.addEventListener('DOMContentLoaded', async () => {
  await aggregateSections();
  initInteractiveComponents();
});
