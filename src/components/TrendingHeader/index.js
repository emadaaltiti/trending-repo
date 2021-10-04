import React from "react";

import "./style.scss";

function TrendingHeader(selectedComponentName) {
  return (
    <section className="Trending-header">
      <h1>Trending</h1>
      {selectedComponentName === "Repositories" ? (
        <p>See what the GitHub community is most excited about today.</p>
      ) : (
        <p>These are the developers building the hot tools today.</p>
      )}
    </section>
  );
}

export default TrendingHeader;
