import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import PostsItem from '../../common/postsitem/PostsItem';

import fetch from '../../api/fetch';
import {getScrollHeight, getScrollTop, getWindowHeight} from '../../util/lib';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loadMore: false,
      page: 1,
      limit: 20
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  getDatas(url, data) {
    fetch('get', url, data)
      .then(datas => {
        this.setState({articles: datas})
      })
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.getDatas('/topics', {tab: this.props.tab, page: this.state.page, limit: this.state.limit, mdrender: 'false'});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({articles: [], page: 1})
    if (nextProps.tab == 'all') {
      this.getDatas('/topics', {tab: nextProps.tab, page: this.state.page, limit: this.state.limit, mdrender: 'false'});
    } else {
      this.getDatas('/topics', {tab: nextProps.tab, page: this.state.page, limit: this.state.limit, mdrender: 'false'});
    }
  }

  handleScroll(event) {
    if (!this.state.articles.length) return;
    if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
      this.setState({loadMore: true, page: this.state.page + 1, limit: this.state.limit})
      setTimeout(() => {
        fetch('get', '/topics', {
          tab: this.props.tab,
          page: this.state.page,
          limit: this.state.limit,
          mdrender: 'false'
        })
          .then(datas => {
            this.setState({loadMore: false});
            this.setState({articles: this.state.articles.concat(datas)})
          })
      }, 250)
    }
  }

  render() {
    return (
      <List ref="list" style={{background: '#e5e5e5'}}>
        <Subheader>{this.props.title}</Subheader>
        {!this.state.articles.length ? <Circular/> : ''}
        {this.state.articles.map((item) => {
          return (
            <ListItem key={item.id}
                      style={{marginBottom: '10px', boxShadow: '0 2px 2px rgba(0,0,0, 0.4)', background: '#fff'}}>
              <Link to={'/topic/' + item.id}
                    style={{display: 'block', textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                <PostsItem posts={item}/>
              </Link>
            </ListItem>
          )
        })}
        {this.state.loadMore && this.state.articles.length ? <CircularLine/> : ''}
      </List>
    )
  }
}

function Circular(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress size={80} thickness={5}/>
    </div>
  )
}

function CircularLine(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <CircularProgress size={40} thickness={5}/>
    </div>
  )
}


export default ArticleList;
