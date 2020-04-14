import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import classNames from "classnames";
import { QuakeKey } from "../QuakeKey/QuakeKey";
import "./QuakeSummary.css";
import quakeReducer from "../../Utils/quakeReducer";
import { Link } from "react-router-dom";
const styles = {
  Paper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
};

export default class QuakeSummary extends Component {
  state = {
    search: "",
  };

  updateSearch(event) {
    event.preventDefault();
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  render() {
    let filteredQuakes = this.props.quakes.filter((quake) => {
      return (
        quake.id.indexOf(this.state.search) !== -1 ||
        quake.properties.place
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        quakeReducer(quake)
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={4} style={styles.Paper}>
              {this.props.quakes == null && this.props.quantity === 0 ? (
                <p>
                  <i>Type down a range of dates</i>
                </p>
              ) : (
                <>
                  <div className="quantity" style={{ marginBottom: 7 }}>
                    <Paper style={styles.Paper} elevation={3}>
                      <QuakeKey></QuakeKey>
                      <span
                        className={classNames({
                          "text-success": this.props.quantity <= 400,
                          "text-danger": this.props.quantity > 400,
                        })}
                      >
                        It has been registered about: {this.props.quantity}{" "}
                        Earthquakes
                      </span>
                    </Paper>
                  </div>
                  <div>
                    <form>
                      <label className="labelInput" htmlFor="filterInput">
                        Filter Earthquakes:
                      </label>
                      <input
                        type="text"
                        name="filterInput"
                        id="filterInput"
                        className="inputFilter"
                        onChange={this.updateSearch.bind(this)}
                        value={this.state.search}
                        style={{
                          paddingBottom: 10,
                          marginBottom: 10,
                          marginLeft: 10,
                        }}
                        placeholder="ID, Location and Occured"
                      ></input>
                    </form>
                  </div>
                  <div className="table-responsive-sm">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Magnitude</th>
                          <th scope="col">Occured</th>
                          <th scope="col">Location</th>
                          <th scope="col">Xtra.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredQuakes.map((quake) => {
                          return (
                            <tr key={quake.id}>
                              <th scope="row">{quake.id}</th>
                              <td>{quake.properties.mag}</td>
                              <td>{quakeReducer(quake)}</td>
                              <td>{quake.properties.place}</td>
                              <td>
                                <Link to={{
                                  pathname: `/quake/${quake.id}`,
                                  state: {quake},
                                }}>
                                  <button className="btn btn-primary">
                                    Details
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
