import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "./Cards.module.css";

const easingFn = (t, b, c, d) => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading Data";
  }
  return (
    <React.Fragment>
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="Card_mod infected"
          >
            <CardContent>
              <div className="sup-text">Infected</div>
              <div className="value">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1.8}
                  easingFn={easingFn}
                  separator=","
                />
              </div>
              <div className="sub-text"> Number of Infected Cases </div>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="Card_mod recovered"
          >
            <CardContent>
              <div className="sup-text">Recovered</div>
              <div className="value">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1.8}
                  easingFn={easingFn}
                  separator=","
                />
              </div>
              <div className="sub-text"> Number of Recovered Cases </div>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="Card_mod deaths"
          >
            <CardContent>
              <div className="sup-text">Deceased</div>
              <div className="value">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={1.8}
                  easingFn={easingFn}
                  separator=","
                />
              </div>
              <div className="sub-text"> Number of Deceased Cases </div>
            </CardContent>
          </Grid>
        </Grid>
        <div className="lastUpdated_mod">
          <small>
            COVID-19 Tracking
            <br />
          </small>
        </div>
        <div className="lastUpdated_mod_1">
          Last Updated:
          <small>
            {new Date(lastUpdate)
              .toDateString()
              .substring(0, new Date(lastUpdate).toDateString().indexOf(" "))}
            {", "}
            {new Date(lastUpdate)
              .toDateString()
              .substring(
                new Date(lastUpdate).toDateString().indexOf(" "),
                new Date(lastUpdate).length
              )}
          </small>
          <br />
          {new Date(lastUpdate)
            .toTimeString()
            .substring(
              0,
              new Date(lastUpdate).toTimeString().indexOf("+")
            )}{" "}
          {new Date(lastUpdate)
            .toTimeString()
            .substring(
              new Date(lastUpdate).toTimeString().indexOf("+"),
              new Date(lastUpdate).length
            )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cards;
