import Header from "./Header";
import Footer from "./Footer";


export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mb-12">{children}</main>
      <button className=" fixed right-10 opacity-0 lg:opacity-100 z-10 bottom-32 w-[13%] h-16 text-4xl lg:bottom-24 lg:right-10 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900  lg:text-3xl">Donate</button>
     <Footer />
      
    </div>
  );
};

export default Layout;
