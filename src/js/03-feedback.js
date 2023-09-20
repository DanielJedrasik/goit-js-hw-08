import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('[type=email]');
const textareaMessage = form.querySelector('[name=message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

onReload();

const formUpdate = () => {
  const refill = {
    email: inputEmail.value,
    message: textareaMessage.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(refill));
};
form.addEventListener('input', throttle(formUpdate, 500));

function onReload() {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (data) {
    inputEmail.value = data.email;
    textareaMessage.value = data.message;
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log({ email: inputEmail.value, message: textareaMessage.value });
  if (inputEmail.value === '' || textareaMessage.value === '') {
    return alert('Please fill in all the fields!');
  }
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
form.addEventListener('submit', onSubmit);
