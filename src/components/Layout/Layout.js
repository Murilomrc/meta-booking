import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
