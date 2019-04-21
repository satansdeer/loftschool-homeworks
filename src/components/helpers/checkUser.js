export default ({ firstname, lastname, password }) => {
  const errors = {};
  let isSubmited =
    firstname.toLowerCase() === 'james' &&
    lastname.toLowerCase() === 'bond' &&
    String(password) === '007';

  if (!isSubmited) {
    if (firstname.toLowerCase() !== 'james')
      errors.firstname = 'Имя указано не верно';
  } else {

  if (!isSubmited) {
    if (lastname.toLowerCase() !== 'bond')
      errors.lastname = 'Фамилия указана не верно';
  } else {

  if (!isSubmited) {
    if (password.toString() !== '007')
      errors.password = 'Пароль указан не верно';
  }

  return { errors, isSubmited };
  }