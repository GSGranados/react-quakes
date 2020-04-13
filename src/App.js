import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FormSearch from "./components/FormSearch/FormSearch";
import QuakeSummary from "./components/QuakeSummary/QuakeSummary";

class App extends Component {

  state ={
    quakes: [],
    quantity: 0,
  }

  render(){
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
        this.setState({quakes});
        console.log(quakes);
      });
      await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${initialDate}&endtime=${endDate}`).then(res=>{
        const count = res.data;
        console.log(count);
        this.setState({quantity: count});
      })
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">Quake Searcher!</header>
      <FormSearch getQuakesByDate={getQuakesByDate}></FormSearch>
      <QuakeSummary quakes={this.state.quakes} quantity={this.state.quantity}></QuakeSummary>
    </div>
  );
}
}
export default App;
