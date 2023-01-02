import { logoUrl } from "../utils/image";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openSidebar } from "../redux/features/users/userSlice";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiShoppingBag, BiChevronDown } from "react-icons/bi";
import { BsBell, BsHouseDoorFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { activeLink, normalLink } from "../utils/link";
import { links } from "../utils/sidebarData";
import { getUser } from "../utils/localStorage";

const MobileSidebar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("Users");
  const navigate = useNavigate();
  let avatar = getUser()?.avatar;
  let userName = getUser()?.name;
  let id = getUser()?.id;
  const userId = Number(id);

  const handleSearch = () => {
    if (!search) {
      alert("search input is empty");
      return;
    }

    dispatch(openSidebar(false));
    console.log(search);

    setSearch("");
  };
  return (
    <div className="mobile-sidebar-container">
      <div className="mt-3 d-flex justify-content-between head">
        <img
          src={logoUrl}
          alt="title-logo"
          className="px-2"
          onClick={() => {
            navigate("/home");
            dispatch(openSidebar(false));
          }}
        />
        <button
          className="profile-toggle btn btn-secondary p-3"
          type="button"
          onClick={() => dispatch(openSidebar(false))}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div>
        <div className="form-group nav-container-search px-3">
          <div className="input-group">
            <input
              type="text"
              id="search"
              placeholder="search anything"
              className="form-control mb-4 search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-link search-button"
              onClick={handleSearch}
              type="button"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div
        className="mx-4 mt-4 profile-icon align-items-center"
        onClick={() => {
          navigate(`/single-user/${userId}`);
          dispatch(openSidebar(false));
        }}
      >
        <img
          src={avatar}
          alt="avatar"
          className="mx-1"
          height="52px"
          width="52px"
        />
        <h4 className="mt-3 mx-1">{userName}</h4>
        <BsBell className="mt-2 fs-4" />
      </div>

      <div className="container">
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
            onClick={() => {
              setSelectedOption("dashboard");
              dispatch(openSidebar(false));
              navigate("/home");
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
                    onClick={() => {
                      setSelectedOption(link.name);
                      dispatch(openSidebar(false));
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
    </div>
  );
};

export default MobileSidebar;
