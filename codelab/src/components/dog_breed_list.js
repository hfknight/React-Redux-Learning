import React, { Component } from 'react';
import { connect } from "react-redux";
import DogBreeds from '../containers/dog_breeds';

export class DogBreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: ''
    };
  }
  updateFromChild = (childData) => {
    this.setState({ selectedName: childData })
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Dog Breed List</h2>
          <p className="lead">
            Click the link to load a random image from this breed.
          </p>
          <p className="my-4">You Selected: {this.state.selectedName}</p>
        </div>
        <DogBreeds callBackFromParent={ this.updateFromChild }/>
      </div>
    );
  }
}

export default DogBreedList;
