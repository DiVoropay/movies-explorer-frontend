import './Register.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

function Register({ onRegisterUser, serverError }) {

  return (
    <div className="register">
      <Form
        name="register"
        title="Добро пожаловать!"
        textBtn="Зарегестрироваться"
        onSubmit={onRegisterUser}
        serverError={serverError}
        inputs={[
          {
          title: 'Имя',
          type: 'text',
          name: 'name',
          required: 'required',
          minLength: '2',
          maxLength: '40'
          },
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
      <div className="register__question">
        <span className="register__question-text">Уже зарегистрированы?</span>
        <Link className="register__question-link" to="./signin">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
