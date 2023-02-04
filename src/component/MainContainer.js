import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainContainer = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="m-0 p-0" onClick={() => setOpenSidebar(false)}>
      {/* For Desktop */}
      <Navbar open={openSidebar} setOpen={setOpenSidebar}></Navbar>
      {/* For Mobile */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar}></Sidebar>
      {/* Main Content */}
      <div className="mt-14 px-4 sm:px-8">{children}</div>
    </div>
  );
};

export default MainContainer;
