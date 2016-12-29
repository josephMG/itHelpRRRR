import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';

let propTypes = {
  name: PropTypes.string.isRequired, 
};
class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      name: this.props.name,
      testInt: 0 
    };
  }
  updateName(name) {
    this.setState({testInt: this.state.testInt+1})
  }
  render() {
    return (
      <div>
        <HelloWorldWidget name={this.state.name} updateName={e => this.updateName(e)} />
      </div>
    );
  }
}
HelloWorld.propTypes = propTypes;
export default HelloWorld;
