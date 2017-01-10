import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export const styles = {
  list: {
    margin: '20px 0 20px 0',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  item: {
    marginLeft: '10px',
  },
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
      <div style={styles.general} {...rest}>
        <RaisedButton label="Show all propTypes" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.handleClose}
            />
          ]}
          modal
          open={this.state.isOpen}
        >
          <div style={styles.list}>
            <div style={styles.title}>Props:</div>
            {
              Object.keys(propTypes).map(key => <div key={key} style={styles.item}>{key}: {JSON.stringify(propTypes[key])}</div>)
            }
          </div>
        </Dialog>
      </div>
    );

  }

}
