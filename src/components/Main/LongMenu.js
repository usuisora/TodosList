import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'Выполнено',
  'Не выполнено'
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = ({target:{id}}) => {
  const {setTodoStatus,todoid} = this.props
   var status = (id === options[0]) ? true : false;
    this.setState({ anchorEl: null });
    setTodoStatus(todoid, status)
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const {status} = this.props;
    return (
      <span>
        <Button onClick={this.handleClick}>{status}</Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} id = {option} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </span>
    );
  }
}

export default LongMenu;