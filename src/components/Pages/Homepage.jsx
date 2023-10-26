import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Homepage() {

  const [frontpageItems,setFrontpageItems] = useState();
  const [pageNumber,setPageNumber] = useState(0);
  const [needFetch,setNeedFetch] = useState(true);

  console.log("FP USESTATE:" , frontpageItems);

  let fp_ids =[];
  useEffect(() => {
    if(needFetch)
    {
      getAlgoliaFrontpageIDs();
    }});


  async function getFrontpageIDs()
  {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    console.log('Response' , response);

    const data = await response.json();
    console.log('Data: ${data} ' , data);

    //frontpageIDs.concat(data);
    setFrontpageItems(data);
    fp_ids = data;
    console.log("In Async");

    //return data;
  }

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
    //frontpageIDs.concat(data);
    //setFrontpageIDs(data);
    //fp_ids = data;
    //console.log("In Async");

    //return data;


  }



  console.log("Nach Async");

  function showMore()
  {
    setPageNumber((prev) => prev+1);
    setNeedFetch(true);
  }




  return (
    <div>
      Homepage {pageNumber}
      <br/>
      <br/>
      {frontpageItems?.map((item,index) => {
        return (
          <span key={'storycontainer'+item.objectID}>
            <span>
              {pageNumber*30 + index +1}
            </span>

          <Story key={item.objectID} item={item}/>
          </span>
        )
      })}
       <a name="more" onClick={() => {showMore()}}>More</a>
    </div>
  );
}





