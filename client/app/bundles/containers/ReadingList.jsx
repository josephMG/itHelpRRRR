import React, { PropTypes } from 'react';
import { connect } from 'react-redux'; 
import ReadingListWidget from '../components/ReadingListWidget';
import {DOM as RxDOM} from 'rx-dom';
import * as ReadingListActions from '../actions/ReadingListActionCreators'
let propTypes = {
  books: PropTypes.array.isRequired,
};
class ReadingList extends React.Component {
  constructor(props, context) {
    super(props, context);
		console.log(props)
    this.allBooks = this.allBooks.bind(this);
  }
  componentDidMount(){
  }
  allBooks(bookAttributes) {
    let settings = { url: Routes.books_path(), responseType: 'json'}
		this.props.allBook(settings)
  }
  updateBook(bookAttributes, id) {
    let settings = id == 0? { url: Routes.books_path(), responseType: 'json', method: 'POST', body: bookAttributes} :
                          { url: Routes.book_path(id), responseType: 'json', method: 'PUT', body: bookAttributes}
		this.props.updateBook(settings)
  }
  updateBookStatus(id, status) {
    let settings = {
      url: Routes.status_book_path(id),
      responseType: 'json',
      method: 'POST',
      headers: {
        'X-Requested-With': 'RxJS',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({book:{status: status}})
    }
		this.props.updateBookStatus(settings)
  }
  deleteBook(id) {
    let settings = { url: Routes.book_path(id), method: 'DELETE'}
		this.props.deleteBook(settings)
  }
  render() {
    return (
      <div>
        <ReadingListWidget books={this.props.books}
                           updateBook={(attributes, id=0) => this.updateBook(attributes, id)}
                           updateBookStatus={(id, status) => this.updateBookStatus(id, status)}
                           deleteBook={(id) => this.deleteBook(id)}/>
      </div>
    );
  }
}
ReadingList.propTypes = propTypes;
export default connect(null, ReadingListActions)(ReadingList);
