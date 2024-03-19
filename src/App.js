import { Route, Routes } from "react-router-dom";

import "./reset.css";
import "./App.css";

import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
