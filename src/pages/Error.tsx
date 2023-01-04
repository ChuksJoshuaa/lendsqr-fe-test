import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout useClass={true} changeHeight={false} checkPageType={true}>
      <div className="page-100">
        <section className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="text-[10rem] text-gray-50">404</h1>
          <h3>Sorry, the page you tried cannot be found </h3>
          <Link to="/dashboard" className="error-btn">
            BACK TO DASHBOARD
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Error;
