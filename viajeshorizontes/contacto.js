/* ============================================
   CONTACTO JS – Formulario
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contactForm');
  const success = document.querySelector('.form-success');
  const formInner = document.querySelector('.form-grid-wrap');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate required fields
    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#e05c5c';
        valid = false;
      }
    });

    // Checkbox
    const privacy = form.querySelector('#privacy');
    if (privacy && !privacy.checked) {
      privacy.style.outline = '2px solid #e05c5c';
      valid = false;
    } else if (privacy) {
      privacy.style.outline = '';
    }

    if (!valid) return;

    // Simulate send (replace with actual endpoint)
    const btn = form.querySelector('.btn--primary');
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
      if (formInner) formInner.style.display = 'none';
      if (success) success.style.display = 'block';
    }, 1200);
  });

  // Phone format helper
  const phoneInput = document.getElementById('telefono');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9+\s\-()]/g, '');
    });
  }
});
