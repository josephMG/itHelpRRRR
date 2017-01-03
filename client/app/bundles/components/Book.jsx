import React, { PropTypes } from 'react';
const propTypes = {
	id:			PropTypes.number.isRequired,
	name:		PropTypes.string.isRequired,
	status:	PropTypes.string.isRequired,
	author_id:	PropTypes.number.isRequired,
	author_name:	PropTypes.string.isRequired
}
class Book extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const {id, name, status, author_name} = this.props;
		return (
			<div className="row">
				<div className="col-md-1">{id}</div>
				<div className="col-md-2">{status}</div>
				<div className="col-md-3">{name}</div>
				<div className="col-md-3">{author_name}</div>
				<div className="col-md-3">{author_name}</div>
			</div>
		);
	}
}
Book.propTypes = propTypes;
export default Book;
