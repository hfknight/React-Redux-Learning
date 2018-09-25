import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogBreedList, fetchDogImage } from '../actions';
import DogImage from '../components/dog_image';
// import {bindActionCreators} from 'redux';

class DogBreeds extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {breeds: ["a"]};
  // }
  componentDidMount() {
    this.props.fetchDogBreedList();
  }
  renderList() {
    // console.log(this.props.breeds);
    return this.props.breeds.map(breed => (
      <li
        key={breed}
        onClick={() => this.props.fetchDogImage(breed)}
        className='list-group-item'>
        {breed}
      </li>
    ));
  }
  render() {
    return (
      <div className="main">
        <ul className='list-group col-sm-4'>{this.renderList()}</ul>
        <DogImage />

      </div>
    );
  }
}

// returned State > Props
function mapStateToProps(state) {
  return {
    breeds: state.breeds
  };
}

export default connect(mapStateToProps, { fetchDogBreedList, fetchDogImage })(DogBreeds);