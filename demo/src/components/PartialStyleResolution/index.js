import React from 'react';
import './parent.scss';

const PartialStyleResolution = () => (
  <div>
    <h1 styleName="parent">Parent</h1>
    <h2 styleName="child">Child</h2>
  </div>
);

export default PartialStyleResolution;
