import React from 'react';
import PropTypes from 'prop-types';


const cardStyle = {
  padding: '50px 11% 70px'
};

const FormCard = ({children, onSubmit}) => (
  <div style={cardStyle} className="card-panel col l6 offset-l3 m8 offset-m2 s12">
    <form onSubmit={onSubmit} className="right-align">
      {children}
      <button className="waves-effect waves-teal btn blue">SEND</button>
    </form>
  </div>
);

FormCard.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormCard;