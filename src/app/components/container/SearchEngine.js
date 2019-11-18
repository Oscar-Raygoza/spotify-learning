import React, { Component } from "react";

import "../styles/searchEngine.scss";

class SearchEngine extends Component {
  render() {
    return (
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input className="input" type="text" placeholder="Buscar..." />
      </section>
    );
  }
}

export default SearchEngine;
