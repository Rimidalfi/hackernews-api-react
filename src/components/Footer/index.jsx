import Homepage2 from "../Pages/Homepage2";
import Homepage from "../Pages/Homepage";
import Lists from "../Pages/Lists";
import NewsFAQ from "../Pages/NewsFAQ";
import NewsGuidelines from "../Pages/NewsGuidelines";
import Security from "../Pages/Security";
import React from "react";
import AskList from "../Pages/AskList";
import FetchAsk from "../Pages/API/Ask";





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
      setMainComponent(component)
    }


  return (
    <>

      <div>
        <span>
        <ul>
          <a name="Guidelines" onClick={()=> setMainComponent({page:<NewsGuidelines/>})}>Guidelines</a>
          <span> | </span> 
          <a name="FAQ" onClick={()=> setMainComponent({page:<NewsFAQ/>})}>FAQ</a>
          <span> | </span> 
          <a name="Lists" onClick={()=> {switchToLists()}}>Lists</a>
          <span> | </span> 
          <a name="API" onClick={switchToAskList}>API</a>
          <span> | </span> 
          <a name="Security" onClick={()=> setMainComponent({page:<Security/>})}>Security</a>
          <span> | </span> 
          <a name="Legal" href="https://www.ycombinator.com/legal/" onClick={switchToLists}>Legal</a>
          <span> | </span> 
          <a name="ApplytoYC" href="https://www.ycombinator.com/apply/" onClick={switchToLists}>Apply to YC</a>
          <span> | </span> 
          <a name="Contact" href="mailto:hn@ycombinator.com" onClick={switchToLists}>Contact</a>

        </ul>
        </span>
      <br>
      </br>
      <form method="get" action="//hn.algolia.com/">
        Search: 
      <input type="text" name="q" size="17"/>

      </form>
      </div>


    </>
  );
}
