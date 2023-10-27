import CommentsForArticle from "./CommentsForArticle";
import UserPage from "./UserPage";
import React from "react";
import { useContext } from "react";
import setMainCompContext from "../../../App";


export default function Story({item,setMainComponent})
{

    console.log("Title",item.title)
    //const setMainComponent2 = useContext(setMainCompContext)


    //const created_at_MS = Date.parse(item.created_at);

     

    //console.log("URL:", item.url);
    //const url = new URL(item.url);
    //const baseUrl = '{url.protocol}//${{url.hostname}'
    //const baseUrl="fake";

    const baseURL = extractBaseURL(item.url)

    function extractBaseURL(url)
    {
        if(url)
        {
            const url = new URL(item.url);
            const baseURL = '{url.protocol}//${{url.hostname}'
            return baseURL;
        }

        return null;

    }


    function calculateTimePassed(timeSource)
    {
        const passedMSDate = new Date()
        passedMSDate.setTime(Date.now() - Date.parse(timeSource))
    
        return passedMSDate.getHours();
    }

    function switchToComments()
    {
        const component = <CommentsForArticle item={item} setMainComponent={setMainComponent}/>
        setMainComponent(component);
    }
    function switchToAuthor()
    {
        const component = <UserPage item={item} setMainComponent={setMainComponent}/>
        setMainComponent(component);
    }


    return(
        <>

            <a href={item.url}>Titel {item.title} </a> 
            {
                baseURL? <a href={baseURL}>({item.url}) </a> : ""
            }

            <br/>
            <span>{item.points} Points by </span>
            <a href="#" onClick={()=> switchToAuthor()}>{item.author} </a>
            <a href="#" onClick={()=> switchToComments()}>{calculateTimePassed(item.created_at)} | hide | </a>

            <a name="comments" href="#" onClick={()=> switchToComments()}>{item.num_comments ? item.num_comments : 'discuss'} comments</a>
            <br/><br/>
            {/*<div>Children: {item.children ? item.children.length : 0}</div>*/}
        </>

    );


    async function fetchStuff() {
        const myPromise = await fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");
        console.log(myPromise);
        const myData = await myPromise.json();
        console.log("myData" + JSON.stringify(myData));
        console.log("myData" + myData.title);
      //renderUsers(myData);
    }
}