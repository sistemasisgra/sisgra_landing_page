// Sisgra - Controller de Widgets Flutuantes & Redes Sociais
// Baseado no padrão arquitetural de leleo_monteiro_lp

function openWhatsapp(customText) {
  let source = new URLSearchParams(window.location.search).get("utm_source");
  source = source?.trim() || "site";

  const defaultMessage = `Olá Sisgra, vim pelo ${source} e gostaria de saber mais sobre os sistemas para gestão avícola!`;
  const message = customText || defaultMessage;
  const encoded = encodeURIComponent(message);

  window.open(`https://wa.me/5514996851290?text=${encoded}`, '_blank', 'noopener,noreferrer');
}

function openInstagram() {
  window.open("https://www.instagram.com/sisgra/", '_blank', 'noopener,noreferrer');
}

function openFacebook() {
  window.open("https://www.facebook.com/SisgraAvicultura", '_blank', 'noopener,noreferrer');
}

function openYoutube() {
  window.open("https://www.youtube.com/channel/UC3rzWiqxX7A8O26vVP5CwmQ", '_blank', 'noopener,noreferrer');
}

function openTwitter() {
  window.open("https://twitter.com/SisgraSistemas", '_blank', 'noopener,noreferrer');
}

function showToast(message) {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    toast.className = "toast-container";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0088FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}
