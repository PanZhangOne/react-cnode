import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './common/header/Header';
import ArticleList from './views/list/List';
import Topic from './views/topic/Topic';
import {setTitle} from './util/lib';
import eventProxy from './util/eventProxy';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'all',
      appBarName: 'CNode'
    }
  }

  componentDidMount() {
    eventProxy.on('setTitle', (title) => {
      this.setState({appBarName: title});
    })
  }

  onClickHandle(evt) {
    let tabData = evt.currentTarget.getAttribute('data-tab');
    this.setState({tab: tabData});
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Header title={this.state.appBarName} clickItem={this.onClickHandle.bind(this)}/>

          <Switch>
            <Route exact path="/:tab" component={List}/>} />
            <Route path="/topic/:id" component={TopicPage}/>
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const List = ({match}) => {
  return (
    <div className="App-Main">
      <ArticleList tab={match.params.tab} title={setTitle(match.params.tab)}/>
    </div>
  )
}

const TopicPage = ({match}) => {
  return (
    <div className="App-Main">
      <Topic id={match.params.id} />
    </div>
  )
}


export default App;
