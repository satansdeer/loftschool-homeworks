export default ({ firstname, lastname, password }) => {
  const errors = {};

  if (!firstname) errors.firstname = 'Нужно указать имя';
  if (!lastname) errors.lastname = 'Нужно указать фамилию';
  if (!password) errors.password = 'Нужно указать пароль';

  return errors;
};
