import React from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import DatePicker from "./components/DatePicker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App() {
  return (
    <div className="App">
      {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker />
      </MuiPickersUtilsProvider>
      <PhotoCard />
    </div>
  );
}

export default App;
