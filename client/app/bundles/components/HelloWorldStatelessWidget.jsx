// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';

const propTypes = {
  updateName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
const HelloWorldStatelessWidget = (props) =>{
  let handleChange = (e) => {
    const name = e.target.value;
    props.updateName(name);
  };
  const { name } = props;
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
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
HelloWorldStatelessWidget.propTypes = propTypes;
export default HelloWorldStatelessWidget;
