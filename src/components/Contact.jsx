import React from 'react';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    const children = this.props.children;
    return (
    <nav className="contact"> {children}</nav>
    );
  }
}

export default Contact;
