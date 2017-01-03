import React, { PropTypes } from 'react';
import Book from './Book';
const  propTypes = {
  updateBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
class ReadingListWidget extends React.Component {
  constructor(props){
    super(props);
  }

  handleChange(e) {
    const books = e.target.value;
    this.props.updateBooks(books);
  }

  render() {
    const { books } = this.props;
		const bookComponents = books.map((book, index) => {
			return <Book key={index} { ...book}/>
		});	
    return (
      <div className="container">
        <h3>
					Reading List
        </h3>
				{bookComponents}
        <hr />
      </div>
    );
  }
}
ReadingListWidget.propTypes = propTypes;
export default ReadingListWidget;
