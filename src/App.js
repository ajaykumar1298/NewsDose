import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
  api = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <NavBar />
        <News apiKey={this.api} />
      </div>
    );
  }
}
