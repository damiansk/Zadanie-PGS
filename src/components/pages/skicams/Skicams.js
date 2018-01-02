import React, { Component } from 'react';

import CardCamsPreview from './cardCamsPreview/CardCamsPreview';
import ContentRow from '../../contentRow/ContentRow';
import fetchSkiCams from '../../../utils/fetchSkiCams';


class Skicams extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      camNames: ['Andalo', 'Monte Bondone'],
      skicams: {}
    };
    
    this.colPadding = '1.75rem';
  }
  
  componentWillMount() {
    fetchSkiCams(this.state.camNames, skicams => this.setState({skicams}));
  }
  
  render() {
    const { camNames, skicams } = this.state;
    
    return(
     <ContentRow alignment={this.colPadding}>
       {camNames.map(name =>
         <CardCamsPreview key={name}
                          title={name}
                          cams={skicams[name]}
                          padding={this.colPadding}/>
       )}
     </ContentRow>
    )
  }
}

export default Skicams;