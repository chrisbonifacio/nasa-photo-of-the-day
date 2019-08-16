import React from "react";

const DateButtons = props => {
  return (
    <>
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
    </>
  );
};

export default DateButtons;
