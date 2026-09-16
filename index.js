let lenis = null;

// Inicialização do Lenis Smooth Scroll
function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efeito inercial aveludado estilo Apple/Awwwards
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  window.lenis = lenis;
}

document.addEventListener("DOMContentLoaded", function () {
  initLenis();
  initScrollEffects();
  initMobileMenu();
  initScrollAnimations();
  initCounters();
  initSmoothScroll();

  if (typeof initContactController === 'function') {
    initContactController();
  }
});

// 1. Sticky Header, ScrollSpy & Back-to-Top
function initScrollEffects() {
  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector(".back-to-top");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = (scrollY) => {
    // Header sticky shadow
    if (header) {
      if (scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Botão Voltar ao Topo
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }

    // ScrollSpy ativo
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  };

  if (lenis) {
    lenis.on('scroll', (e) => handleScroll(e.scroll));
  } else {
    window.addEventListener("scroll", () => handleScroll(window.pageYOffset), { passive: true });
  }
}

// 2. Mobile Menu Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById("menuToggleBtn");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    drawer.classList.add("open");
    toggleBtn.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
  }

  function closeMenu() {
    drawer.classList.remove("open");
    toggleBtn.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  }

  toggleBtn.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeMenu();
    }
  });
}

// 3. Scroll Reveal Animations (Instant & Smooth)
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-fade-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("is-revealed"));
  }
}

// 4. Number Counters com Deceleração Suave
function initCounters() {
  const counterElements = document.querySelectorAll(".count-up");
  if (counterElements.length === 0) return;

  const runCounter = (el) => {
    const finalValue = parseInt(el.getAttribute("data-final-value"), 10) || 0;
    const isPercentage = el.hasAttribute("data-percentage");
    const noSeparator = el.hasAttribute("data-no-separator");
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || (isPercentage ? "%" : "");
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic curve
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * finalValue);
      const formattedVal = noSeparator ? currentValue : currentValue.toLocaleString('pt-BR');

      el.textContent = `${prefix}${formattedVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        const finalFormatted = noSeparator ? finalValue : finalValue.toLocaleString('pt-BR');
        el.textContent = `${prefix}${finalFormatted}${suffix}`;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "true";
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    counterElements.forEach(el => runCounter(el));
  }
}

// 5. Smooth Scroll com compensação do Header
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76;

        if (lenis) {
          lenis.scrollTo(targetEl, {
            offset: -headerOffset,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }

        if (window.history && window.history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });
}
