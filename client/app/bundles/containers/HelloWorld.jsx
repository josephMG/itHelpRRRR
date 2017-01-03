import React, { PropTypes } from 'react';
import HelloWorldComponentWidget from '../components/HelloWorldComponentWidget';
import HelloWorldClassWidget from '../components/HelloWorldClassWidget';
import HelloWorldStatelessWidget from '../components/HelloWorldStatelessWidget';

let propTypes = {
  name: PropTypes.string.isRequired,
};
class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      nameForComponent: this.props.name,
      nameForClass: this.props.name,
      nameForStateless: this.props.name
    };
  }
  updateComponentName(name) {
    this.setState({nameForComponent: name})
  }
  updateClassName(name) {
    this.setState({nameForClass: name})
  }
  updateStatelessName(name) {
    this.setState({nameForStateless: name})
  }
  render() {
    return (
      <div>
        <HelloWorldComponentWidget name={this.state.nameForComponent} updateName={e => this.updateComponentName(e)} />
        <HelloWorldClassWidget name={this.state.nameForClass} updateName={e => this.updateClassName(e)} />
        <HelloWorldStatelessWidget name={this.state.nameForStateless} updateName={e => this.updateStatelessName(e)} />
      </div>
    );
  }
}
HelloWorld.propTypes = propTypes;
export default HelloWorld;
