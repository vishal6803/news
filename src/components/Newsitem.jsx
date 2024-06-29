import React from "react";

export default function Newsitem(props) {
  let { title, description, urlToImage, url, publishedAt, author } = props;
  return (
    <div className="card mx-5 h-100" style={{ width: "18rem" }}>
      <img className="card-card-img-top" src={urlToImage} alt="" />
      <div className="card-body">
        <h5 className="card-card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            {" "}
            By {author} on {new Date(publishedAt).toGMTString()}
          </small>
        </p>
        <a href={url} target="_blank" className="btn btn-primary ">
          link
        </a>
      </div>
    </div>
  );
}
