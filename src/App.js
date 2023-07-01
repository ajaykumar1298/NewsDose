import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import Spiner from "./Components/Spiner";

export default class App extends Component {
  api = process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  render() {
    return (
      <div>
        <NavBar />
        {/* <Spiner /> */}
        <News apiKey={this.api} pageSize={this.pageSize} />
      </div>
    );
  }
}
