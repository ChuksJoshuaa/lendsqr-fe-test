import { Loader, Ratings, Table } from "../components";
import Layout from "../components/Layout";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const { loading } = useAppSelector((state) => state.user);
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
