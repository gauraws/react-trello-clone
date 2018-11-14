import React, { Component } from 'react';
import { Input } from 'antd';
import styles from './ListForm.module.css';

class CreateListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitle: ''
    };

    this.createList = this.createList.bind(this);
  }

  createList(event, boardKey, listTitle) {
    event.preventDefault();

    this.props.onCreateList(boardKey, listTitle);
    this.setState({ listTitle: '' });
  }

  render() {
    const { boardKey } = this.props;
    const { listTitle } = this.state;

    return (
      <div className={styles.listItem}>
        <div className={styles.createList}>
          <form onSubmit={event => this.createList(event, boardKey, listTitle)}>
            <Input
              onChange={event =>
                this.setState({ listTitle: event.target.value })
              }
              value={this.state.listTitle}
              placeholder="Add list"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateListForm;