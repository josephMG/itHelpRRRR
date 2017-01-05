import React, { PropTypes } from 'react';
const propTypes = {
	id:						PropTypes.number.isRequired,
	name:					PropTypes.string.isRequired,
	status:				PropTypes.string.isRequired,
	author_id:		PropTypes.number.isRequired,
	author_name:	PropTypes.string.isRequired,
	onDelete:			PropTypes.func.isRequired,
	onModify:			PropTypes.func.isRequired
}
class Book extends React.Component {
	constructor(props){
		super(props);
		this.onCheckboxChange = this.onCheckboxChange.bind(this);
		this.onModifyClick = this.onModifyClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
		this.state = {
			status: props.status
		}
	}
	onCheckboxChange(e){
		let target = e.target;
		target.indeterminate = true;
		switch(this.state.status){
			case "unread":
				target.checked = false;
				target.indeterminate = true;
				this.setState({status: 'reading'});
				break;
			case "reading":
				target.checked = true;
				target.indeterminate = false;
				this.setState({status: 'finished'});
				break;
			case "finished":
				target.checked = false;
				target.indeterminate = false;
				this.setState({status: 'unread'});
				break;
		}
	}
	onDeleteClick(e){
		let {id, onDelete} = this.props;
		onDelete(id);
	}
	onModifyClick(e){
		let {id, onModify} = this.props;
		onModify(id);
	}
	render() {
		const {id, name,  author_name} = this.props;
		const {status} = this.state;
		return (
			<div className="row">
				<div className="col-md-1">{id}</div>
				<div className="col-md-2">
					<input type="checkbox" name={"status"} onChange={this.onCheckboxChange} />
					<label>{status}</label>
				</div>
				<div className="col-md-3">{name}</div>
				<div className="col-md-2">{author_name}</div>
				<div className="offset-md-1 col-md-3">
					<button type="button" className="btn btn-outline-success" onClick={this.onModifyClick}>Modify</button>
					<button type="button" className="btn btn-outline-danger" onClick={this.onDeleteClick}>Delete</button>
				</div>
			</div>
		);
	}
}
Book.propTypes = propTypes;
export default Book;
