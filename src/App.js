import React, { Component } from 'react';

import Api from './services/Api';
import FilmOnList from './components/filmOnList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        filmsList: [],
        companiesList: [],
        filterValue: 'any'
    };

    this.filterByCompany = this.filterByCompany.bind(this);
  }

  componentDidMount(){
    this.updateFilmsList(Api.getFilmsList());
    this.updateCompaniesList(Api.getCompaniesList());
  }

  updateFilmsList(data) {
    this.setState({
      filmsList: data
    })
  }

  updateCompaniesList(data) {
    this.setState({
      companiesList: data
    })
  }

  filterByCompany(event) {
    this.setState({filterValue: event.target.value});
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app-intro'>
          Sample films list React component.
        </h1>
        <select onChange={this.filterByCompany} value={this.state.filterValue}>
          <option value='any'>Any</option>
          {
            this.state.companiesList.map((company, i) => {
              return <option key={i}>{company}</option>
            })
          }
        </select>
        <ul className='films-list'>
          {
            this.state.filmsList.map((film, i) => {
              if(this.state.filterValue === 'any' || this.state.filterValue === film.company) {
                return <FilmOnList data={film} key={i}></FilmOnList>
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
