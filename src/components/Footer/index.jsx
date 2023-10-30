import Homepage2 from "../Pages/Homepage2";
import Homepage from "../Pages/Homepage";
import Lists from "../Pages/Lists";
import NewsFAQ from "../Pages/NewsFAQ";
import NewsGuidelines from "../Pages/NewsGuidelines";
import Security from "../Pages/Security";
import React from "react";
import AskList from "../Pages/AskList";
import FetchAsk from "../Pages/API/Ask";
//import "./Footer.css"
import "../Pages/Pages.css"





export default function Footer({setMainComponent}) {
  const myStyle = {
    border: "2px solid red",
    backgroundColor: "DodgerBlue",};


    function switchToAskList()
    {
      setMainComponent(<FetchAsk />)
    }

    function switchToHP2()
    {
      setMainComponent(Homepage2)
    }


    function switchToLists()
    {
      console.log("Called for Lists")
      const component = React.cloneElement(<Lists/>,{myName:"Tilo"}) //Add prop
      const test = <Lists/>;
      setMainComponent(test)
    }


  return (
    <>

      <div className="footerSpace">
        <ul className="footerContent">
          <a name="Guidelines" href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
          <span> | </span> 
          <a name="FAQ" href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
          <span> | </span> 
          <a name="Lists" onClick={()=> {switchToLists()}}>Lists</a>
          <span> | </span> 
          <a name="API" href="https://github.com/HackerNews/API">API</a>
          <span> | </span> 
          <a name="Security" href="https://news.ycombinator.com/security.html">Security</a>
          <span> | </span> 
          <a name="Legal" href="https://www.ycombinator.com/legal/" >Legal</a>
          <span> | </span> 
          <a name="ApplytoYC" href="https://www.ycombinator.com/apply/">Apply to YC</a>
          <span> | </span> 
          <a name="Contact" href="mailto:hn@ycombinator.com" >Contact</a>

        </ul>
        <div className="footerSearch">
          <form  method="get" action="//hn.algolia.com/">
            Search: 
          <input className = "footerInput" type="text" name="q" size="17"/>
          </form>
        </div>
        <br/>



      </div>


    </>
  );
}
