import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
