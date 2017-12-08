import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

import {formatDate, setTitle} from '../../util/lib';

import './postsitem.css';

class PostsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Posts-Item">
        <div className="item-header">
          <div className="item-tab">{setTitle(this.props.posts.tab)}</div>
          <div className="item-info">{this.props.posts.reply_count}/{this.props.posts.visit_count}{ ' / '+ formatDate(this.props.posts.last_reply_at)}</div>
        </div>
        <div className="item-content">
          <h2>{this.props.posts.title}</h2>
          <div className="cont">{this.props.posts.content}</div>
        </div>
        <div className="item-footer">
          <div className="user">
            <Avatar size={22} src={this.props.posts.author.avatar_url} style={{verticalAlign: 'middle'}} />
            <span style={{verticalAlign: 'middle'}}> {this.props.posts.author.loginname}</span>
          </div>
          <div className="time">创建于：{new Date(this.props.posts.create_at).toLocaleDateString()}</div>
        </div>
      </div>
    )
  }
}


export default PostsItem;
