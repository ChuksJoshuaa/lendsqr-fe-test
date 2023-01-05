import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Ratings, Table } from "../components";
import Layout from "../components/Layout";
import { showError } from "../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUser } from "../utils/localStorage";
import { IProps } from "../utils/types";

const Home = () => {
  const { loading } = useAppSelector((state): IProps => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const CheckUser = () => {
    const userEmail = getUser()?.email;
    if (!userEmail) {
      navigate("/");
      dispatch(showError(true));
    }
  };

  useEffect(() => {
    CheckUser();
  });
  return (
    <Layout useClass={true} changeHeight={true} checkPageType={false}>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <h1 className="hold"></h1>
          <h3>Users - Home</h3>
          <Ratings />
          <Table checkPageType={false} />
        </div>
      )}
    </Layout>
  );
};

export default Home;
