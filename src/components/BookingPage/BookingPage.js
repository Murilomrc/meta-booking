import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

import BookingForm from "../BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../utils/fakeAPI";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const BookingPage = (props) => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <section className="booking-page-wrapper">
      <h2>Reserve a table</h2>
      <div>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={handleSubmit}
        />
        <div></div>
      </div>
    </section>
  );
};

export default BookingPage;
