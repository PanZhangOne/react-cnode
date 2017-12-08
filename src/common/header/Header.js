import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import XXIcon from 'material-ui/svg-icons/file/cloud';
import ShareIcon from 'material-ui/svg-icons/social/share';
import HelpIcon from 'material-ui/svg-icons/action/help';
import SendIcon from 'material-ui/svg-icons/content/send';
import {Link} from 'react-router-dom';

import './header.css';

const style = {
  height: 120,
  width: '100%',
  textAlign: 'center'
}

class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    }
  }

  handleToggle = () => this.setState({menuActive: !this.state.menuActive})

  handleClick(a) {
    this.setState({menuActive: false})
    this.props.clickItem(a);
  }

  render() {
    return (
      <div>
        <AppBar
          className="fixed"
          title={this.props.title}
          onLeftIconButtonClick={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
          docked={false}
          open={this.state.menuActive}
          onRequestChange={(menuActive) => this.setState({menuActive})}
        >
          <Paper style={style} zDepth={1} rounded={false}>
            <img
              style={{width: '100%', height: '100%', padding: '2rem', display: 'block', background: 'rgb(0, 188, 212)'}}
              src="https://cnodejs.org/public/images/cnodejs.svg"/>
          </Paper>
          <MenuItem data-tab="all" leftIcon={<HomeIcon/>} onClick={this.handleClick.bind(this)}>
            <Link to="/all" label="全部" style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none'}}>全部</Link>
          </MenuItem>
          <MenuItem data-tab="good" leftIcon={<XXIcon/>} onClick={this.handleClick.bind(this)}>
            <Link to="/good" style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none'}}>精华</Link>
          </MenuItem>
          <MenuItem data-tab="share" leftIcon={<ShareIcon/>} onClick={this.handleClick.bind(this)}>
            <Link to="/share" style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none'}}>分享</Link>
          </MenuItem>
          <MenuItem data-tab="ask" leftIcon={<HelpIcon/>} onClick={this.handleClick.bind(this)}>
            <Link to="/ask" style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none'}}>问答</Link>
          </MenuItem>
          <MenuItem data-tab="job" leftIcon={<SendIcon/>} onClick={this.handleClick.bind(this)}>
            <Link to="/job" style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none'}}>招聘</Link>
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default AppBarComponent;
