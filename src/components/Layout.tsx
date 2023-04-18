import Header from "./Header";
import Footer from "./Footer";
import DonateButton from "./DonateButton";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <button className=" fixed left-1/2 -translate-x-1/2 bottom-20 w-1/2 h-16 text-4xl lg:bottom-40 lg:right-20 lg:px-10 lg:py-4 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900  lg:text-3xl">Donate</button> */}
     <Footer />
      
    </>
  );
};

export default Layout;
