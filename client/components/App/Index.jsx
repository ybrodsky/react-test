import React, { Component } from 'react';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Index{this.props.children}</div>
    )
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
