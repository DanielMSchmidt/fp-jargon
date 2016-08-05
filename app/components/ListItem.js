import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  static propTypes = {
    content: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
  };

  render() {
    const {
      content,
      headline,
    } = this.props;

    return (
      <a className={styles.container} onClick={() => this.setState({open: !this.state.open})}>
        <h3 className={styles.headline}>{headline}</h3>
        {this.state.open &&
          <p className={styles.content}>
            {content}
          </p>
        }
      </a>
    );
  }
}

export default ListItem;
