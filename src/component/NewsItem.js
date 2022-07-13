import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsUrl, author, date, source } = props;

  return (
    <div className="my-4">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageurl
              ? "https://cdn.cnn.com/cnnnext/dam/assets/220705233636-01-highland-park-illinois-shooting-july-fourth-parade-wednesday-restricted-super-tease.jpg"
              : imageurl
          }
          className="card-img-top"
          style={{ height: "30vh" }}
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">
            <strong>{title}...</strong>
          </h6>
          <small className="card-text">
            {!description
              ? "Whether you're looking for tech, home essentials or something else, there are a bunch of great Prime Day deals available right now for $25 or less."
              : description}
            ...
          </small>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            <code>Read More</code>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
