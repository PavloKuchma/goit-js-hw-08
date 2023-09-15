import _throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
// const FORM_DATA = {};

const onInputHandler = _throttle(() => {
  const FORM_DATA = {
    email: feedbackForm.email.value.trim(),
    message: feedbackForm.message.value.trim(),
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(FORM_DATA));
}, 500);

const onSubmitHandler = e => {
  e.preventDefault();
  const FORM_DATA = {
    email: feedbackForm.email.value.trim(),
    message: feedbackForm.message.value.trim(),
  };
  if (FORM_DATA.message !== '') {
    console.log(FORM_DATA);
    localStorage.removeItem(FORM_KEY);
    e.currentTarget.reset();
  } else {
    return alert('All fields are required.');
  }
};

const onRefreshFiller = () => {
  const existingData = JSON.parse(localStorage.getItem(FORM_KEY));
  if (existingData !== null) {
    feedbackForm.email.value = existingData.email;
    feedbackForm.message.value = existingData.message;
  }
};
onRefreshFiller();
feedbackForm.addEventListener('submit', onSubmitHandler);
feedbackForm.addEventListener('input', onInputHandler);
