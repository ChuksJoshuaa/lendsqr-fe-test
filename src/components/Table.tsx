import { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { FiWifi } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { NewUserProps } from "../utils/types";
import { changeTime } from "../utils/userData";
import Pagination from "./Pagination";

const Table = () => {
  const { allUsers } = useAppSelector((state) => state.user);
  const [itemSize, setItemSize] = useState(10);

  const myOption = () => {
    let myArray: NewUserProps[] = [];
    if (allUsers) {
      myArray = allUsers?.map((item) => ({
        orgName: item.orgName,
        id: item.id,
        phoneNumber: item.phoneNumber,
        userName: item.userName,
        email: item.email,
        dateJoined: changeTime(item.createdAt),
        status: "Active" || "Unactive",
      }));
    }
    return myArray;
  };

  let options = myOption();
  console.log(options);

  return (
    <>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="table-title">Organization</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th>
                  <span className="table-title">userName</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col">
                  <span className="table-title">email</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col">
                  <span className="table-title">phoneNumber</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col">
                  <span className="table-title">DateJoined</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="table-head">
                  <span className="table-title">status</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {options.slice(0, 10)?.map((item) => (
                <tr key={item.id}>
                  <td className="date-joined">{item.orgName}</td>
                  <td className="date-joined">{item.userName}</td>
                  <td className="date-joined">{item.email}</td>
                  <td className="date-joined">{item.phoneNumber}</td>
                  <td className="date-joined">{item.dateJoined}</td>
                  <td className="date-joined">{item.status}</td>
                  <td className="date-joined">
                    <Link to={`/single-user/${item.id}`}>
                      <AiOutlineMore />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div></div>
        <Pagination options={options} />
      </div>
    </>
  );
};

export default Table;
