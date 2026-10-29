document.addEventListener("DOMContentLoaded", () => {
  // Inicialização dos ícones Lucide, caso a biblioteca esteja disponível.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Atualiza automaticamente o ano do rodapé.
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Menu responsivo para celular.
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  const closeMenu = () => {
    if (!menuToggle || !navLinks) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");

    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menu" : "Fechar menu"
      );

      navLinks.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) {
        closeMenu();
      }
    });
  }

  // Comparador interativo de imagens.
  const baSlider = document.getElementById("baSlider");
  const beforeClip = document.querySelector(".ba-before-clip");
  const baDivider = document.querySelector(".ba-divider");

  if (baSlider && beforeClip && baDivider) {
    const updateComparison = () => {
      const value = `${baSlider.value}%`;

      beforeClip.style.width = value;
      baDivider.style.left = value;
    };

    baSlider.addEventListener("input", updateComparison);
    updateComparison();
  }

  // Formulário de agendamento via WhatsApp.
  const leadForm = document.getElementById("leadForm");
  const formError = document.getElementById("formError");

  if (leadForm) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nomeField = document.getElementById("nome");
      const whatsappField = document.getElementById("whatsapp");
      const interesseField = document.getElementById("interesse");

      const nome = nomeField?.value.trim() || "";
      const whatsapp = whatsappField?.value.trim() || "";
      const interesse = interesseField?.value || "";

      // Validação dos campos.
      if (!nome || !whatsapp || !interesse) {
        if (formError) {
          formError.hidden = false;
          formError.textContent =
            "Preencha todos os campos para continuar.";
        } else {
          alert("Preencha todos os campos para continuar.");
        }

        return;
      }

      if (formError) {
        formError.hidden = true;
        formError.textContent = "";
      }

      // IMPORTANTE:
      // Substitua pelo número real do consultório.
      // Use código do país + DDD + número, somente dígitos.
      const phone = "5500000000000";

      if (
        !/^\d{12,13}$/.test(phone) ||
        phone === "5500000000000"
      ) {
        const errorMessage =
          "Configure o número real de WhatsApp no arquivo script.js antes de usar o formulário.";

        if (formError) {
          formError.hidden = false;
          formError.textContent = errorMessage;
        } else {
          alert(errorMessage);
        }

        return;
      }

      // Montagem da mensagem.
      const message =
        `Olá! Meu nome é ${nome}. ` +
        `Meu WhatsApp para contato é ${whatsapp}. ` +
        `Gostaria de informações para agendar uma consulta sobre: ${interesse}.`;

      const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      // Abre o WhatsApp em uma nova aba.
      const newWindow = window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      // Alternativa caso o navegador bloqueie a nova aba.
      if (!newWindow) {
        window.location.href = whatsappURL;
      }
    });
  }
});