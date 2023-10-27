import { useState, useEffect } from "react";

const apiLink =
  "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

const [stories, setStories] = useState([]);

useEffect(() => {}, []);

function fetchData() {
  fetch();
}
