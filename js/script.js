const consultationForm = document.querySelector('#consultation-request');
const captchaCode = document.querySelector('#captcha-code');
const captchaAnswer = document.querySelector('#captcha-answer');
const formStatus = document.querySelector('#form-status');

// basiccc frontend based check for this assessment
const code = String(Math.floor(1000 + Math.random() * 9000));
captchaCode.textContent = code;

consultationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = '';

  if (!consultationForm.reportValidity()) return;

  if (captchaAnswer.value.trim() !== code) {
    captchaAnswer.setCustomValidity('Enter the four digits shown beside this field.');
    captchaAnswer.reportValidity();
    captchaAnswer.setCustomValidity('');
    return;
  }

  formStatus.textContent = 'Online booking is unavailable in this demo. Please call 985-6589-510 to book your consultation.';
});


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion-trigger');

  button.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');

    accordionItems.forEach((otherItem) => {
      otherItem.classList.remove('is-open');
      otherItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      otherItem.querySelector('.accordion-panel').hidden = true;
      otherItem.querySelector('.accordion-icon').textContent = '+';
    });

    if (!wasOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      item.querySelector('.accordion-panel').hidden = false;
      item.querySelector('.accordion-icon').textContent = '−';
    }
  });
});
