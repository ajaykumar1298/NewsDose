import React, { Component } from "react";

export default class Spiner extends Component {
  render() {
    return (
      <div>
        <div className="text-center my-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
