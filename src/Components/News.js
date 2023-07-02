import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const capitalFirstLetterOfWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  document.title = `${capitalFirstLetterOfWord(props.category)} - TopNews`;

  const updateNewsForUseEffect = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;

    // let fetchData = await (await fetch(url)).json();
    let data = await fetch(url);
    props.setProgress(50);
    let fetchData = await data.json();
    props.setProgress(80);
    setArticles(fetchData.articles);
    setTotalResults(fetchData.totalResults);
    setLoading(true);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNewsForUseEffect();
  }, []);

  const updateNews = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}`;
    let fetchData = await (await fetch(url)).json();
    setArticles(fetchData.articles);
    setPage(pageNo);
  };
  const handleNextClick = () => {
    let pageNo = page + 1;
    updateNews(pageNo);
  };
  const handleToPrevClick = () => {
    let pageNo = page - 1;
    updateNews(pageNo);
  };
  const fetchMoreData = async () => {
    let pageNo = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}`;
    let fetchData = await (await fetch(url)).json();
    setArticles(articles.concat(fetchData.articles));
    setPage(pageNo);
  };
  return (
    <>
      <h1 className="text-center my-3">
        TopNews -Top {capitalFirstLetterOfWord(props.category)} HeadLines
      </h1>
      {/* {!loading && <Spiner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((elem) => {
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
            disabled={page <= 1}
            className="btn btn-dark btn-sm"
            onClick={handleToPrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults /props.pageSize)
            }
            type="button"
            className="btn btn-dark btn-sm"
            onClick={handleNextClick}
          >
            next &rarr;
          </button>
        </div> */}
    </>
  );
}
