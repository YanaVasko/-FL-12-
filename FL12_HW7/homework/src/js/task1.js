const emailMin = 5;
const newPasswordLength = 6;
let password;
const firstEmailExample = 'user@gmail.com';
const secondEmailExample = 'admin@gmail.com';

let email = prompt('Please, enter your email: ', '');

if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < emailMin) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === firstEmailExample || email === secondEmailExample) {
  password = prompt('Please, enter your password: ', '');
  if (password === '' || password === null) {
    alert('Canceled');
  } else if (
    password === 'UserPass' && email === firstEmailExample ||
    password === 'AdminPass' && email === secondEmailExample
  ) {
    let check = confirm('Do you want to change your password?');
    if (!check) {
      alert('You have failed the change.');
    } else {
      let passwordOld = prompt('Please, enter your current password: ', '');
      if (passwordOld === '' || password === null) {
        alert('Canceled');
      } else if (
        passwordOld === 'UserPass' && email === firstEmailExample ||
        passwordOld === 'AdminPass' && email === secondEmailExample
      ) {
        let newPassword = prompt('Please, enter your new password: ', '');
        if (newPassword === '' || newPassword === null) {
          alert('Canceled');
        }
        if (newPassword.length < newPasswordLength) {
          alert('It\'s too short password. Sorry.');
        } else {
          let newPasswordCheck = prompt('Please enter your new password again');
          if (newPasswordCheck === newPassword) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}
