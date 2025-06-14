import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import Navbar from "./features/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </>
  );
}

export default App;
