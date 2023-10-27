import { useState, useEffect } from "react";

export default function Comments({ setMainComponent }) {
  const placeholderComm =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi provident perferendis veniam unde vitae aliquam earum sint. Suscipit molestias provident architecto, corrupti itaque et sint deserunt aut vitae, quaerat sit?";
  const placeholderLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const placeholderAuthor = "Jeremiah";
  const placeholderStory = "Tikun Olam";
  const [comments, setComments] = useState();
  const URL =
    "https://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i%3E5400&hitsPerPage=30";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log("API FETCH COMMENT:", comments);
      });
  }, []);

  return (
    <>
      <td>
        <a href="" className="voteArrow">
          <img src="" alt="" />
        </a>
      </td>
      <td>
        <div className="commHead">
          <a href="" className="commAuthor">
            {placeholderAuthor}
          </a>
          <span>
            <a href="" className="commAge">
              {placeholderStory}
            </a>
            <span>
              <a href="" className="commParent">
                parent
              </a>
              <a href="" className="commContext">
                context
              </a>
              <a href="" className="commNext">
                next
              </a>
              <br />
              <div>
                <span>
                  {placeholderComm}
                  <p>
                    <a href="">{placeholderLink}</a>
                  </p>
                </span>
              </div>
            </span>
          </span>
        </div>
      </td>
    </>
  );
}
