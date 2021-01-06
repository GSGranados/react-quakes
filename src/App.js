import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FormSearch from "./components/FormSearch/FormSearch";
import QuakeSummary from "./components/QuakeSummary/QuakeSummary";
import Swal from "sweetalert2";
class App extends Component {
  state = {
    quakes: [],
    quantity: 0,
  };

  render() {
    const getQuakesByDate = async (e) => {
      e.preventDefault();
      const initialDate = e.target.elements.initialDate.value;
      const endDate = e.target.elements.endDate.value;
      const minMagnitude = e.target.elements.minMagnitude.value;
      const maxMagnitude = e.target.elements.maxMagnitude.value;

      if (initialDate && endDate && minMagnitude && maxMagnitude) {
        if (initialDate < endDate && minMagnitude <= maxMagnitude) {
          console.log(initialDate);
          console.log(endDate);
          console.log(minMagnitude);
          console.log(maxMagnitude);

          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${initialDate}&endtime=${endDate}&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
            )
            .then((res) => {
              const quakes = res.data.features;
              this.setState({ quakes });
              console.log(quakes);
            });
          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${initialDate}&endtime=${endDate}&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
            )
            .then((res) => {
              const count = res.data;
              console.log(count);
              this.setState({ quantity: count });
            });
        } else {
          Swal.fire({
            title: "Something Must be wrong",
            text:
              "Please make sure the Initial Date is less than the End Date and the Min Magnitude is less than the Max Magnitude",
            icon: "error",
          });
        }
      } else if (initialDate && endDate) {
        if (initialDate < endDate) {
          console.log(initialDate);
          console.log(endDate);
          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${initialDate}&endtime=${endDate}`
            )
            .then((res) => {
              const quakes = res.data.features;
              this.setState({ quakes });
              console.log(quakes);
            });
          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${initialDate}&endtime=${endDate}`
            )
            .then((res) => {
              const count = res.data;
              console.log(count);
              this.setState({ quantity: count });
            });
        } else {
          Swal.fire({
            title: "Something Must be wrong",
            text: "Please make sure the Initial Date is less than the End Date",
            icon: "error",
          });
        }
      } else if (minMagnitude && maxMagnitude) {
        if (minMagnitude <= maxMagnitude) {
          console.log(minMagnitude);
          console.log(maxMagnitude);
          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
            )
            .then((res) => {
              const quakes = res.data.features;
              this.setState({ quakes });
              console.log(quakes);
            });
          await axios
            .get(
              `https://earthquake.usgs.gov/fdsnws/event/1/count?minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
            )
            .then((res) => {
              const count = res.data;
              console.log(count);
              this.setState({ quantity: count });
            });
        } else {
          Swal.fire({
            title: "Something Must be wrong",
            text: "Please make sure the Min Magnitude is less than the Max Magnitude",
            icon: "error",
          });
        }
      } else {
        return;
      }
    };

    return (
      <div className="App">
        <header className="App-header">Quake Searcher!</header>
        <FormSearch getQuakesByDate={getQuakesByDate}></FormSearch>
        <QuakeSummary
          quakes={this.state.quakes}
          quantity={this.state.quantity}
        ></QuakeSummary>
      </div>
    );
  }
}
export default App;
