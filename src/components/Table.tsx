import { SetStateAction, useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { FiWifi } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { NewUserProps, UserProps } from "../utils/types";
import { changeTime, selectCount } from "../utils/userData";
import Pagination from "./Pagination";

const Table = () => {
  const { allUsers, loading } = useAppSelector((state) => state.user);
  const [followers, setFollowers] = useState<UserProps[]>([]);
  const [page, setPage] = useState(0);
  const [itemSize, setItemSize] = useState(10);

  useEffect(() => {
    if (loading) return;
    setFollowers(allUsers[page] as any);
  }, [loading, page]);

  const myOption = () => {
    let myArray: NewUserProps[] = [];
    if (followers?.length > 0) {
      myArray = followers?.map((item) => ({
        orgName: item.orgName,
        id: item.id,
        phoneNumber: item.phoneNumber,
        userName: item.userName,
        email: item.email,
        dateJoined: changeTime(item.createdAt),
        status: "Active",
      }));
    }
    return myArray;
  };

  let options = myOption();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">Organization</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">userName</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">email</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">phoneNumber</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">DateJoined</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
                <th scope="col" className="text-nowrap">
                  <span className="table-title">status</span>
                  <span>
                    <FiWifi />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {options.slice(0, itemSize)?.map((item) => (
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
      <div className="mt-4 pagination-container">
        <div className="d-flex mb-4 pagination-container-select">
          <div>Showing</div>
          <div className="mx-2">
            <select
              className="select"
              onChange={(e) =>
                setItemSize((e.target as HTMLSelectElement).value as any)
              }
            >
              {selectCount?.map((item) => (
                <option
                  key={item.id}
                  value={item.value}
                  className="select-option"
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="">Out of {selectCount.length}</div>
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Table;
