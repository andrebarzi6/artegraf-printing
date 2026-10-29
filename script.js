/* ============================================
   MENU MOBILE (apre/chiude la navigazione)
   ============================================ */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Chiude il menu quando si clicca su un link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================
   VALIDAZIONE MODULO DI CONTATTO
   ============================================ */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

function showError(field, message) {
  field.classList.toggle('is-invalid', Boolean(message));
  field.parentElement.querySelector('.form__error').textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  const nome = form.nome;
  const email = form.email;
  const messaggio = form.messaggio;

  // Nome
  if (nome.value.trim().length < 2) {
    showError(nome, 'Inserisci il tuo nome.');
    valid = false;
  } else showError(nome, '');

  // Email
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  if (!emailOk) {
    showError(email, 'Inserisci un indirizzo email valido.');
    valid = false;
  } else showError(email, '');

  // Messaggio
  if (messaggio.value.trim().length < 10) {
    showError(messaggio, 'Scrivi almeno 10 caratteri.');
    valid = false;
  } else showError(messaggio, '');

  if (!valid) {
    successMsg.hidden = true;
    return;
  }

  // Qui andrà l'invio reale (es. fetch verso un servizio o uno script PHP).
  successMsg.hidden = false;
  form.reset();
});