import React from 'react';
import './Span.scss';

function Span(props) {
  return (
      <span className="contact__data">{props.title}</span>
  )
}

export default Span;