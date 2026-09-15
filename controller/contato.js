// Sisgra - Controller do Formulário de Contato
// Integração automática com o WhatsApp Oficial (14) 99685-1290

function initContactController() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const subject = document.getElementById('subject')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !message) {
      alert('Por favor, informe seu nome e sua mensagem.');
      return;
    }

    const text = `Olá Sisgra! Vim pelo site institucional.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Assunto:* ${subject}\n*Mensagem:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5514996851290?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    contactForm.reset();

    if (typeof showToast === 'function') {
      showToast('Mensagem pronta! Redirecionando para o WhatsApp da Sisgra...');
    }
  });
}
