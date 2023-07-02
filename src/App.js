//convert class based component to function based component start here
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  api = process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  state = {
    progress: 0,
  };

  setProgress = (pro) => {
    this.setState({
      progress: pro,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            length={3}
            progress={this.state.progress}
          />
          {/* <Spiner /> */}
          <Switch>
            <Route exact path="/">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="health"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="science"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="sports"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                apiKey={this.api}
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                key="technology"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
