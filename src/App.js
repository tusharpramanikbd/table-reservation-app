import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import Navbar from "./features/Navbar/Navbar";
import { routes } from "./constants/routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.RESERVATION} element={<ReservationPage />} />
      </Routes>
    </>
  );
}

export default App;
