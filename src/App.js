import React from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <div className="App">
      {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      <DatePicker />
      <PhotoCard />
    </div>
  );
}

export default App;
