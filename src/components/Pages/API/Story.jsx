export default function Story({item})
{
    return(
        <>
            <span>Story
                
            </span>
            <div>{item.author}</div>
            <div>{item.story_id}</div>
            <div>{item.created_at}</div>
            <div>{item.story_text}</div>
            <div>{item.title}</div>
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