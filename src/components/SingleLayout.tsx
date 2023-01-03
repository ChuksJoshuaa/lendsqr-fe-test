import { FC } from "react";
import { MobileSidebar, Navbar, Sidebar } from "./index";
import { useAppSelector } from "../redux/hooks";

interface SingleLayoutProps {
  children: any;
}

const SingleLayout: FC<SingleLayoutProps> = ({ children }) => {
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
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SingleLayout;
