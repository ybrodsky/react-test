import React, { Component } from 'react';
import City from './CityResource';
import { Link } from 'react-router-dom';

class IndexComponent extends Component {
  constructor(props) {console.log('country')
    super(props);
    this.state ={cities: []};
    this.City = new City();
  }

  componentDidMount() {
    this.City.query().then((data) => {
      this.setState({cities: data});
    })
  }

  componentWillUnmount() {
    console.log('aca')
  }

  render() {
    return (
      <ul ref="indexList" className="index-list">
        {this.state.cities.map((item) => {
          return (<li key={item.id}><Link to={{ pathname: '/cities/' + item.id, query: {a: 'b'} }}>{item.name}</Link></li>);
        })}
      </ul>
    )
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
