import Header from "../header";
import Footer from "../footer";
export default function MainLayout({ children,setMainComponent }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer setMainComponent={setMainComponent}/>
    </>
  );
}
