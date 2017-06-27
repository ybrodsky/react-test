import React, { Component } from 'react';
import City from './CityResource';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={city: {}};
    this.City = new City();console.log(props)
  }

  componentDidMount() {
    this.City.get(this.props.match.params.id).then((data) => {
      this.setState({city: data});
    })
  }

  render() {
    return (
      <div>
        {this.state.city.id}, {this.state.city.name}
      </div>
    )
  }
}

EditComponent.defaultProps = {
  items: []
};

export default EditComponent;
