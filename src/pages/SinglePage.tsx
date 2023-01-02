import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { singleUserUrl } from "../utils/link";

const SinglePage = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const userId = Number(id);

  const fetchUser = async (): Promise<void> => {
    try {
      await axios
        .get(`${singleUserUrl(userId)}`)
        .then(function (response) {
          let data = response.data;
          setSingleData(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  if (singleData.length === 0) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <div className="p-5">
        <h3 className="hold">
          <div className="d-flex mb-3" onClick={() => navigate("/home")}>
            <BsArrowLeft className="fs-6" />
            <h3 className="mx-3 fs-6">Back to Users</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h3>User details</h3>
            <div className="d-flex flex-wrap">
              <button className="btn btn-outline-danger mx-2 font-weight-bold">
                Blacklist User
              </button>
              <button className="btn btn-outline-info font-weight-bold">
                Activate User
              </button>
            </div>
          </div>
        </h3>
      </div>
    </Layout>
  );
};

export default SinglePage;
