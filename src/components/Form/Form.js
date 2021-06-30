import './Form.css'

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Form({ name, title, textBtn, children, onSubmit, isNestedForm }) {

  return (
    <form className="form" name={name} onSubmit={onSubmit}>
      {isNestedForm ||
        (<Link className="form__link-to-main"  to="/">
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>)
      }

      <h2 className={`form__title${isNestedForm ? ' form__title_nested-form' : ''}`}>
        {title}
      </h2>

      {children}

      <button className={`form__button-submit${isNestedForm ? ' form__button-submit_nested-form' : ''}`} type="submit">
        {textBtn}
      </button>
    </form>
  );

}

export default Form;
