import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Homepage() {

  const [frontpageIDs,setFrontpageIDs] = useState([]);
  const [pageNumber,setPageNumber] = useState(0);

  console.log("FP USESTATE:" , frontpageIDs);

  let fp_ids =[];
  useEffect(() => {
    getFrontpageIDs();
  },[]);


  async function getFrontpageIDs()
  {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    console.log('Response' , response);

    const data = await response.json();
    console.log('Data: ${data} ' , data);

    //frontpageIDs.concat(data);
    setFrontpageIDs(data);
    fp_ids = data;
    console.log("In Async");

    //return data;
  }

  console.log("Nach Async");

  function showMore()
  {
    setPageNumber((prev) => prev+1);
  }




  return (
    <div>
      Homepage
      <br/>
      <br/>
      {frontpageIDs.slice(pageNumber*30,pageNumber*30+30).map((id,index) => {
        return (
          <span key={'storycontainer'+id}>
            <span>
              {pageNumber*30 + index +1}
            </span>

          <Story key={id} id={id}/>
          </span>
        )
      })}
       <a name="more" onClick={() => {showMore()}}>More</a>
    </div>
  );
}





