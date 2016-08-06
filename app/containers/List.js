import React, { Component } from 'react';
import { Link } from 'react-router';
import ListItem from '../components/ListItem';
import jargons from '../utils/jargons';
import styles from './List.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.content}>
          {Object.keys(jargons).map(key => (
            <ListItem headline={key} content={jargons[key]} />
          ))}
        </div>
      </div>
    );
  }
}
