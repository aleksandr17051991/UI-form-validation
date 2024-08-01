function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control success';
  small.style.visibility = 'hidden';
  console.log('success');
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
  small.style.visibility = 'visible';
  console.log('errrrrorr');
}

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', validationHeandler);

function validationHeandler(event) {
  event.preventDefault();

  console.log('handler works');
  checkInputs();
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  // const passwordValue = password.value.trim();
  // const password2Value = password2.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else {
    setSuccessFor(email);
  }
}
