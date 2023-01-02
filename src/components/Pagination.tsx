import { Dispatch } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAppSelector } from "../redux/hooks";

interface IProps {
  setPage: Dispatch<React.SetStateAction<number>>;
  page: React.SetStateAction<number>;
}

const Pagination = ({ setPage, page }: IProps) => {
  const { allUsers, loading } = useAppSelector((state) => state.user);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > allUsers.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = allUsers.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index: number) => {
    setPage(index);
  };

  return (
    <div className="d-flex justify-content-end">
      {!loading && (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center flex-wrap">
            <li className="page-item">
              <a className="page-link" onClick={prevPage}>
                <FiChevronLeft />
              </a>
            </li>
            {allUsers.map((item, index) => {
              return (
                <>
                  <li className="page-item" key={index}>
                    <a
                      className={`page-link ${
                        index === page ? "active-btn" : null
                      }`}
                      onClick={() => handlePage(index)}
                      key={index}
                    >
                      {index + 1}
                    </a>
                  </li>
                </>
              );
            })}
            <li className="page-item">
              <a className="page-link" onClick={nextPage}>
                <FiChevronRight />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;
