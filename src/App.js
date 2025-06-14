import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Navbar from "./features/Navbar/Navbar";
import { routes } from "./constants/routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.BOOKING} element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
