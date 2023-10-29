export default function CommentsStructure({
  author,
  age,
  parent,
  commentText,
  link,
  key,
}) {
  return (
    <>
      <table className="commentTable" key={key}>
        <tbody className="commentBody">
          <tr className="tableRow1">
            <td>
              <a href="" className="voteArrow">
                <img src="" alt="" />
              </a>
            </td>
            <td>
              <div className="commHead">
                <span className="commCon">
                  <a href="" className="commAuthor">
                    {author}
                  </a>
                  |
                  <a href="" className="commAge">
                    {age}
                  </a>
                  |
                  <a href="" className="commParent">
                    parent
                  </a>
                  |
                  <a href="" className="commContext">
                    context
                  </a>
                  |
                  <a href="" className="commNext">
                    next
                  </a>
                  |
                  <a href="" className="commOn">
                    on: {parent}
                  </a>
                  <br />
                </span>
              </div>
            </td>
          </tr>
          <tr className="tableRow2">
            <td>
              <span>
                {commentText}
                <p className="commLink">
                  <a href="">{link}</a>
                </p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
