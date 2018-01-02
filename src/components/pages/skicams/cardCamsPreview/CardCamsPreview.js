import React from 'react';
import PropTypes from 'prop-types';

import formatDate from '../../../../utils/formatDate';


const dateStyle = {
  position: 'absolute',
  right: '10px',
  top: '6px',
  fontSize: '14px'
};

const CardCamsPreview = ({title, cams, padding}) => (
  <div className="col s12 m6"
       style={{padding: `0 ${padding}`}}>
    <div className="card">
      <span className="grey-text"
            style={dateStyle}>
        {formatDate(new Date())}
      </span>
      <div className="card-content center">
        <span className="card-title">{title}</span>
        {!cams && <p>Please wait...</p>}
      </div>
      <div className="card-image">
        {cams && cams.map(cam =>
          <img key={cam.name} src={cam.url} alt={cam.name}/>
        )}
      </div>
    </div>
  </div>
);

CardCamsPreview.propTypes = {
  title: PropTypes.string.isRequired,
  cams: PropTypes.array,
  padding: PropTypes.string
};

export default CardCamsPreview;