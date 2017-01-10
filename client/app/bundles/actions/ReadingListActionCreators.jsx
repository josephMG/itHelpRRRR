import actionTypes from '../constants/readingListConstants';
import {DOM as RxDOM} from 'rx-dom';

export function allBooks(settings){
	return (dispatch) => {
		return dispatch(sendAJAX(settings, actionTypes.LOAD_BOOK))
	}
//  return {
//    type: actionTypes.LOAD_BOOKS,
//    books,
//  };
}
export function updateBook(settings){
	return (dispatch) => {
		return dispatch(sendAJAX(settings, actionTypes.UPDATE_BOOK))
	}
//  return {
//    type: actionTypes.UPDATE_BOOK,
//    books,
//  };
}
export function updateBookStatus(settings){
	return (dispatch) => {
		return dispatch(sendAJAX(settings, actionTypes.UPDATE_BOOK_STATUS))
	}
//  return {
//    type: actionTypes.UPDATE_BOOK_STATUS,
//    books,
//  };
}
export function deleteBook(settings){
	return (dispatch) => {
		return dispatch(sendAJAX(settings, actionTypes.DELETE_BOOK))
	}
}
function sendAJAX(settings, type){
    return (dispatch) => {
			return RxDOM.ajax(settings)
				 .subscribe(
				   (data) => {
						 return dispatch(loadBooks(data.response.books));
					 }
					 ,
					 () => {}
				 );
		}
}
function loadBooks(books){
	return {type: actionTypes.LOAD_BOOKS, books: books};
}
