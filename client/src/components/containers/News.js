import React, { Component } from "react";
import NewsItemListing from "../presentation/NewsItemListing";

class News extends Component {
  render() {
    return (
      <div>
        <h2>News Items</h2>
        <ul>
          <li>
            <NewsItemListing id="1" title="aaa" teaser="aaaaaa" />
          </li>
          <li>
            <NewsItemListing id="2" title="bbb" teaser="bbbbbb" />
          </li>
        </ul>
      </div>
    );
  }
}

export default News;
