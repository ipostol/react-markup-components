/* eslint-disable */

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export const styles = {
  general: {},
};

export default class PropTypesList extends Component {

  state = {
    isOpen: false,
  };

  handleClose = () => this.setState({ isOpen: false });

  handleOpen = () => this.setState({ isOpen: true });

  render() {

    const { propTypes, ...rest } = this.props;

    return (
      <div style={styles.general}{...rest}>
        <RaisedButton label="show props" primary onClick={this.handleOpen} />
        <Dialog
          title="All props"
          actions={[
            <FlatButton
              label="Cancel"
              secondary
              onClick={this.handleClose}
            />
          ]}
          modal
          open={this.state.isOpen}
        >
          <div>
            {
              propTypes && Object.keys(propTypes).map(key => (
                <div key={key}>{key}: {JSON.stringify(propTypes[key])}</div>
              ))
            }
          </div>
        </Dialog>
      </div>
    );

  }

}
