import Story from "./API/Story";
import "./Pages.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Homepage() {

  const [frontpageIDs,setFrontpageIDs] = useState([]);
  const [pageNumber,setPageNumber] = useState(0);

  console.log("FP USESTATE:" , frontpageIDs);

  let fp_ids =[];
  //getFrontpageIDs();
  useEffect(() => {
    getFrontpageIDs();
  },[]);


  async function getFrontpageIDs() // Gibt Array mit IDs zurück
  {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    console.log(response);

    const data = await response.json();
    console.log('Data: ${data} ' , data);

    //frontpageIDs.concat(data);
    setFrontpageIDs(data);
    fp_ids = data;
    console.log("In Async");


    //return data;
  }

  console.log("Nach Async");


  //const frontpageIDs = [];
  //getFrontpageIDs();

  




  return (
    <div>
      Homepage
      <Story id={1000}></Story>
      {frontpageIDs.map((id) => {
        return <Story key = {id} id={id}/>



      })}
    </div>
  );
}





