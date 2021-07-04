import './Login.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

function Login({ onLoginUser }) {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginUser({
      password,
      email
    });
  }

  return (
    <div className="login">
      <Form
        name="login"
        title="Рады видеть!"
        textBtn="Войти"
        onSubmit={handleSubmit}>

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
      <div className="login__question">

        <span className="login__question-text">Ещё не зарегистрированы?</span>
        <Link className="login__question-link" to="./signup">Регистрация</Link>

      </div>
    </div>
  );
}

export default Login;
