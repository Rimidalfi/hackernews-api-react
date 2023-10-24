import Homepage2 from "../Pages/Homepage2";
import Homepage from "../Pages/Homepage";
import Links from "../Pages/Links";
import NewsFAQ from "../Pages/NewsFAQ";
import NewsGuidelines from "../Pages/NewsGuidelines";
import Security from "../Pages/Security";




export default function Footer({setMainComponent}) {
  const myStyle = {
    border: "2px solid red",
    backgroundColor: "DodgerBlue",};

    function switchToHP1()
    {
      setMainComponent(Homepage)
    }

    function switchToHP2()
    {
      setMainComponent(Homepage2)
    }

    function switchToLinks()
    {
      setMainComponent(Links)
    }


  return (
    <>


      <table width="100%" cellspacing="0" cellpadding="1"><tbody><tr><td bgcolor="#ff6600"></td></tr></tbody>
      </table>
      <div>
        <span>
        <ul>
          <a name="Guidelines" onClick={()=> setMainComponent(NewsGuidelines)}>Guidelines</a>
          <span> | </span> 
          <a name="FAQ" onClick={()=> setMainComponent(NewsFAQ)}>FAQ</a>
          <span> | </span> 
          <a name="Lists" onClick={switchToLinks}>Lists</a>
          <span> | </span> 
          <a name="API" href="https://github.com/HackerNews/API" onClick={switchToHP1}>API</a>
          <span> | </span> 
          <a name="Security" onClick={()=> setMainComponent(Security)}>Security</a>
          <span> | </span> 
          <a name="Legal" href="https://www.ycombinator.com/legal/" onClick={switchToLinks}>Legal</a>
          <span> | </span> 
          <a name="ApplytoYC" href="https://www.ycombinator.com/apply/" onClick={switchToLinks}>Apply to YC</a>
          <span> | </span> 
          <a name="Contact" href="mailto:hn@ycombinator.com" onClick={switchToLinks}>Contact</a>

        </ul>
        </span>
      <br>
      </br>
      <form method="get" action="//hn.algolia.com/">
        Search: 
      <input type="text" name="q" size="17" autocorrect="off" spellcheck="false" autocapitalize="off" autocomplete="false"/>

      </form>
      </div>


    </>
  );
}
