/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./QuakeElement.css";
import { Grid, Paper } from "@material-ui/core";
import quakeReducer from "../../Utils/quakeReducer";
import classNames from "classnames";
import { Link } from "react-router-dom";
const styles = {
  Paper: {
    padding: 10,
  },
};

const QuakeElement = (props) => {
  console.log(props.location.state.quake.properties);
  return (
    <div className="QuakeElement">
      <header className="QuakeElement-header">
        Quake Element: {props.location.state.quake.id}{" "}
      </header>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={styles.Paper} elevation={4}>
            <span className="subTitle-item">EarthQuake Details</span>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="infoContainer">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper elevation={3}>
            <p className="magnitudeField">Magnitude:</p>
            <p
              className={classNames({
                "text-success": props.location.state.quake.properties.mag <= 4,
                "text-danger": props.location.state.quake.properties.mag > 4,
                magValue: props.location.state.quake.properties.mag,
              })}
            >
              {props.location.state.quake.properties.mag}
              <span className="complement">in Richter Scale</span>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper elevation={3}>
            <p className="placeField">
              {props.location.state.quake.properties.place}
            </p>
            <p className="whenField">
              {quakeReducer(props.location.state.quake)}
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <span className="typeField">Type (Earthquake, Tsunami, etc): </span>{" "}
            <span className="typeValue">
              {props.location.state.quake.properties.type.toUpperCase()}
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">
            <button className="btn btn-primary buttonGoback">Go back</button>
          </Link>
          <a href={props.location.state.quake.properties.url} target="_blank">
            <button className="btn btn-warning">More Info at USGS</button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuakeElement;
