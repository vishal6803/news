import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

import async from "hbs/lib/async";
import Spiner from "./Spiner";
function News(props) {
  const { country, category, apiKey, pageSize } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);

  useEffect(() => {

    setPage(page + 1);
    updateNews();
    document.title = `${category}- NewsApp`;
  }, []);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoding(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalresults(parseData.totalResults);
    setLoding(false);
  };
  // used while scrooling on the next page in infinite scroll
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    setLoding(true);

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalresults(parseData.totalResults);
    setLoding(false);
  };

  return (
    <div className="container mt-5">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container mt-5">
          <div className="row mb-5">
            {/* {this.state.loading && <Spiner />} */}

            {articles?.map((e, index) => {
              const uniqueKey = index;
              return (
                <div className="col-md-4 col-sm-6 mb-5" key={uniqueKey}>
                  <Newsitem
                    title={e.title}
                    description={e.description}
                    urlToImage={
                      !e.urlToImage
                        ? "https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg"
                        : e.urlToImage
                    }
                    url={e.url}
                    author={!e.author ? "Unknown" : e.author}
                    publishedAt={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
