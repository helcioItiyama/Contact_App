import React from 'react';

import data from './data/data.json';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Filters from './components/Filters';
import TopBar from './components/Topbar';
import Span from './components/Span';
import {
  orderByName,
  orderByCountry,
  orderByCompany,
  orderByDepartment,
  orderByDate,
  filterByName
} from './utils';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      profiles: []
    }
  }

  componentDidMount() {
    const newData = data.map(profile => ({
      ...profile,
      admissionDate: new Date(profile.admissionDate).toLocaleDateString('pt-br')
    }));

    this.setState({
      profiles: newData
    })
  }
  
  handleClickName(event, order) {
    event.preventDefault();
    
    let newData = [];

    if(order === 'name') {
      newData = orderByName(data);
    } else if (order === 'country') {
      newData = orderByCountry(data);
    } else if (order === 'company') {
      newData = orderByCompany(data)
    } else if (order === 'department') {
      newData = orderByDepartment(data)
    } else {
      newData = orderByDate(data);
    }

    newData = data.map(profile => ({
      ...profile,
      admissionDate: new Date(profile.admissionDate).toLocaleDateString('pt-br')
    }));

    this.setState({
      profiles: newData
    })
  }

  handleSearch(event) {
    event.preventDefault();

    let newData = filterByName(data, event.target.value);

    newData = newData.map(profile => ({
      ...profile,
      admissionDate: new Date(profile.admissionDate).toLocaleDateString('pt-br')
    }));

    this.setState({profiles: newData})
  }

  handleActiveClick(index) { 
    
    this.setState({ isActive: !this.state.isActive })
  }

  render() {

    return (
      <React.Fragment>

        <TopBar />

        <div className="container">
          <Filters>
            <div className="filters__search">
              <input onChange={(event) => this.handleSearch(event)} type="text" className="filters__search__input" placeholder="Pesquisar" />
              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            <button type="button"
              className={this.state.isActive ? 'filters__item is-selected' : 'filters__item'}
              onClick={(event) => {
                this.handleClickName(event, 'name');
                this.setState({ isActive: !this.state.isActive });
              }}
            >
              Nome
              <i className="fas fa-sort-down" />
            </button>

            <button type="button"
              className={this.state.isActive ? 'filters__item is-selected' : 'filters__item'}
              onClick={(event) => {
                this.handleClickName(event, 'country');
                this.handleActiveClick(0)
              }}
            >
              País
              <i className="fas fa-sort-down" />
            </button>

            <button type="button"
              className={this.state.isActive ? 'filters__item is-selected' : 'filters__item'}
              onClick={(event) => {
                this.handleClickName(event, 'company');
                this.setState({ isActive: !this.state.isActive });
              }}
            >
              Empresa
              <i className="fas fa-sort-down" />
            </button>

            <button type="button"
              className={this.state.isActive ? 'filters__item is-selected' : 'filters__item'}
              onClick={(event) => {
                this.handleClickName(event, 'department');
                this.setState({ isActive: !this.state.isActive });
              }}
            >
              Departamento
              <i className="fas fa-sort-down" />
            </button>

            <button type="button"
              className={this.state.isActive ? 'filters__item is-selected' : 'filters__item'}
              onClick={(event) => {
                this.handleClickName(event, 'admission');
                this.setState({ isActive: !this.state.isActive });
              }}
            >
              Data de admissão
              <i className="fas fa-sort-down" />
            </button>

          </Filters>
        </div>

        <div className="container">
          <Contacts>
            <Contact>
              <span className="contact__avatar" />
              <Span title="Nome"/>
              <Span title="Telefone"/>
              <Span title="País"/>
              <Span title="Admissão"/>
              <Span title="Empresa"/>
              <Span title="Departamento"/>
            </Contact>

              {this.state.profiles.map(person => {
                return(
                <Contact key={person.id}>
                  <span className="contact__avatar">
                    <img src={person.avatar} alt={person.name}/>
                  </span> 
                  <Span title={person.name}/>
                  <Span title={person.phone}/>
                  <Span title={person.country}/>
                  <Span title={person.admissionDate}/>
                  <Span title={person.company}/>
                  <Span title={person.department}/>
                </Contact> 
                )
              })}

          </Contacts>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
