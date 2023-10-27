import { useEffect } from "react";
import { useState } from "react";
import AuthorItem from "./Author.jsx";

export default function FetchAsk(){

    // adresse festlegen - in GRO?BUCHTSTABEN soll nicht veränder werden
    const URL = "https://hn.algolia.com/api/v1/search";

    // speicherort der gezogenen Daten
    const [questions, setQuestions] = useState([]); 
    const [list, setList] = useState([]); 
    const [missingData, setMissingData] = useState(false); //hebel für fehlermeldungen
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() =>{
        setIsLoading(true) //erst mal ladestatus aktivieren

        //simulation von server verzögerung - weil langsamer server oder zu viele anfragen
        setTimeout(() => {

             //vanilla JS für Fetch API 
        fetch(URL)
        .then(response => {
            if(!response.ok){
                setMissingData(true);
                throw new Error("igendwas ist faul")
            }

            return response.json()

        })
        .then(data => {
             
            // setAuthors(data)    //hier definieren welche Daten aus dem Object gespeichert werden sollen
            console.log("Liste", data.hits);
            setQuestions(data.hits);
            setIsLoading(false);
        })
        .catch(error => console.log("domain fehler",error))
            
        }, 500);
       
        
        
    },[])

    const askList = questions.map((question) => {
        return <div key={question.story_id}>
            <h3>{question.title}</h3> 
        </div>
    })

    return <>
    <h1>liste</h1>
    {askList}
    </>
}
