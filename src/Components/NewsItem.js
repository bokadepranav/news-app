import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const {title, imgUrl, description, url, author, date, source} = this.props;
    return (
      <div>
        <div className={`card bg-${this.props.mode} border-${this.props.mode === "light" ? "secondary" : "light"}`}>
        <span className="badge text-bg-secondary position-absolute bg-danger" style={{left: "-6px", top: "-6px"}}>{source}</span>
          <img style={{height: "200px"}} src={imgUrl ? imgUrl : "https://static.vecteezy.com/system/resources/previews/035/630/884/non_2x/news-announcer-in-the-studio-cityscape-with-buildings-clouds-sky-sun-journalism-live-report-breaking-hot-news-television-and-radio-casts-concept-illustration-in-flat-style-vector.jpg"} className="card-img-top" alt="unavailable" />
          <div className="card-body">
            <h5 className={`card-title text-${this.props.mode === "dark" ? "light" : "dark"}`}>{title.slice(0, 45)}</h5>
            <p className={`card-text text-${this.props.mode === "dark" ? "light" : "dark"}`}>
              {description ? description.slice(0, 88) : "To know more about top news click on \"Read More\" below."}
            </p>
            <p className="card-text"><small className={`text-${this.props.mode === "dark" ? "warning" : "dark"}`}>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
