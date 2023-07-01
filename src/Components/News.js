import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
    };
  }
  componentDidMount = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // let fetchData = await (await fetch(url)).json();

    let fetchData = await (await fetch(url)).json();
    this.setState({
      articles: fetchData.articles,
      totalResults: fetchData.totalResults,
    });
  };

  updateNews = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    let fetchData = await (await fetch(url)).json();
    this.setState({
      articles: fetchData.articles,
      page: pageNo,
    });
  };
  handleNextClick = () => {
    let pageNo = this.state.page + 1;
    this.updateNews(pageNo);
  };
  handleToPrevClick = () => {
    let pageNo = this.state.page - 1;
    this.updateNews(pageNo);
  };

  render() {
    return (
      <div>
        <div className="container my-3 text-center">
          <h1>TopNews -Top HeadLines</h1>
          <div className="row my-3">
            {this.state.articles.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <NewsItems
                    title={elem.title}
                    desc={elem.description}
                    imgSrc={elem.urlToImage}
                    url={elem.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark btn-sm"
              onClick={this.handleToPrevClick}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark btn-sm"
              onClick={this.handleNextClick}
            >
              next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
