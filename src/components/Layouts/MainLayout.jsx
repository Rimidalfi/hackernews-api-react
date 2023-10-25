import Header from "../header";
import Footer from "../footer";
export default function MainLayout({ children, setMainComponent}) {
  return (
    <>
      <Header setMainComponent={setMainComponent}/>
      <main>{children}</main>
      <Footer setMainComponent={setMainComponent}/>
    </>
  );
}
