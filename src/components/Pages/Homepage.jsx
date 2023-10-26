import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Homepage() {

  const [frontpageItems,setFrontpageItems] = useState();
  const [pageNumber,setPageNumber] = useState(0);
  const [needFetch,setNeedFetch] = useState(true);

  useEffect(() => {
    if(needFetch)
    {
      getAlgoliaFrontpageIDs();
    }});

  async function getAlgoliaFrontpageIDs()
  {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}&hitsPerPage=30`);
    console.log('Response' , response);

    const data = await response.json();
    const hits = data.hits;
    console.log('Data: ${data} ' , data);
    console.log('Hits: ${data} ' , hits);
    setFrontpageItems(hits);
    setNeedFetch(false);

  }

  function showMore()
  {
    setPageNumber((prev) => prev+1);
    setNeedFetch(true);
  }

  const Stories = 
  frontpageItems?.map((item,index) => {
    return (
      <span key={'storycontainer'+item.objectID}>
        <span>
          {pageNumber*30 + index +1}
        </span>

      <Story key={item.objectID} item={item}/>
      </span>
    )
  });


  return (
    <div>
      Homepage {pageNumber}
      <br/>
      <br/>
        {Stories}
       <a name="more" onClick={() => {showMore()}}>More</a>
    </div>
  );
}





