import React, { Children, useState } from "react";

const BookingForm = (props) => {
  const { availableTimes, dispatchOnDateChange, submitData } = props;

  const [formConfigs] = useState({
    date: {
      min: new Date().toISOString().split("T")[0],
      errorMessage: "Please choose a valid date",
    },
    time: {
      default: availableTimes[0],
      errorMessage: "Please choose a valid time",
    },
    guests: {
      min: 1,
      max: 10,
      errorMessage: "Please enter a number between 1 and 10",
    },
    occasions: {
      data: ["Birthday", "Anniversary"],
      errorMessage: "Please choose a valid occasion",
    },
  });

  const [date, setDate] = useState(formConfigs.date.min);
  const [time, setTime] = useState(formConfigs.time.default);
  const [guests, setGuests] = useState(formConfigs.guests.min);
  const [occasion, setOccasion] = useState(formConfigs.occasions.data[0]);

  const isFieldsValid = () => {
    if (date !== "" || time !== "" || guests !== "" || occasion !== "") {
      return false;
    }
    return true;
  };

  const handleChange = (e, callback) => {
    const { value } = e.target;
    callback(value, e);
  };

  const handleDateChange = (e) => {
    handleChange(e, (value) => {
      setDate(value);
      dispatchOnDateChange(value);
    });
  };

  const handleTimeChange = (e) => {
    handleChange(e, (value) => setTime(value));
  };

  const handleGuestsChange = (e) => {
    handleChange(e, (value) => setGuests(value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e, (value) => setGuests(value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isFieldsValid()) {
      return;
    }
    submitData({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        min={formConfigs.date.min}
        value={date}
        required
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} required onChange={handleTimeChange}>
        {Children.toArray(availableTimes).map((time) => (
          <option value={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        id="guests"
        name="guests"
        value={guests}
        min={formConfigs.guests.min}
        max={formConfigs.guests.max}
        required
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        required
        onChange={handleOccasionChange}
      >
        {Children.toArray(formConfigs.occasions.data).map((_occasion) => (
          <option value={_occasion}>{_occasion}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
