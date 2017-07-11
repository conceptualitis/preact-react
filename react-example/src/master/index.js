import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Preview from '../preview';

const Master = ({ messages }) => (
  <div className="master">
    {
      messages.map(message => (
        <Preview message={message} key={message.id} />
      ))
    }
  </div>
);

Master.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Master;
