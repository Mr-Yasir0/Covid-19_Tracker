import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(() => ({}));

export default function BasicGrid() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function globlaData() {
      const options = {
        method: "GET",
        url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline",
        headers: {
          "X-RapidAPI-Key":
            "fabadc432amsh0dc6d07dce63ff3p13d253jsn133d5d847166",
          "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response);
        setData(response.data[400]);
      } catch (error) {
        console.error(error);
      }
    }
    globlaData();
  }, []);

  console.log(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {Object.keys(data).map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Item>{item.toUpperCase()}</Item>
              <Item>{data[item]}</Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
