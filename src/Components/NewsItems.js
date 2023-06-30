import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, desc, imgSrc } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href="/" className="btn btn-dark btn-sm ">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
