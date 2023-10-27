import Header from "../Header";
import Footer from "../Footer";
export default function MainLayout({ children, setMainComponent }) {
  return (
    <>
      <Header setMainComponent={setMainComponent} />
      <main className="mainContainer">{children}</main>
      <hr className="horizontalLine" />
      <Footer setMainComponent={setMainComponent} />
    </>
  );
}
