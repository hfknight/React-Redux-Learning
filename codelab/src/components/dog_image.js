import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogImage extends Component {
  componentDidMount() {

  }
  render() {
    if(!this.props.dog) {
      return (<div>Please Select a dog breed to get started.</div>);
    }
    // const { name, image } = this.props.dog;
    return (
      <div className="dog-image-wrapper col-sm-4">
        {/* <h2>Random Image for: {name}</h2> */}
        <img src={this.props.dog} />
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