import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../Utils/fetchData"

export default function Homepage() {

  const [frontpageItems,setFrontpageItems] = useState();
  const [pageNumber,setPageNumber] = useState(0);
  const [needFetch,setNeedFetch] = useState(true);

  useEffect(() => {
    if(needFetch)
    {
      fetchData(`http://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}&hitsPerPage=300`,handleFetchedData);
    }
  });



  function handleFetchedData(fetchedData)
  {
    const hits = fetchedData.hits;
    console.log('Data:' , fetchedData);
    console.log('Hits:' , hits);
    setNeedFetch(false);
    setFrontpageItems(hits);

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
  const Loading = <><span>Loading Data</span><br/><br/></>


  return (
    <div>
      Homepage {pageNumber}
      <br/>
      <br/>
        {needFetch ? Loading :Stories}
       <a name="more" onClick={() => {showMore()}}>More</a>
    </div>
  );
}





