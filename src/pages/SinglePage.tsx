import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, PersonalInformation } from "../components";
import Layout from "../components/Layout";
import { singleUserUrl } from "../utils/link";
import { UserProps } from "../utils/types";
import { UsersData } from "../utils/userData";

const SinglePage = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState<UserProps | any>({});
  const [selectedOption, setSelectedOption] = useState("General Details");

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
  }, [userId]);

  const navigate = useNavigate();

  if (Object.keys(singleData).length === 0)
    return (
      <Layout useClass={false}>
        <div className="single-page-container">
          <Loader />
        </div>
      </Layout>
    );

  return (
    <Layout useClass={false}>
      <div className="single-page-container">
        <h3 className="hold">
          <div className="d-flex mb-3" onClick={() => navigate("/home")}>
            <BsArrowLeft className="fs-6" />
            <h3 className="mx-3 fs-6">Back to Users</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap single-page-container-head">
            <h3 className="mt-1 text-capitalize">User details</h3>
            <div className="d-flex flex-wrap head-button">
              <button className="btn btn-outline-danger font-weight-bold head-button-key">
                Blacklist User
              </button>
              <button className="btn btn-outline-info mx-2 font-weight-bold">
                Activate User
              </button>
            </div>
          </div>

          <div className="single-page-container-body">
            <div className="main-body">
              <div className="main-body-head">
                <div className="main-body-head-profile">
                  <img
                    src={singleData?.profile?.avatar}
                    alt={singleData?.profile?.firstName}
                  />
                  <div className="name mx-4">
                    <h3 className="mt-4">
                      {singleData?.profile?.firstName}{" "}
                      {singleData?.profile?.lastName}
                    </h3>
                    <p>{singleData?.accountNumber}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="tier">
                    <h4 className="mt-4 text-capitalize">User's tier</h4>
                    <div className="tier-icons">
                      <AiFillStar className="icon" />
                      <AiOutlineStar className="icon" />
                      <AiOutlineStar className="icon" />
                    </div>
                  </div>
                  <div className="bank">
                    <h4>
                      <TbCurrencyNaira />
                      200,000.00
                    </h4>
                    <div className="d-flex flex-wrap">
                      <p className="mb-0">{singleData?.profile?.bvn}/</p>
                      <p>Providus Bank</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="body-shield">
              <div className="body-shield-body">
                {UsersData?.map((item) => (
                  <h3
                    key={item.id}
                    className={`${selectedOption === item.name ? "back" : ""}`}
                    onClick={() => setSelectedOption(item.name)}
                  >
                    {item.name}
                  </h3>
                ))}
              </div>
            </div>
          </div>

          <PersonalInformation />
        </h3>
      </div>
    </Layout>
  );
};

export default SinglePage;
