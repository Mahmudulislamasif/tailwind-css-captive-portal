var x = 1;
var y = 1;
function passwordToggle() {
  var passwordInput = document.getElementById('password');
  var hidePasswordImg = document.getElementById('hide-password');
  
  if (x === 1) {
    passwordInput.type = 'text';
    hidePasswordImg.src = './assets/images/icon/Show.png';
    x = 0;
  } else {
    passwordInput.type = 'password';
    hidePasswordImg.src = './assets/images/icon/Hide.png';
    x = 1;
  }
}
function confirmPasswordToggle() {
  var confirmPasswordInput = document.getElementById('confirm-password');
  var confirmPasswordToggleImg = document.getElementById('confirm-password-toggle');

  if (y === 1) {
    confirmPasswordInput.type = 'text';
    confirmPasswordToggleImg.src = './assets/images/icon/Show.png';
    y = 0;
  } else {
    confirmPasswordInput.type = 'password';
    confirmPasswordToggleImg.src = './assets/images/icon/Hide.png';
    y = 1;
  }
}
