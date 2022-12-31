import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error, Home, Login, SinglePage } from "./pages";
import { linkData } from "./utils/link";

function App() {
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
