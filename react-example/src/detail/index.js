import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Widget from '../widget';

const Detail = ({ message }) => (
  <div className="detail">
    <h1>{message.title}</h1>
    <p>{message.body}</p>
    <Widget />
  </div>
);

Detail.propTypes = {
  message: PropTypes.object.isRequired
};

export default Detail;
