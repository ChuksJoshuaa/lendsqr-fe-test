import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error, Home, Login, SinglePage } from "./pages";
import {
  Loader,
  saveUsers,
  storeUsers,
} from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hooks";
import paginate from "./utils/conversions";
import { fetchUrl, linkData } from "./utils/link";

function App() {
  const dispatch = useAppDispatch();

  const fetchUsers = async (): Promise<void> => {
    try {
      await axios
        .get(`${fetchUrl}`)
        .then(function (response) {
          let data = response.data;
          dispatch(saveUsers(data));
          let newData = paginate(data);
          dispatch(storeUsers(newData));
          dispatch(Loader(false));
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

          <Route path="/single-user/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
