import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img style={{height: "200px"}} src={this.props.imgUrl ? this.props.imgUrl : "https://static.vecteezy.com/system/resources/previews/035/630/884/non_2x/news-announcer-in-the-studio-cityscape-with-buildings-clouds-sky-sun-journalism-live-report-breaking-hot-news-television-and-radio-casts-concept-illustration-in-flat-style-vector.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0, 45)}</h5>
            <p className="card-text">
              {this.props.description ? this.props.description.slice(0, 88) : "To know more about top news click on \"Read More\" below."}
            </p>
            <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
