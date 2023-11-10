import React from "react";
import ArticlePreviews from "../src/features/articlePreviews/ArticlePreviews";
import Comments from "../src/features/comments/Comments";
import CurrentArticle from "../src/features/currentArticle/CurrentArticle";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <div className="current-article">
          <CurrentArticle />
          <Comments />
        </div>
        <ArticlePreviews />
      </main>
    </div>
  );
}

export default App;
