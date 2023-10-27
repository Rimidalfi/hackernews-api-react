import CommentsForArticle from "./CommentsForArticle";
import UserPage from "./UserPage";
import React from "react";
import { useContext } from "react";
import setMainCompContext from "../../../App";


export default function Story({listNumber,item,setMainComponent})
{

    const baseURL = extractBaseURL(item.url)

    function extractBaseURL(url)
    {
        if(url)
        {
            const url = new URL(item.url);
            const baseURL = `${url.protocol}//${url.hostname}`
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
        <div className="story_element">
            <span className="num_arrow">{listNumber} </span>


            <a className= "title" href={item.url}>{item.title} </a> 
            {
                baseURL? <a className= "url" href={baseURL}> ({baseURL}) </a> : ""
            }




            <br/>
            <span className="nix_space"></span>
            <span className="lower">{item.points} Points by </span>
            <a className="lower" href="#" onClick={()=> switchToAuthor()}>{item.author} </a>
            <a className="lower" href="#" onClick={()=> switchToComments()}>{calculateTimePassed(item.created_at)} hours ago</a>
            <a className="lower"> | hide | </a>

            <a className="lower" name="comments" href="#" onClick={()=> switchToComments()}>{item.num_comments ? item.num_comments : 'discuss'} comments</a>
            <br/><br/>
        </div>
 
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