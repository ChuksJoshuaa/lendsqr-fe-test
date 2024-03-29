import { FC } from "react";
import { MobileSidebar, Navbar, Sidebar } from "./index";
import { useAppSelector } from "../redux/hooks";
import { IProps, LayoutProps } from "../utils/types";

const Layout: FC<LayoutProps> = ({
  children,
  useClass,
  changeHeight,
  checkPageType,
}) => {
  const { isSidebarOpen } = useAppSelector((state): IProps => state.user);

  return (
    <>
      <Navbar />
      <div>
        {isSidebarOpen ? <MobileSidebar checkPageType={checkPageType} /> : null}
      </div>
      <div>
        <div className="main-container">
          <div>
            <Sidebar
              changeHeight={changeHeight}
              checkPageType={checkPageType}
            />
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
