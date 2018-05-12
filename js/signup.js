

document.getElementById('sign-up-btn').addEventListener('click', () => {
  const email = document.getElementById('sign-up').value;
  if (email) {
    console.log(email);
    document.getElementById('sign-up').value = '';
  } else {
    document.getElementById('sign-up').value = 'Enter your email';
  }
});

// TODO: Validate E-mail address

// TODO: Send email to server

