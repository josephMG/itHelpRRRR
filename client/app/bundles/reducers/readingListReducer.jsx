import Immutable from 'immutable';

import actionTypes from '../constants/readingListConstants';

export const $$initialState = Immutable.fromJS({
  books: [], // this is the default state that would be used if one were not passed into the store
  railsContext: {}, // this is the default state that would be used if one were not passed into the store
});

export default function readingListReducer($$state = $$initialState, action) {
  const { type, books } = action;

  switch (type) {
    case actionTypes.LOAD_BOOKS:
      return $$state.set('books', books);
    case actionTypes.UPDATE_BOOK:
      return $$state.set('books', books);
    case actionTypes.DELETE_BOOK:
      return $$state.set('books', books);
    case actionTypes.UPDATE_BOOK_STATUS:
      return $$state.set('books', books);
    default:
      return $$state;
  }
}
