import { Loader, Ratings, Table } from "../components";
import Layout from "../components/Layout";
import { useAppSelector } from "../redux/hooks";

const Dashboard = () => {
  const { loading } = useAppSelector((state) => state.user);
  return (
    <Layout useClass={true} changeHeight={true} checkPageType={true}>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <h1 className="hold"></h1>
          <h3>Users - Dashboard</h3>
          <Ratings />
          <Table />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
