import './Register.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

function Register({ onRegisterUser }) {

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUser({
      name,
      password,
      email
    });
  }

  return (
    <div className="register">
      <Form
        name="register"
        title="Добро пожаловать!"
        textBtn="Зарегестрироваться"
        onSubmit={handleSubmit}>
          <label className="form__field">
            <h3 className="form__field-name">Имя</h3>
            <input className="form__input"
              onChange={handleChangeName}
              value={name || ''}
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__tip"></span>
          </label>
          <label className="form__field">
            <h3 className="form__field-name">E-mail</h3>
            <input className="form__input"
              onChange={handleChangeEmail}
              value={email || ''}
              type="email"
              name="email"
              minLength="5"
              maxLength="40"
              required
            />
            <span className="form__tip"></span>
          </label>
          <label className="form__field">
            <h3 className="form__field-name">Пароль</h3>
            <input className="form__input"
              onChange={handleChangePassword}
              value={password || ''}
              type="password"
              name="password"
              minLength="4"
              maxLength="16"
              required
            />
            <span className="form__tip"></span>
          </label>
      </Form>
      <div className="register__question">
        <span className="register__question-text">Уже зарегистрированы?</span>
        <Link className="register__question-link" to="./signin">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
