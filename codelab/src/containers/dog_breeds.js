import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogBreedList } from '../actions';
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
    console.log(this.props.breeds);
    return this.props.breeds.map(breed => (
      <li 
        key={breed}
        // onClick={() => this.props.selectBook(book)}
        className='list-group-item'>
          {breed}
        </li>
    ));
  }
  render() {
    return   (
      <ul className='list-group col-sm-4'>{this.renderList()}</ul>
    )
  }
}

// returned State > Props
function mapStateToProps(state) {
  return {
    breeds: state.breeds
  };
}

export default connect(mapStateToProps, { fetchDogBreedList })(DogBreeds);