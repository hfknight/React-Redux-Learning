import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <h2 className="display-4">Dog Breed List&nbsp;<i className="fas fa-paw fa-spin"></i></h2>
          <p className="lead">
            Click the link to load a random image from this breed.
          </p>
          <p className="my-4">You Selected: <em>{this.state.selectedName}</em></p>
          <Link className="btn btn-link" to='/'>Go Back Home</Link>
        </div>
        <DogBreeds callBackFromParent={ this.updateFromChild }/>
      </div>
    );
  }
}

export default DogBreedList;
