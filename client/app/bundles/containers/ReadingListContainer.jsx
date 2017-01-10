import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import ReadingList from './ReadingList';

import * as readingListActions from '../actions/ReadingListActionCreators';

const ReadingListContainer = ({ actions, books, railsContext }) => {
	console.log(books);
  return <ReadingList {...{ actions, books, railsContext }} />
};
ReadingListContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  railsContext: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	let { $$readingListStore } = state
  return {
    books: $$readingListStore.get("books").toJS(),
    railsContext: $$readingListStore.get("railsContext").toObject(),
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(readingListActions, dispatch) };
}

// Don't forget to actually use connect!
export default connect(mapStateToProps, mapDispatchToProps)(ReadingListContainer);
