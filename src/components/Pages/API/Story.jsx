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

            <div className= "title">
            <a  href={item.url}>{item.title} </a> 
            {
                baseURL? <a  href={baseURL}> ({baseURL}) </a> : ""
            }
            </div>
            <span className = "nix_space"></span>
            <div className= "lower">
            <br/>
            <span ></span>
            <span >{item.points} Points by </span>
            <a href="#" onClick={()=> switchToAuthor()}>{item.author} </a>
            <a  href="#" onClick={()=> switchToComments()}>{calculateTimePassed(item.created_at)} hours ago</a>
            <a > | hide | </a>

            <a  name="comments" href="#" onClick={()=> switchToComments()}>{item.num_comments ? item.num_comments : 'discuss'} comments</a>
            <br/><br/>
            </div>
 




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