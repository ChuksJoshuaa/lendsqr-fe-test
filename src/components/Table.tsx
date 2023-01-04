import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { FiWifi } from "react-icons/fi";
import { FilterModal, Modal } from "./index";
import { openModal } from "../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeTime, checkDateRange, colorChange } from "../utils/conversions";
import { NewUserProps, UserProps } from "../utils/types";
import { selectCount } from "../utils/userData";
import Pagination from "./Pagination";

interface TableProps {
  followers: UserProps[] | [];
  setFollowers: React.SetStateAction<UserProps[] | any>;
  itemSize: string;
  chosenUser: string;
  setItemSize: React.SetStateAction<string>;
}

interface IProps {
  checkPageType: boolean;
}
const Table = ({ checkPageType }: IProps) => {
  const { allUsers, loading, showModal } = useAppSelector(
    (state) => state.user
  );
  const [followers, setFollowers] = useState([] as TableProps["followers"]);
  const [page, setPage] = useState(0);
  const [itemSize, setItemSize] = useState("10" as TableProps["itemSize"]);
  const [chosenUser, setChosenUser] = useState("" as TableProps["chosenUser"]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    setFollowers(allUsers[page] as TableProps["setFollowers"]);
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
        status: checkDateRange(item.createdAt),
      }));
    }
    return myArray;
  };

  let options = myOption();

  return (
    <>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-striped">
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
              {options.slice(0, Number(itemSize))?.map((item) => (
                <tr key={item.id}>
                  <td className="date-joined">{item.orgName}</td>
                  <td className="date-joined">{item.userName}</td>
                  <td className="date-joined">{item.email}</td>
                  <td className="date-joined">{item.phoneNumber}</td>
                  <td className="date-joined">{item.dateJoined}</td>
                  <td className="date-joined">
                    <button
                      className={`${colorChange(item.status)} btn-sm`}
                      disabled
                      style={{ borderRadius: "20px 20px" }}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="date-joined">
                    <div
                      onClickCapture={() => {
                        dispatch(openModal(true));
                        setChosenUser(item.id);
                      }}
                      className="font-weight-bold"
                      style={{
                        color: "#222",
                        fontWeight: "bold",
                        fontSize: "1.5em",
                      }}
                    >
                      <AiOutlineMore />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!checkPageType && showModal ? <Modal chosenUser={chosenUser} /> : null}
        {!checkPageType && <FilterModal />}
      </div>

      <div className="mt-4 pagination-container">
        <div className="d-flex mb-4 pagination-container-select flex-wrap">
          <div className="select-text">Showing</div>
          <div className="mx-2">
            <select
              className="select"
              onChange={(e) =>
                setItemSize(
                  (e.target as HTMLSelectElement)
                    .value as TableProps["itemSize"]
                )
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
          <div className="select-text">Out of {selectCount.length}</div>
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Table;
