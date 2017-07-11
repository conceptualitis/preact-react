import React, { Component } from 'react';
import './styles.css';

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    return (
      <ul
        className={open ? 'widget widget--open' : 'widget'}
        onClick={this.toggle}
      >
        <li className="widget__item">Option 1</li>
        <li className="widget__item">Option 2</li>
        <li className="widget__item">Option 3</li>
      </ul>
    );
  }
}

export default Widget;
