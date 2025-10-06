import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
    </>
  );
};

export default Layout;
