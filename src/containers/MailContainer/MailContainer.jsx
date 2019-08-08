import React from 'react';
import Mail from '../../components/atoms/Mail/Mail';

const findElement = (list, parameter, nameOfParameter) =>
  list.filter(item => item[nameOfParameter] === parameter)[0];

const MailContainer = ({
  data,
  match: {
    params: { id, list }
  }
}) => {
  const exactMail = findElement(data[list], id, 'id');

  return <Mail body={exactMail.body} from={exactMail.from} to={exactMail.to} />;
};

export default MailContainer;
