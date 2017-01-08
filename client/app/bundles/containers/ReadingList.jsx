import React, { PropTypes } from 'react';
import { connect } from 'react-redux'; 
import ReadingListWidget from '../components/ReadingListWidget';
import {DOM as RxDOM} from 'rx-dom';

let propTypes = {
  books: PropTypes.array.isRequired,
};
class ReadingList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.allBooks = this.allBooks.bind(this);
    this.sendAJAX = this.sendAJAX.bind(this);
    this.state = {
      books: this.props.books
    };
  }
  componentDidMount(){
    this.allBooks();
  }
	sendAJAX(settings, callback){
    RxDOM.ajax(settings)
    .subscribe(
				callback
      ,
      function (error) {
      }
    );
	}
  allBooks(bookAttributes) {
    let settings = { url: Routes.books_path(), responseType: 'json'}
		this.sendAJAX(settings, (data) => {
        let books = data.response.books;
        this.setState({books});
		})
  }
  updateBook(bookAttributes, id) {
    let settings = id == 0? { url: Routes.books_path(), responseType: 'json', method: 'POST', body: bookAttributes} :
                          { url: Routes.book_path(id), responseType: 'json', method: 'PUT', body: bookAttributes}
		this.sendAJAX(settings, (data) => {
        let books = data.response.books;
        this.setState({books});
		})
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
		this.sendAJAX(settings, (data) => {
        let books = data.response.books;
        this.setState({books});
		})
  }
  deleteBook(id) {
    let settings = { url: Routes.book_path(id), method: 'DELETE'}
		this.sendAJAX(settings)
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
export default connect()(ReadingList);
