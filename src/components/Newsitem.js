import { getByTitle } from "@testing-library/react";
import React from "react";

const Newsitem =(props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card my-3">
        <img src={imageUrl?imageUrl:"https://images.wsj.net/im-599395/social"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >
            {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <h6 className="card-subtitle mb-2 text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</h6>
          <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  
}

export default Newsitem;
