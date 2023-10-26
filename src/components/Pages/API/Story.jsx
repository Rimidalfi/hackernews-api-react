export default function Story({item})
{
    return(
        <>
            <span>Story
                
            </span>
            <div>


            </div>
            <div>{item.author}</div>
            <div>{item.story_id}</div>
            <div>{item.created_at}</div>
            <div>{item.story_text}</div>
            <div>{item.title}</div>
            <div>Children: {item.children ? item.children.length : 0}</div>
            <div>Comments:{item.num_comments}</div>
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