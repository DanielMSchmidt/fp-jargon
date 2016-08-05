import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import jargons from '../utils/jargons';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {Object.keys(jargons).map(key => (
          <ListItem headline={key} content={jargons[key]} />
        ))}
      </div>
    );
  }
}
