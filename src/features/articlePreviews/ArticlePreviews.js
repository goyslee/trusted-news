import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleListItem from "../../components/ArticleListItem";
import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";
import { isLoading, loadAllPreviews, selectAllPreviews } from "./articlePreviewsSlice";

const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPreviews());
  }, [dispatch]);

  if (isLoadingPreviews) {
    return <div>loading state</div>;
  }

  return (
    <>
      <h2 className="section-title">All Articles</h2>
      <section className="articles-container">
        {articlePreviews.map((article) => (
          <div key={article.id} onClick={(e) => dispatch(loadCurrentArticle(article.id))}>
            <ArticleListItem article={article} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ArticlePreviews;
