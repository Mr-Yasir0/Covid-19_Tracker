import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { history } from "../Api";
import { Chart as ChartJS } from "chart.js/auto";

const Charts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const initialData = await history();
        setData(initialData);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: data.map(({ date }) => new Date(date).toDateString()),
        datasets: [
          {
            data: data.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: data.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: data.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

  return <div>{lineChart}</div>;
};

export default Charts;
