import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitem extends Component {
 
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imageUrl?imageUrl:"https://images.wsj.net/im-599395/social"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
