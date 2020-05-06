import React from 'react';
import './Contact.scss';
import Span from './Span';


class Contact extends React.Component {
  
  render() {
    const { person } = this.props;
    const admission = new Date(person.admissionDate).toLocaleDateString('pt-br')
    
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={person.avatar} alt={person.name}/>
        </span> 
        <Span title={person.name}/>
        <Span title={person.phone}/>
        <Span title={person.country}/>
        <Span title={admission}/>
        <Span title={person.company}/>
        <Span title={person.department}/>
      </article> 
    );
  }
}

export default Contact;
