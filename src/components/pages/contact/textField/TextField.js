import React from 'react';
import PropTypes from 'prop-types';


class TextField extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      focus: false
    };
    
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  
  onFocus() {
    this.setState({focus: true});
  }
  
  onBlur() {
    this.setState({focus: false});
  }
  
  render() {
    return (
      <div className="input-field" style={this.props.style}>
        <input value={this.props.text}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               onChange={this.props.onChanged}
               className={this.props.error ? 'invalid' : ''}/>
        <label className={this.state.focus || this.props.text ? 'active' : ''}>
          {this.props.label}{this.props.isRequired && <span className="red-text"> *</span>}
        </label>
        <span className="helper-text" data-error={this.props.error}> </span>
      </div>
    );
  }
}

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  onChanged: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  style: PropTypes.object
};

export default TextField;