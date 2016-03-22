import React, { Component, PropTypes } from 'react';

class PostsShow extends Component {
  static propTypes = {
    params: PropTypes.object
  };
  componentWillMount() {
    console.log('showing specific post');
  }
  render() {
    return <div>Show post {this.props.params.id}</div>;
  }
}

export default PostsShow;
