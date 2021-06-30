import './Profile.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

function Profile({ currentUser = {name: 'Незнакомец'}, onRegisterUser, isNestedForm }) {

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUser({
      name,
      email
    });
  }

  return (
    <div className="profile">
      <Form
        name="profile"
        title={`Привет, ${currentUser.name}`}
        textBtn="Редактировать"
        onSubmit={handleSubmit}
        isNestedForm={true}
      >

          <label className={`form__field${isNestedForm ? ' form__field_nested-form' : ''}`}>
            <h3 className={`form__field-name${isNestedForm ? ' form__field-name_nested-form' : ''}`}>Имя</h3>
            <input className={`form__input${isNestedForm ? ' form__input_nested-form' : ''}`}
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

          <label className={`form__field${isNestedForm ? ' form__field_nested-form' : ''}`}>
            <h3 className={`form__field-name${isNestedForm ? ' form__field-name_nested-form' : ''}`}>E-mail</h3>
            <input className={`form__input${isNestedForm ? ' form__input_nested-form' : ''}`}
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
      </Form>

      <Link className="profile__logout" to="./signin">Выйти из аккаунта</Link>

    </div>
  );
}

export default Profile;