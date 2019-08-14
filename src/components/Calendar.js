import React from "react";

const Calendar = props => {
  return (
    <div className="date-picker">
      <button
        onClick={() => {
          props.setPhotoDate("2012-01-06");
        }}
      >
        Change Date
      </button>
      <button
        onClick={() => {
          props.setPhotoDate("2015-01-06");
        }}
      >
        Change Date
      </button>
      <button
        onClick={() => {
          props.setPhotoDate("2012-03-14");
        }}
      >
        Change Date
      </button>
    </div>
  );
};

export default Calendar;
