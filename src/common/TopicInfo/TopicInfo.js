import React, {Component} from 'react';
import {Avatar} from 'material-ui/Avatar';

import {formatDate} from '../../util/lib';

class TopicInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Topic-Info">
        <Avatar src={this.props.topic.author.avatar_url} />
        <div className="info">
          <h2>{this.props.topic.author.loginname}</h2>
          <div>{formatDate(this.props.topic.create_at) + '/ 点击' + this.props.topic.visit_count + '  评论' + this.props.topic.reply_count}</div>
        </div>
      </div>
    )
  }
}

export default TopicInfo;
