import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./FormSearch.css";
const styles = {
  Paper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

const FormSearch = (props) => {
  return (
    <div style={{ marginTop: 10 }}>
      <form onSubmit={props.getQuakesByDate}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper style={styles.Paper} elevation={4}>
              <label className="labelForm" htmlFor="initialDate">
                Intial Date:
              </label>
              <input
                className="inputForm"
                type="date"
                name="initialDate"
                id="initialDate"
              ></input>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper style={styles.Paper} elevation={4}>
              <label className="labelForm" htmlFor="endDate">
                End Date:
              </label>
              <input
                type="date"
                placeholder="End Date"
                name="endDate"
                id="endDate"
                className="inputForm"
              ></input>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper style={styles.Paper} elevation={4}>
              <label className="labelForm" htmlFor="minMagnitude">
                Min Magnitude:
              </label>
              <input
                type="number"
                placeholder="0.0"
                name="minMagnitude"
                id="minMagnitude"
                className="inputForm"
              ></input>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper style={styles.Paper} elevation={4}>
              <label className="labelForm" htmlFor="maxMagnitude">
                Max Magnitude:
              </label>
              <input
                type="number"
                placeholder="0.0"
                name="maxMagnitude"
                id="maxMagnitude"
                className="inputForm"
              ></input>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <button className="buttonSearch" type="submit">
              Search for quakes
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormSearch;
