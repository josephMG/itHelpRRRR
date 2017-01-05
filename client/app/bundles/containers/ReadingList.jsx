import React, { PropTypes } from 'react';
import ReadingListWidget from '../components/ReadingListWidget';
import {DOM as RxDOM} from 'rx-dom';

let propTypes = {
  books: PropTypes.array.isRequired,
};
class ReadingList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.allBooks = this.allBooks.bind(this);
    this.state = {
      books: this.props.books
    };
  }
  componentDidMount(){
    this.allBooks();
  }
  allBooks(bookAttributes) {
    let settings = { url: Routes.books_path(), responseType: 'json'}
    RxDOM.ajax(settings)
    .subscribe(
      (data) => {
        let books = data.response.books;
        this.setState({books});
      },
      function (error) {
      }
    );
  }
  updateBook(bookAttributes, id) {
    let settings = id == 0? { url: Routes.books_path(), responseType: 'json', method: 'POST', body: bookAttributes} :
                          { url: Routes.book_path(id), responseType: 'json', method: 'PUT', body: bookAttributes}
    RxDOM.ajax(settings)
          .subscribe(
            (data) => {
              let books = data.response.books;
              console.log(books);
              this.setState({books});
            },
            function (error) {
            }
          );
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
    RxDOM.ajax(settings)
          .subscribe(
            (data) => {
              let books = data.response.books;
              this.setState({books});
            },
            function (error) {
            }
          );
  }
  deleteBook(id) {
    let settings = { url: Routes.book_path(id), method: 'DELETE'}
    RxDOM.ajax(settings)
         .subscribe(
            (data) => {
            },
            (error) => {
            }
          );
  }
  render() {
    return (
      <div>
        <ReadingListWidget books={this.state.books}
                           updateBook={(attributes, id=0) => this.updateBook(attributes, id)}
                           updateBookStatus={(id, status) => this.updateBookStatus(id, status)}
                           deleteBook={(id) => this.deleteBook(id)}/>
      </div>
    );
  }
}
ReadingList.propTypes = propTypes;
export default ReadingList;
