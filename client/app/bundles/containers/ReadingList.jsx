import React, { PropTypes } from 'react';
import ReadingListWidget from '../components/ReadingListWidget';

let propTypes = {
  books: PropTypes.array.isRequired,
};
class ReadingList extends React.Component {
  constructor(props, context) {
    super(props, context);
		console.log(props)
    this.state = {
      books: this.props.books
    };
  }
  updateBooks(books) {
    this.setState({books})
  }
  render() {
    return (
      <div>
        <ReadingListWidget books={this.state.books} updateBooks={e => this.updateBooks(e)} />
      </div>
    );
  }
}
ReadingList.propTypes = propTypes;
export default ReadingList;
