import React from "react";
import { Grid, Paper } from "@material-ui/core";
import './FormSearch.css'
const styles = {
    Paper: {
        paddingTop: 20,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20
    }
}

const FormSearch = (props) => {
  return (
    <div style={{marginTop: 10}}>
      <form onSubmit={props.getQuakesByDate}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={styles.Paper} elevation={4}>
              <label className="labelForm" htmlFor="initialDate">Intial Date:</label>
              <input className="inputForm" type="date" name="initialDate" id="initialDate"></input>
              <label className="labelForm" htmlFor="endDate">End Date:</label>
              <input
                type="date"
                placeholder="End Date"
                name="endDate"
                id="endDate"
                className="inputForm"
              ></input>
              <button className="buttonSearch" type="submit">
                Search for quakes
              </button>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormSearch;
