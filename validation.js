const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', validationHeandler);

function validationHeandler(event) {
  event.preventDefault();

  checkInputs();
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

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

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, "Password doesn't match");
  } else {
    setSuccessFor(password2);
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control success';
  small.style.visibility = 'hidden';
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
  small.style.visibility = 'visible';
}
