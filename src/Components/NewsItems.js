import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, desc, imgSrc, url } = this.props;
    return (
      <div>
        <div className="card my-3">
          <img
            src={
              imgSrc
                ? imgSrc
                : "https://img.etimg.com/thumb/msid-101373306,width-1070,height-580,imgsize-88698,overlay-etmarkets/photo.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
