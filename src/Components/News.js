import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  data = {
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: {
          id: null,
          name: "YouTube",
        },
        author: null,
        title:
          "Gravitational waves: Astrophysicists hear the hum of the universe - Al Jazeera English",
        description:
          "It’s a noise from far, far away in deep space.And the discovery may reveal more about how our universe was formed.Teams of astrophysicists have detected a ba...",
        url: "https://www.youtube.com/watch?v=n6gp-LFk8eo",
        urlToImage: "https://i.ytimg.com/vi/n6gp-LFk8eo/maxresdefault.jpg",
        publishedAt: "2023-06-29T16:50:10Z",
        content: null,
      },
      {
        source: {
          id: "the-times-of-india",
          name: "The Times of India",
        },
        author: "Roshni Agarwal",
        title:
          "Ahead of Market: 10 things that will decide D-Street action on Friday - Economic Times",
        description:
          "The Blue-chip Nifty 50 and Sensex indexes reached record highs, driven by gains in Adani group stocks and financials. Positive global cues, foreign buying, and stable macros also contributed to the rally. The Nifty climbed 1.03% to a record high of 19,011, wh…",
        url: "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-d-street-action-on-friday/articleshow/101373307.cms",
        urlToImage:
          "https://img.etimg.com/thumb/msid-101373306,width-1070,height-580,imgsize-88698,overlay-etmarkets/photo.jpg",
        publishedAt: "2023-06-29T16:26:00Z",
        content:
          "Blue-chip Nifty 50 and Sensex indexes rallied to hit record highs on Wednesday, lifted by gains in Adani group stocks and heavyweight financials amid positive global cues and buoyant sentiments in do… [+5068 chars]",
      },
    ],
  };
  state = {
    articles: this.data.articles,
  };
  render() {
    console.log(this.state.articles);
    return (
      <div>
        <div className="container my-3 text-center">
          <h1>TopNews -Top HeadLines</h1>
          <div className="row my-3">
            {this.state.articles.map((elem) => {
              return (
                <div className="col-md-4">
                  <NewsItems
                    title={elem.title}
                    desc={elem.description}
                    imgSrc={elem.urlToImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
