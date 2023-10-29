import { useState, useEffect } from "react";
import CommentsStructure from "./CommentStructure";

export default function Comments({ setMainComponent }) {
  const [comments, setComments] = useState();
  const URL =
    "https://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i%3E5400&hitsPerPage=30";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.hits);
        console.log("API FETCH COMMENT:", comments);
      });
  }, []);
  const myComments = comments?.map((comment) => {
    return (
      <CommentsStructure
        author={comment.author}
        age={comment.created_at}
        parent={comment.story_title}
        commentText={comment.comment_text}
        link={comment.story_url !== undefined ? comment.story_url : "NO LINK"}
        key={Number(comment.objectID)}
      />
    );
  });

  return <>{myComments}</>;
}
