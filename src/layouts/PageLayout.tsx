import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const PageLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
