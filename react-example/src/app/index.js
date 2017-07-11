import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import Detail from '../detail';
import Master from '../master';


class App extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="app">
        <Master messages={messages} />
        <Detail />
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired
};

export default connect(({ messages }) => ({
  messages
}))(App);
