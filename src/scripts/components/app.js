import React, { Component, PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  componentWillMount() {
    console.log('just for now');
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default App;
