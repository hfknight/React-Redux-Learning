import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {selectBook} from '../actions/index';
// import {bindActionCreators} from 'redux';

class DogBreeds extends Component {
  renderList() {
    return this.props.breeds.map(book => (
      <li 
        key={book.title}
        // onClick={() => this.props.selectBook(book)}
        className='list-group-item'>
          {book.title}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, {fetchDogBreeds})(DogBreeds);