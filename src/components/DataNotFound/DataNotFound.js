import './DataNotFound.css';

import React from 'react';

function DataNotFound({ code, message }) {

  return (
    <div className="data-not-found">
      <h3 className="data-not-found__code">{code}</h3>
      <p className="data-not-found__text">{message}</p>
    </div>
  );
}

export default DataNotFound;
