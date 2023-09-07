import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { globleData } from "./Api";

const Item = styled(Paper)(() => ({}));
const {
  stats: {
    newDeaths,
    totalConfirmedCases,
    totalRecoveredCases,
    totalDeaths,
    newlyConfirmedCases,
    newlyRecoveredCases,
  },
} = await globleData();

export default function Card() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={4}>
          <Item className="item">
            New Cases <div>{newlyConfirmedCases}</div>
          </Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item className="item">
            New Recovered Cases <div>{newlyRecoveredCases}</div>
          </Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item className="item">
            Total Cases <div>{totalConfirmedCases}</div>
          </Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item className="item">
            Total Recoveres <div>{totalRecoveredCases}</div>
          </Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item className="item">
            New Deaths <div>{newDeaths}</div>
          </Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item className="item">
            Total Deaths <div>{totalDeaths}</div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
