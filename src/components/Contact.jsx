import React from 'react';
import './Contact.scss';
import Span from './Span';


class Contact extends React.Component {
  
  render() {
    const { data }= this.props;
    const admission = new Date(data.admissionDate).toLocaleDateString('pt-br')
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name}/>
        </span> 
        <Span title={data.name}/>
        <Span title={data.phone}/>
        <Span title={data.country}/>
        <Span title={admission}/>
        <Span title={data.company}/>
        <Span title={data.department}/>
      </article> 
    );
  }
}

export default Contact;
