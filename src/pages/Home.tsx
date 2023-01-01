import { Ratings } from "../components";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="p-5">
        <h1 className="hold"></h1>
        <h3>Users</h3>
        <Ratings />
      </div>
    </Layout>
  );
};

export default Home;
