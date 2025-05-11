const form = document.querySelector('.feedback-form');
const submitButton = form.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};


window.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
    formData = savedData;
  }
});


form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});