import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { FilterOrganizationProps, IProps } from "../utils/types";
import { statusData } from "../utils/userData";

const FilterModal = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [organization, setOrganization] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");

  const { loginUsers } = useAppSelector((state): IProps => state.user);

  const myOption = () => {
    let myArray: FilterOrganizationProps[] = [];
    if (loginUsers?.length > 0) {
      myArray = loginUsers?.map((item) => ({
        orgName: item.orgName,
        status: "Active",
      }));
    }
    return myArray;
  };

  let options = myOption();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (!organization || !user || !date || !status || !phone || !email) {
      alert("Please input all fields"); //Perform errors validations
      return;
    }

    console.log(organization, email, user, status, phone, date);
    alert("Reset done");
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();

    if (!organization || !user || !date || !status || !phone || !email) {
      alert("Please input all fields"); //Perform errors validations
      return;
    }

    console.log(organization, email, user, status, phone, date);
    alert("filter done");
  };

  return (
    <div className="filter-modal-container">
      <div className="p-3">
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Organization</label>

              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setOrganization(e.target.value)}
              >
                <option value="">Select</option>
                {options?.map((item, index) => (
                  <option value={item.orgName} key={index}>
                    {item.orgName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                id="User"
                className="form-control"
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                id="Date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                id="Phone Number"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                {statusData?.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex justify-content-center flex-wrap align-items-center">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleReset}
                style={{ paddingRight: "1.5em", paddingLeft: "1.5em" }}
              >
                Reset
              </button>
              <button
                className="btn btn-success mx-2"
                type="button"
                onClick={handleFilter}
                style={{ paddingRight: "1.5em", paddingLeft: "1.5em" }}
              >
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
