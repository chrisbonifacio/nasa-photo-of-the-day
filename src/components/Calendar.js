import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const Calendar = props => {
  function changeDate(date) {
    props.setPhotoDate(date.toISOString().split("T")[0]);
  }

  // prettier-ignore
  return (
    <>

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          autoOk
          orientation="portrait"
          variant="static"
          openTo="date"
          value={props.photoDate}
          onChange={changeDate}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default Calendar;
