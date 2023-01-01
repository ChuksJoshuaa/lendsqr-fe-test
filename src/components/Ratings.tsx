import { RatingsData } from "../utils/ratingsData";

const Ratings = () => {
  return (
    <div className="row mt-1 ratings-container">
      {RatingsData.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card mb-3 pr-3">
            <div className="card-body shadow">
              <div className="d-flex flex-column align-items center">
                <div
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="ratings-container-icon p-1 fs-5 text-center"
                >
                  {item.icon}
                </div>
                <h5 className="card-title text-uppercase mt-2 fs-6">
                  {item.name}
                </h5>
                <h4 className="card-title text-capitalize fs-6 mt-1">
                  {item.rank}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
