import React from 'react';
import './Span.scss';

function Span({title}) {
  return (
      <span className="contact__data">{title}</span>
  )
}

export default Span;