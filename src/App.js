import React from "react";
import axios from "axios";
import "./App.css";
import FormSearch from "./components/FormSearch/FormSearch";

function App() {
  const getQuakesByDate = async (e) => {
    e.preventDefault();
    const initialDate = e.target.elements.initialDate.value;
    const endDate = e.target.elements.endDate.value;
    if (initialDate && endDate) {
      console.log(initialDate);
      console.log(endDate);
       await axios.get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${initialDate}&endtime=${endDate}`
      ).then(res=> {
        const quakes = res.data.features;
        console.log(quakes);
      });
      await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${initialDate}&endtime=${endDate}`).then(res=>{
        const count = res.data;
        console.log(count);
      })
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">Quake Searcher!</header>
      <FormSearch getQuakesByDate={getQuakesByDate}></FormSearch>
    </div>
  );
}

export default App;
