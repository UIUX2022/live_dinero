import Topbar from "../header/topbar";
import Header from "../header/mainHeader";
import Footer from "../footer";
const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
