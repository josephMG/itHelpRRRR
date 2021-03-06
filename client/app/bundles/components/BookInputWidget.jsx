import React, { PropTypes } from 'react';
const propTypes = {
	id:						PropTypes.number,
	name:					PropTypes.string,
	status:				PropTypes.string,
	author_id:		PropTypes.number,
	author_name:	PropTypes.string,
	onCancel:			PropTypes.func,
	onConfirm:		PropTypes.func
}
const defaultProps = {
	id:						0,
	name:					'',
	status:				'unread',
	author_id:		0,
	author_name:	'',
	onCancel:			function(){},
	onConfirm:		function(){}
}
class BookInputWidget extends React.Component {
	constructor(props){
		super(props);
		this.onCheckboxChange = this.onCheckboxChange.bind(this);
		this.onConfirmClick = this.onConfirmClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onCreateClick = this.onCreateClick.bind(this);
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
		let {id, onConfirm} = this.props;
		var myForm = document.getElementById('myForm');
		let formData = new FormData(myForm);
		formData.append("book[status]",this.state.status)
		onConfirm(formData, id);
		myForm.reset();
	}
	onCancelClick(e){
		let {id, onCancel} = this.props;
		onCancel(id);
	}
	onConfirmClick(e){
		let {id, onConfirm} = this.props;
		var myForm = document.getElementById('myForm');
		let formData = new FormData(myForm);
		formData.append("book[status]",this.state.status)
		onConfirm(formData, id);
		myForm.reset();
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
			<form className="form form-inline" id="myForm" role="form" ref='form' name="book">
				<div className="row">
					<div className="col-md-1 form-group">{''}</div>
					<div className="col-md-2 form-check">
						<label className="form-check">
							<input type="checkbox"
										 name="book[status]"
										 className="form-check-input"
										 onChange={this.onCheckboxChange}
							/>
							{status}
						</label>
					</div>
					<div className="col-md-3 ">
						<label className="sr-only" htmlFor="bookName">書名</label>
						<input id="bookName" className="form-control" type="text" name="book[name]" defaultValue={name}/>
					</div>
					<div className="col-md-2 form-group">
    				<label className="sr-only" htmlFor="authorName">作者</label>
						<input id="authorName" className="form-control" type="text" name="book[author_attributes][name]" defaultValue={author_name} />
					</div>
					<div className="offset-md-1 col-md-3 form-group">
						{buttons}
					</div>
				</div>
			</form>
		);
	}
}
BookInputWidget.propTypes = propTypes;
BookInputWidget.defaultProps = defaultProps;
export default BookInputWidget;
