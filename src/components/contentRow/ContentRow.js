import React from 'react';
import PropTypes from 'prop-types';


const ContentRow = props => (
  <main className={`content ${props.vAlignCenter && 'valign-wrapper'} grey lighten-5`}>
    <div className="container">
      <div style={{marginLeft: `-${props.alignment}`, marginRight: `-${props.alignment}`}}
           className="row">
        {props.children}
      </div>
    </div>
  </main>
);

ContentRow.propTypes = {
  alignment: PropTypes.string,
  vAlignCenter: PropTypes.bool
};

export default ContentRow;