import actionTypes from '../constants/readingListConstants';

export function allBooks(books) {
  return {
    type: actionTypes.LOAD_BOOKS,
    books,
  };
}
export function updateBook(books){
  return {
    type: actionTypes.UPDATE_BOOK,
    books,
  };
}
export function updateBookStatus(books){
  return {
    type: actionTypes.UPDATE_BOOK_STATUS,
    books,
  };
}
export function deleteBook(books){
  return {
    type: actionTypes.DELETE_BOOK,
    books,
  };
}
