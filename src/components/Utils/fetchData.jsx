  export default async function fetchData(request, passDataFunc)
  {
    try{
      const response = await fetch(request);

      if(!response.ok)
      {
        console.log('Request String' , request);
        console.log('Response' , response);
        throw new Error('Fetch ging nicht, Response.ok ist false')
      }
      const data = await response.json();
      passDataFunc(data);
    }
    catch(err)
    {
      
      console.log('Request String' , request);
      //console.log('Response' , response);
      console.error("Whatnow FetchError:", err.message)

    }
  }