import React from 'react';
import PropTypes from 'prop-types';


const CardAbout = props => (
  <div className="col s12 m6 l4"
       style={{padding: `0 ${props.padding}`}}>
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="Content thumbnail"/>
      </div>
      <div className="card-content">
        <span className="card-title">{props.title}</span>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
);

CardAbout.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  padding: PropTypes.string
};

export default CardAbout;