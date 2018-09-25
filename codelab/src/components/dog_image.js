import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogImage extends Component {
  componentDidMount() {

  }
  render() {
    if(!this.props.dog) {
      return (<div>Please Select a dog breed to get started.</div>);
    }
    const { name, image } = this.props.dog;
    return (
      <div>
        <h2>Random Image for: {name}</h2>
        <img src={image} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    dog: state.selectedDog // in reducer/index.js
  };
}

export default connect(mapStateToProps)(DogImage);