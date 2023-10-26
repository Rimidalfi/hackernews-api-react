import Header from "../Header";
import Footer from "../Footer";
export default function MainLayout({ children, setMainComponent}) {


  console.log("Func in Main Layout", setMainComponent)
  console.log("Children in Main Layout", children)
  return (
    <>
      <Header setMainComponent={setMainComponent}/>
      <main>{children}</main>
      <Footer setMainComponent={setMainComponent}/>
    </>
  );
}
