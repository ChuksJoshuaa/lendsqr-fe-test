import { useState } from "react";
import { BiChevronDown, BiShoppingBag } from "react-icons/bi";
import { BsHouseDoorFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { openModal, openSidebar } from "../redux/features/users/userSlice";
import { activeLink, normalLink } from "../utils/link";
import { links } from "../utils/sidebarData";
import { SidebarProps } from "../utils/types";

const Sidebar: React.FC<SidebarProps> = ({ changeHeight, checkPageType }) => {
  const [selectedOption, setSelectedOption] = useState(
    `${checkPageType ? "dashboard" : "Users"}`
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="sidebar-container show-sidebar"
      style={{ height: `${changeHeight === true ? "1115px" : "1350px"}` }}
    >
      <div className="pt-3">
        <div className="sidebar-container-head">
          <BiShoppingBag className="bag" />
          <h3 className="mx-2">Switch Organization</h3>
          <BiChevronDown className=" chevron-down" />
        </div>
        <div
          className={`sidebar-container-head mt-3 ${
            selectedOption === "dashboard" ? "dashboard" : ""
          }`}
          onClickCapture={() => {
            setSelectedOption("dashboard");
            navigate("/dashboard");
            dispatch(openModal(false));
          }}
        >
          <BsHouseDoorFill className="dash" />
          <h3 className="mx-2 dash">Dashboard</h3>
        </div>
      </div>

      <div className="mt-3 sidebar-container-body">
        <div className="sidebar-container-body-main">
          {links.map((item, index) => (
            <div key={index}>
              <p className="mt-4 text-uppercase">{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={`${link.name === "Users" ? "/home" : ""}`}
                  key={link.name}
                  onClickCapture={() => {
                    setSelectedOption(link.name);
                    dispatch(openSidebar(false));
                    dispatch(openModal(false));
                  }}
                  style={() => ({
                    backgroundColor:
                      link.name === selectedOption
                        ? "rgba(3, 201, 215, 0.1)"
                        : "",
                    borderLeft:
                      link.name === selectedOption
                        ? "3px solid rgb(3, 201, 215)"
                        : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span
                    className={`span-link ${
                      selectedOption === link.name ? "option" : ""
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`span-link ${
                      selectedOption === link.name ? "option" : ""
                    }`}
                  >
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
