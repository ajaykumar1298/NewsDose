import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
    document.title = `${this.capitalFirstLetterOfWord(
      this.props.category
    )} - TopNews`;
  }

  capitalFirstLetterOfWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  componentDidMount = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // let fetchData = await (await fetch(url)).json();
    let data = await fetch(url);
    this.props.setProgress(50);
    let fetchData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: fetchData.articles,
      totalResults: fetchData.totalResults,
      loading: true,
    });
    this.props.setProgress(100);
  };

  updateNews = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}`;
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
  fetchMoreData = async () => {
    let pageNo = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    let fetchData = await (await fetch(url)).json();
    this.setState({
      articles: this.state.articles.concat(fetchData.articles),
      page: pageNo,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-3">
          TopNews -Top {this.capitalFirstLetterOfWord(this.props.category)}{" "}
          HeadLines
        </h1>
        {/* {!this.state.loading && <Spiner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner />}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((elem) => {
                return (
                  <div className="col-md-4" key={elem.url}>
                    <NewsItems
                      title={elem.title}
                      desc={elem.description}
                      imgSrc={elem.urlToImage}
                      url={elem.url}
                      source={elem.source.name}
                      author={elem.author}
                      publishedAt={elem.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
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
          </div> */}
      </>
    );
  }
}
