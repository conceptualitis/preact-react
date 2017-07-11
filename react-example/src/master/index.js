import React, { PropTypes } from 'react';
import './styles.css';

const Master = ({ messages }) => (
  <div className="master">
    {
      messages.map(message => (
        <div>{message.title}</div>
      ))
    }
  </div>
);

Master.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Master;
