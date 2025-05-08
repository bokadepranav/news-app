import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner from "../loading.gif"
import PropTypes from 'prop-types'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  static propTypes = {
    pageSize : PropTypes.number,
    apiKey : PropTypes.string,
    category : PropTypes.string,
  }

  static defaultProps = {
    pageSize: 9,
    category: "general",
  };

  /**
   * 
   * @param {number} page 
   */
  async updateNews(page)
  {
    this.setState({
      loading: true
    });
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: page,
    });
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  render() {
    const handlePrevClick = async () => {
      if(this.state.page > 1)
      {
        this.updateNews(this.state.page - 1);
      }
    };

    const handleNextClick = async () => {
      if(this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize))
      {
        this.updateNews(this.state.page + 1)
      }
    };

    return (
      <>
        <div className={`container py-3 bg-${this.props.mode}`}  style={{marginTop: "56.8px"}}>
          <h1 className={`text-center text-${this.props.mode === "dark" ? "light" : "dark"}`}>Today's Top Headlines!</h1>
          {this.state.loading && <div className="text-center"><img src={spinner} alt="Loading" /></div>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    url={element.url}
                    imgUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={this.props.mode}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-evenly">
            <button
              disabled={this.state.page <= 1}
              className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}
              onClick={handlePrevClick}
            >
              &larr; Prev
            </button>
            <button disabled={!(this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize))} className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`} onClick={handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
