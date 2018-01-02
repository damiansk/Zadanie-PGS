import React, { Component } from 'react';
import validator from 'validator';

import FormCard from './formCard/FormCard';
import TextField from './textField/TextField';
import ContentRow from '../../contentRow/ContentRow';


class Contact extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isValid: false,
      fieldName: {value: ''},
      fieldEmail: {value: ''},
      fieldMessage: {value: ''}
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  fieldChanged(fieldId) {
    return ({target}) => {
      this.setState({[fieldId]: {value: target.value}});
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
    const { fieldName, fieldEmail } = this.state;
    
    const requireError = 'This field is required',
          emailError = 'Please provide valid email';
   
    const nameError = validator.isEmpty(fieldName.value) ? requireError : '';
    const mailError = validator.isEmpty(fieldEmail.value) ? requireError
                        : validator.isEmail(fieldEmail.value) ? '' : emailError;
    
    this.setState({
      fieldName: {value: fieldName.value, error: nameError},
      fieldEmail: {value: fieldEmail.value, error: mailError},
      isValid: !(nameError || mailError)
    })
  }
  
  render() {
    const {fieldName, fieldEmail, fieldMessage} = this.state;
    return (
      <ContentRow vAlignCenter>
        <FormCard onSubmit={this.onSubmit}>
          <TextField label="Name"
                     onChanged={this.fieldChanged('fieldName')}
                     text={fieldName.value}
                     error={fieldName.error}
                     isRequired/>
          <TextField label="Email"
                     onChanged={this.fieldChanged('fieldEmail')}
                     text={fieldEmail.value}
                     error={fieldEmail.error}
                     isRequired/>
          <TextField label="Message"
                     style={{marginTop: '3rem'}}
                     onChanged={this.fieldChanged('fieldMessage')}
                     text={fieldMessage.value}/>
        </FormCard>
      </ContentRow>
    );
  }
}

export default Contact;