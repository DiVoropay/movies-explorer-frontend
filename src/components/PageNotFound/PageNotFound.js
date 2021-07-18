import './PageNotFound.css';

import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {

  return (
    <div className="page-not-found">
      <h3 className="page-not-found__code">404</h3>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link className="page-not-found__link" to="./">Назад</Link>
    </div>
  );
}

export default PageNotFound;
