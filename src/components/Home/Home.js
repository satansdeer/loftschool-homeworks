// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import './Home.css';

const HomeComponent = () => (
  <div className="content">
    <h3 className="title">Home</h3>
    <div className="home-container">
      <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
    </div>
  </div>
);

export default HomeComponent;
