import { useState } from "react";
import { logoUrl } from "../utils/image";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { getUser } from "../utils/localStorage";
import { useAppDispatch } from "../redux/hooks";
import { openSidebar } from "../redux/features/users/userSlice";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  let avatar = getUser().avatar;
  let userName = getUser().name;

  const handleSearch = () => {
    if (!search) {
      alert("search input is empty");
      return;
    }
    console.log(search);
    setSearch("");
  };
  return (
    <div className="nav-container">
      <div className="nav-container-head">
        <div className="d-flex justify-content-between align-items-center">
          <img src={logoUrl} alt="title-logo" className="head-image px-3" />
          <div className="form-group nav-container-search">
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
        <div className="profile">
          <div className="d-flex justify-content-end profile-head">
            <a href="" className="mx-3 mt-2 font-weight-bold fs-7">
              Docs
            </a>
            <BsBell className="mt-2 profile-bell" />
            <img
              src={avatar}
              alt="avatar"
              className="mx-1"
              height="52px"
              width="52px"
            />
            <h4 className="mt-2 mx-1">{userName}</h4>
            <BiChevronDown className="mt-2 profile-bell font-weight-bold" />
          </div>
          <button
            className="profile-toggle btn btn-secondary p-0"
            type="button"
            onClick={() => dispatch(openSidebar(true))}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
