import './Profile.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, isNestedForm, onSignOut, serverError }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile">
      <Form
        name="profile"
        title={`Привет, ${currentUser.name}`}
        textBtn="Редактировать"
        onSubmit={onUpdateUser}
        isNestedForm={isNestedForm}
        serverError={serverError}
        inputs={[
          {
          title: 'Имя',
          type: 'text',
          name: 'name',
          value: `${currentUser.name}`,
          required: true,
          minLength: '2',
          maxLength: '40'
          },
          {
          title: 'E-mail',
          type: 'email',
          name: 'email',
          value: `${currentUser.email}`,
          required: true,
          minLength: '5',
          maxLength: '40'
          }
        ]}
      >
      </Form>

      <Link className="profile__logout" onClick={onSignOut} to="./">Выйти из аккаунта</Link>

    </div>
  );
}

export default Profile;
