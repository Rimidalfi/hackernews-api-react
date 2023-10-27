import CommentsForArticle from "./CommentsForArticle";
import React from "react";
import { useContext } from "react";
//import setMainCompContext from "../../../App";
//import setMainComponent from "../../Utils/setMainComponent";

export default function Story({item,setMainComponent})
{

    //const setMainComponent2 = useContext(setMainCompContext)

    function switchToComments()
    {
       // const component = React.cloneElement(<CommentsForArticle/>,{setMainComponent:setMainComponent}); //Add prop
        //const component = React.cloneElement(<CommentsForArticle/>,{item:item,setMainComponent:setMainComponent}) //Add prop
        const component = <CommentsForArticle item={item} setMainComponent={setMainComponent}/>
        setMainComponent(component);
    }


    return(
        <>
            <span>Story     
            </span>
            <div>
            </div>
            <div>Author {item.author}</div>
            <div>ID {item.story_id}</div>
            <div>Created {item.created_at}</div>
            <div>StoryText {item.story_text}</div>
            <div>Titel {item.title}</div>
            <div>Children: {item.children ? item.children.length : 0}</div>
            <div onClick={()=> switchToComments()}>Comments:{item.num_comments}</div>
            <div>URL:{item.url}</div>
            <div>Updated: {item.updated_at}</div>
            <div>Points: {item.points}</div>
            <br></br>
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