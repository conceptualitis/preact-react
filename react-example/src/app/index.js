import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles.css';
import Empty from '../empty';
import Detail from '../detail';
import Master from '../master';


class App extends Component {
  render() {
    const { messages } = this.props;

    return (
      <Router>
        <div className="app">
          <Master messages={messages} />
          <Switch>
            <Route
              path="/:id"
              render={({ match }) => (
                <Detail
                  message={
                    messages.find(m => m.id === parseInt(match.params.id, 10))
                  }
                />
              )}
            />
            <Route component={Empty} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired
};

export default connect(({ messages }) => ({
  messages
}))(App);
