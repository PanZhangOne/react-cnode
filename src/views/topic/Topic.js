import React, {Component} from 'react';

import TopicInfo from '../../common/TopicInfo/TopicInfo';

import fetch from '../../api/fetch';
import {formatDate} from '../../util/lib';
import eventProxy from '../../util/eventProxy';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null
    }
  }

  getData() {
    fetch('get', '/topic/' + this.props.id)
      .then(datas => {
        console.log(datas);
        this.setState({topic: datas});
      });
  }

  componentWillMount() {
    this.getData();
    eventProxy.trigger('setTitle', '话题');
  }


  render() {
    return (
      <div>
        <TopicInfo topic={this.state.topic} />
      </div>
    )
  }
}

export default Topic;
