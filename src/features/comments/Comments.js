import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";
import { isLoadingComments, loadCommentsForArticleId, selectComments } from "./commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  // Declare additional selected data here.
  const comments = useSelector(selectComments);
  const commentsAreLoading = useSelector(isLoadingComments);
  const commentsForArticleId = article ? comments[article.id] : [];
  // Dispatch loadCommentsForArticleId with useEffect here.
  useEffect(() => {
    if (article) {
      dispatch(loadCommentsForArticleId(article.id));
    }
  }, [article, dispatch]);

  if (commentsAreLoading) return <div>Loading Comments</div>;
  if (!article) return null;

  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      <CommentList comments={commentsForArticleId} />
      <CommentForm articleId={article.id} />
    </div>
  );
};

export default Comments;
