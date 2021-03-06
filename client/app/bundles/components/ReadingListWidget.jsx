import React, { PropTypes } from 'react';
import Book from './Book';
import BookInputWidget from './BookInputWidget';
const  propTypes = {
  updateBook: PropTypes.func.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
class ReadingListWidget extends React.Component {
  constructor(props){
    super(props);
		this.onBookDelete = this.onBookDelete.bind(this)
		this.onBookModify = this.onBookModify.bind(this)
		this.onConfirmModify = this.onConfirmModify.bind(this)
		this.onCancelModify = this.onCancelModify.bind(this)
		this.state = {
			books: props.books,
			modifyList: []
		}
  }
  componentWillReceiveProps(nextProps){
    let {books} = nextProps;
    this.setState({books})
  }
	onBookDelete(id){
		let books = this.state.books.filter((book, i) => {
			return book.id!=id;
		});
    this.props.deleteBook(id);
		this.setState({books})
	}
	onBookModify(id){
		let modifyList = this.state.modifyList;
		if(modifyList.indexOf(id)==-1){
			modifyList.push(id);
		}
		this.setState({modifyList});
	}
	onCancelModify(id){
		let modifyList = this.state.modifyList.filter((modifiedID) => {
			return modifiedID!=id;
		});
		this.setState({modifyList});
	}
	onConfirmModify(attr, id=0){
    console.log(attr)
		let modifyList = this.state.modifyList.filter((modifiedID) => {
			return modifiedID!=id;
		});
		this.setState({modifyList});
    this.props.updateBook(attr, id);
	}
  render() {
    const { books, modifyList } = this.state;
		const bookComponents = books.map((book, index) => {
			if(modifyList.indexOf(book.id)==-1){
				return(
					<Book { ...book}
								key={index}
								onDelete = {this.onBookDelete}
								onModify = {this.onBookModify}
                onUpdateStatus = {this.props.updateBookStatus}
					/>
				);
			}else{
				return(
					<BookInputWidget { ...book}
								key={index}
								onConfirm = {this.onConfirmModify}
								onCancel = {this.onCancelModify}
					/>
				);
			}
		});
    return (
      <div className="container">
        <h3>
					Reading List
        </h3>
				<div className="row">
					<div className="col-md-1">{''}</div>
					<div className="col-md-2">閱讀狀態</div>
					<div className="col-md-3">書名</div>
					<div className="col-md-2">作者</div>
					<div className="col-md-4">
					</div>
				</div>
				{bookComponents}
        <hr />
					<BookInputWidget onConfirm = {this.onConfirmModify}/>
        <hr />
      </div>
    );
  }
}
ReadingListWidget.propTypes = propTypes;
export default ReadingListWidget;
