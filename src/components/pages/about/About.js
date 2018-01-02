import React from 'react';

import CardAbout from './cardAbout/CardAbout';
import ContentRow from '../../contentRow/ContentRow';
import aboutData from '../../../data/about';


const colPadding = '1.75rem';

const About = () => (
  <ContentRow alignment={colPadding}>
    <CardAbout padding={colPadding} {...aboutData}/>
    <CardAbout padding={colPadding} {...aboutData}/>
    <CardAbout padding={colPadding} {...aboutData}/>
  </ContentRow>
);

export default About;