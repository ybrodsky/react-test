import React, { Component } from 'react';
import Country from './CountryResource';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={countries: []};
    this.Country = new Country();
  }

  componentDidMount() {
    this.Country.query().then((data) => { console.log(data)
      this.setState({countries: data});
    })
  }

  render() {
    return (
      <ul ref="indexList" className="index-list">
        {this.state.countries.map((item) => {
          return (<li key={item.id}>{item.name}</li>);
        })}
      </ul>
    )
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
