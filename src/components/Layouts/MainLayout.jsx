import Header from "../Header";
import Footer from "../Footer";
import Comments from "../Pages/API/Comments";
export default function MainLayout({ children, setMainComponent }) {
  return (
    <>
      <Header setMainComponent={setMainComponent} />
      <Comments className="mainContainer" />
      {/* <main className="mainContainer">{children}</main> */}
      <hr className="horizontalLine" />
      <Footer setMainComponent={setMainComponent} />
    </>
  );
}
