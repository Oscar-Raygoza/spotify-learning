import React, { Component, Fragment } from "react";

/**
 * Components
 */
import Header from "../../components/container/Header";
import SearchEngine from "../../components/container/SearchEngine";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SearchEngine />
      </Fragment>
    );
  }
}

export default Home;
