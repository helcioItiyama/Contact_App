import React from 'react';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import TopBar from './components/Topbar';

import {
  orderContacts,
  orderByDate,
  filterByName
} from './utils';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.data = [];
    this.state = {
      isActive: 0,
      profiles: [],
    }
  }

  componentDidMount() {
    const url = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'

    fetch(url).then(result => result.json()).then(result => {
      this.data = result
      this.setState({
        profiles: result
      })
    })
  }
  
  handleClickName(event, order) {
    event.preventDefault();
    const { profiles } = this.state;
    let newData = [];
      if(order === 'admission') {
        newData = orderByDate(profiles)
      } else {
        newData = orderContacts(profiles, order);
      }

    this.setState({
      profiles: newData
    })
  }

  handleSearch(event) {
    event.preventDefault();

    let newData = filterByName(this.data, event.target.value);

    this.setState({profiles: newData})
  }

  handleActiveClick(key) { 
    this.setState({ isActive: key})
  }

  render() {
    const { isActive, profiles } = this.state;
 
    return (
      <React.Fragment>

        <TopBar />

        <Filters 
          search={event =>this.handleSearch(event)} 
          isActive={isActive}
          activeClick={key =>this.handleActiveClick(key)}
          clickName={(event, order) =>this.handleClickName(event, order)}
          />

        <Contacts profiles={profiles}/>

      </React.Fragment>
    )
  }
}

export default App;
