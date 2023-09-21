import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { globleData } from "../Api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Countup from "react-countup";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import "./Cards.css";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const initialData = await globleData();
        setData(initialData);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);
  if (!data.confirmed) {
    return (
      <div className="spin">
        <CircularProgress disableShrink />
      </div>
    );
  }
  return (
    <>
      <Box className="container">
        <Grid container spacing={4} className="card">
          <Grid item xs={12} md={4}>
            <Card className="infected">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Infected
                </Typography>
                <Typography variant="h5" component="div">
                  <Countup end={data.confirmed} />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of active cases of
                  <br />
                  {"COVID-19"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="recovered">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Recovered
                </Typography>
                <Typography variant="h5" component="div">
                  <Countup end={data.recovered} />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of recoveries from
                  <br />
                  {"COVID-19"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="deaths">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Deaths{" "}
                </Typography>
                <Typography variant="h5" component="div">
                  <Countup end={data.deaths} />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of deaths caused
                  <br />
                  {"COVID-19"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
