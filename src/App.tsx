import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error, Home, Login, SinglePage } from "./pages";
import { linkData, fetchUrl } from "./utils/link";
import { storeUser } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();

  const fetchUsers = async (): Promise<void> => {
    try {
      await axios
        .get(`${fetchUrl}`)
        .then(function (response) {
          let data = response.data;
          dispatch(storeUser(data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <link href={linkData} rel="stylesheet"></link>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotels/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
