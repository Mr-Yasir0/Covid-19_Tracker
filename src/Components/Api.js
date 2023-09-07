import axios from "axios";
import { useEffect } from "react";

export const globleData = async () => {
  const options = {
    method: "GET",
    url: "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
    headers: {
      "X-RapidAPI-Key": "fabadc432amsh0dc6d07dce63ff3p13d253jsn133d5d847166",
      "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
    },
  };

  try {
    const data = await axios.request(options);
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
