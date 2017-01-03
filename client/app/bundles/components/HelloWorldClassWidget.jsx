import React, { PropTypes } from 'react';

const HelloWorldClassWidget = React.createClass({
  propTypes: {
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  },
  handleChange: function(e) {
    const name = e.target.value;
    this.props.updateName(name);
  },
  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
});
export default HelloWorldClassWidget;
