import React, { PropTypes } from 'react';
const propTypes = {
	id:						PropTypes.number,
	name:					PropTypes.string,
	status:				PropTypes.string,
	author_id:		PropTypes.number,
	author_name:	PropTypes.string,
	onCreate:			PropTypes.func,
	onCancel:			PropTypes.func,
	onConfirm:		PropTypes.func
}
const defaultProps = {
	id:						0,
	name:					'',
	status:				'unread',
	author_id:		0,
	author_name:	'',
	onCreate:			function(){},
	onCancel:			function(){},
	onConfirm:		function(){}
}
class Book extends React.Component {
	constructor(props){
		super(props);
		this.onCheckboxChange = this.onCheckboxChange.bind(this);
		this.onConfirmClick = this.onConfirmClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onCreateClick = this.onCreateClick.bind(this);
		console.log(props)
		this.state = {
			name: props.name || '',
			status: props.status || 'unread',
			author_name: props.author_name || ''
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
	onCreateClick(e){
		let {id, onCreate} = this.props;
		onCreate(id);
	}
	onCancelClick(e){
		let {id, onCancel} = this.props;
		onCancel(id);
	}
	onConfirmClick(e){
		let {id, onConfirm} = this.props;
		onConfirm(id);
	}
	render() {
		const {id} = this.props;
		const {name, status, author_name} = this.state;
		let buttons=null
		if(id==0){
			buttons=<span className="create-book">
					<button type="button" className="btn btn-primary" onClick={this.onCreateClick}>Create</button>
				</span>
		}else{
			buttons=<span className="create-book">
					<button type="button" className="btn btn-success" onClick={this.onConfirmClick}>Confirm</button>
					<button type="button" className="btn btn-secondary" onClick={this.onCancelClick}>Cancel</button>
				</span>
		}
		return (
			<div className="row">
				<div className="col-md-1">{''}</div>
				<div className="col-md-2">
					<input type="checkbox" name={"status"} onChange={this.onCheckboxChange} />
					<label>{status}</label>
				</div>
				<div className="col-md-3">
					<input type="text" name="name" value={name}/>
				</div>
				<div className="col-md-2"><input type="text" name="author_name" value={author_name} /></div>
				<div className="col-md-4">
					{buttons}
				</div>
			</div>
		);
	}
}
Book.propTypes = propTypes;
Book.defaultProps = defaultProps;
export default Book;
