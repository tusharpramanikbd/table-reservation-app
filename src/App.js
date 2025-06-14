import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Navbar from "./features/Navbar/Navbar";
import { routes } from "./constants/routes";
import Footer from "./features/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-layout-container">
      <Navbar />
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.BOOKING} element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
