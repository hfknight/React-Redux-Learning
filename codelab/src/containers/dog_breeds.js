import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogBreedList, fetchDogImage } from "../actions";
import DogImage from "../components/dog_image";
import _ from 'lodash';
// import {bindActionCreators} from 'redux';

class DogBreeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theBreed: ''
    };
  }
  componentDidMount() {
    console.log(' Dog Breeds Container - Component Did Mount');
    this.props.fetchDogBreedList();
  }

  renderList() {
    // console.log(this.props.breeds);
    const btnStyles = ["primary", "secondary", "success", "info", "light"];
    return this.props.breeds.map(breed => (
      <li
        key={breed}
        onClick={() => { this.props.fetchDogImage(breed); this.props.callBackFromParent(breed) }}
        className="list-group-item p-2"
      >
        <button type="button" className={`btn btn-${_.sample(btnStyles)}`}>{breed.toUpperCase()}</button>
      </li>
    ));
  }
  render() {
    return (
      <div className="dog-breed-list-container">
        <ul className="list-group d-flex justify-content-center col-sm-6">{this.renderList()}</ul>
        <DogImage dog={this.props.selectedDog} />
      </div>
    );
  }
}

// returned State > Props
function mapStateToProps(state) {
  return {
    breeds: state.breeds,
    selectedDog: state.selectedDog
  };
}

export default connect(
  mapStateToProps,
  { fetchDogBreedList, fetchDogImage }
)(DogBreeds);
