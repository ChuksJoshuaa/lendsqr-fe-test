import { FC } from "react";
import { Navbar, Sidebar } from "./index";
import { useAppSelector } from "../redux/hooks";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useAppSelector((state) => state.user);

  return (
    <>
      <Navbar />
      {/* <div>{isSidebarOpen ? <Sidebar /> : null}</div> */}
      <div>
        <div className="main-container">
          <div>
            <Sidebar />
          </div>
          <div className="layout-container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
