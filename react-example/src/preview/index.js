import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const Preview = ({ message }) => (
  <Link className="preview" to={`/${message.id}`} key={message.id}>
    <h2 className="preview__from">{message.from}</h2>
    <div className="preview__title">{message.title}</div>
  </Link>
);

Preview.propTypes = {
  message: PropTypes.object.isRequired
};

export default Preview;
