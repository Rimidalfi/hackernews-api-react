import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../Utils/fetchData"
import FetchAsk from "./API/Ask";

export default function Homepage2({setMainComponent}) {

  const [frontpageItems,setFrontpageItems] = useState();
  const [pageNumber,setPageNumber] = useState(0);
  const [needFetch,setNeedFetch] = useState(true);

  useEffect(() => {
    if(needFetch)
    {
      fetchData(`http://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}&hitsPerPage=30`,handleFetchedData);
    }
  });

  function handleFetchedData(fetchedData)
  {
    const hits = fetchedData.hits;
    //console.log('Data:' , fetchedData);
    console.log('Hits:' , hits);
    setNeedFetch(false);
    setFrontpageItems(hits);
  }

  function showMore()
  {
    setPageNumber((prev) => prev+1);
    //setFrontpageItems()
    setNeedFetch(true);
  }

  const Stories = 
  frontpageItems?.map((item,index) => {
    return (
      
      <div key={'storycontainer'+item.objectID}>
        <Story key={item.objectID} setMainComponent={setMainComponent} item={item} listNumber={pageNumber*30 + index +1}/>
      </div>
    )
  });

  const Loading = <><span>Loading Data</span><br/><br/></>

  return (
    <div>
      <br/>
        {needFetch ? Loading :Stories}
       <a name="more" onClick={() => {showMore()}}>More</a>
    </div>
  );
}