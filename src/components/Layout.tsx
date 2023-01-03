import { FC } from "react";
import { MobileSidebar, Navbar, Sidebar } from "./index";
import { useAppSelector } from "../redux/hooks";

interface LayoutProps {
  children: any;
  useClass: boolean;
}

const Layout: FC<LayoutProps> = ({ children, useClass }) => {
  const { isSidebarOpen } = useAppSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <div>{isSidebarOpen ? <MobileSidebar /> : null}</div>
      <div>
        <div className="main-container">
          <div>
            <Sidebar />
          </div>
          <div className={`${useClass ? "layout-container" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
