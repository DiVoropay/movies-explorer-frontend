import './Login.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

function Login({ onLoginUser, serverError }) {

  return (
    <div className="login">
      <Form
        name="login"
        title="Рады видеть!"
        textBtn="Войти"
        onSubmit={onLoginUser}
        serverError={serverError}
        inputs={[
          {
          title: 'E-mail',
          type: 'email',
          name: 'email',
          required: 'required',
          minLength: '5',
          maxLength: '40'
          },
          {
          title: 'Пароль',
          type: 'password',
          name: 'password',
          required: 'required',
          minLength: '4',
          maxLength: '16'
          }
        ]}>

      </Form>
      <div className="login__question">

        <span className="login__question-text">Ещё не зарегистрированы?</span>
        <Link className="login__question-link" to="./signup">Регистрация</Link>

      </div>
    </div>
  );
}

export default Login;
