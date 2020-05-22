import React from "react";
import './Contacts.scss';
import Contact from './Contact';
import Span from './Span';


class Contacts extends React.Component {
	render() {
		const { profiles } = this.props;

		
		return (
			<div className="container"data-testid="contacts">
			<section className="contacts">
				<article className="contact">
					<span className="contact__avatar" />
					<Span title="Nome"/>
					<Span title="Telefone"/>
					<Span title="País"/>
					<Span title="Admissão"/>
					<Span title="Empresa"/>
					<Span title="Departamento"/>
				</article>

				{profiles && profiles.map(person => {
					return<Contact key={person.id} data={person}/>
				})}

			</section>
		</div>
	);
	}
}

export default Contacts;
