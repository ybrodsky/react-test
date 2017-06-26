import React, { Component } from 'react';
import City from './CityResource';

class IndexComponent extends Component {
  constructor(props) {console.log('country')
    super(props);
    this.state ={cities: []};
    this.City = new City();
  }

  componentDidMount() {
    this.City.query().then((data) => { console.log(data)
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
