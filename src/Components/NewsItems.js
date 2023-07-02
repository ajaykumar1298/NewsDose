import React from "react";

export default function NewsItems(props) {
  let { title, desc, imgSrc, url, source, author, publishedAt } = props;
  return (
    <div>
      <div className="card my-2">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imgSrc
              ? imgSrc
              : "https://img.etimg.com/thumb/msid-101373306,width-1070,height-580,imgsize-88698,overlay-etmarkets/photo.jpg"
          }
          className="card-img-top"
          alt="image not avilable right now"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-danger">
              By {author ? author : "Unknown"} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
