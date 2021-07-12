import './Form.css'

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Form({ name, title, inputs, textBtn, children, onSubmit, serverError, isNestedForm }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...values
    });
  }

  return (
    <form className="form" name={name} onSubmit={handleSubmit} noValidate>
      {isNestedForm ||
        (<Link className="form__link-to-main"  to="/">
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>)
      }

      <h2 className={`form__title${isNestedForm ? ' form__title_nested-form' : ''}`}>
        {title}
      </h2>

      {inputs.map((item) => {
        return (
          <label className={`form__field${isNestedForm ? ' form__field_nested-form' : ''}`}>
            <h3 className={`form__field-name${isNestedForm ? ' form__field-name_nested-form' : ''}`}>{item.title}</h3>
            <input className={`form__input${isNestedForm ? ' form__input_nested-form' : ''}`}
              onChange={handleChange}
              value={values[item.name] === undefined ? item.value : values[item.name]}
              type={item.type}
              name={item.name}
              required={item.required}
              minLength={item.minLength}
              maxLength={item.maxLength}
            />
            <span className={`form__tip${isNestedForm ? ' form__tip_nested-form' : ''}`}>{errors[item.name]}</span>
          </label>
        )
      })}

      {children}

      <span className="form__error">{serverError}</span>
      <button className={`form__button-submit${isNestedForm ? ' form__button-submit_nested-form' : ''}`} disabled={!isValid} type="submit">
        {textBtn}
      </button>
    </form>
  );

}

export default Form;
