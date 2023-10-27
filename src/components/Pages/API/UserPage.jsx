import { useEffect } from "react"
import fetchData from "../../Utils/fetchData"
import { useState } from "react";



export default function UserPage({username})
{
    const [user,setUser] = useState();



    useEffect(()=>{

        fetchData(`http://hn.algolia.com/api/v1/users/${username}`,handleFetchedData);


    },[])

    function handleFetchedData(fetchedData)
    {
        console.log("UserData:" , fetchedData)
        setUser(fetchedData)

    }




    return(
        <>
            <br/>
            <div>user:    {username}</div>
            <div>karma:   {user ? user.karma : "..."}</div>
            <div>about:   {user ? user.about : "..."}</div>
            <br/>
        </>

    )
}