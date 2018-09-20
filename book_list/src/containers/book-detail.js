import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return (<div>Please Select a TV Show to get started.</div>);
    }
    return (
      <div>
        <h2>Details for: </h2>
        <div>Title: {this.props.book.title}</div>
        <div>Episodes: {this.props.book.episode}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook // in reducer/index.js
  };
}

export default connect(mapStateToProps)(BookDetail);