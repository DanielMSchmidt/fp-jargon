import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Function Programming Jargon</h2>
          <Link to="/list">List</Link> or <Link to="/quiz">Quiz</Link>
        </div>
      </div>
    );
  }
}
