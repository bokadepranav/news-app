import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a5ad92a3c3cc4a35860bce9730bed3dd";
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">Today's Top Headlines!</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3">
                  <NewsItem title={element.title} description={element.description} url={element.url} imgUrl={element.urlToImage} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
