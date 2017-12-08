import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './common/header/Header';
import ArticleList from './views/list/List';
import Topic from './views/topic/Topic';
import {setTitle} from './util/lib';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'all'
    }
  }

  onClickHandle(evt) {
    let tabData = evt.currentTarget.getAttribute('data-tab');
    this.setState({tab: tabData});
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Header title="CNode" clickItem={this.onClickHandle.bind(this)}/>

          <Switch>
            <Route exact path="/:tab" component={List}/>} />
            <Route path="/topic/:id" component={Topic}/>
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const List = ({match}) => {
  // console.log(match)
  return (
    <div className="App-Main">
      <ArticleList tab={match.params.tab} title={setTitle(match.params.tab)}/>
    </div>
  )
}


export default App;
