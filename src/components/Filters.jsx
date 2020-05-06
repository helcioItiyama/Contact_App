import React from 'react';
import './Filters.scss';

function Filters({search, isActive, clickName, activeClick}) {
	const buttons = [{name: 'nome'}, {country: 'país'}, {company: 'empresa'}, {department: 'departamento'}, {admission: 'data de admissão'}]

	return (
		<div className="container" data-testid="filters">
			<div className="filters" >
				<div className="filters__search">
					<input onChange={(event) => search(event)} type="text" className="filters__search__input" placeholder="Pesquisar" />
					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
				</div>

				{buttons.map((button, index) => {
					return(
						<button key={index} type="button"
							className={isActive===index ? 'filters__item is-selected' : 'filters__item'}
							onClick={(event) => {
								clickName(event, Object.keys(button).toString());
								activeClick(index)
							}}
						>
							{button[Object.keys(button).toString()]}
							<i className="fas fa-sort-down" />
						</button>
					)
				})}

			</div>
		</div>
	);
}

export default Filters;
