import axios from "axios";

// let apiUrl = "https://coronavirus-smartable.p.rapidapsi.com/stats/v1/";
const options = {
  method: "GET",
  url: "https://coronavirus-smartable.p.rapidapi.com/stats/v1/global/",
  headers: {
    "X-RapidAPI-Key": "fabadc432amsh0dc6d07dce63ff3p13d253jsn133d5d847166",
    "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
  },
};

export const globleData = async (country) => {
  // let changeableUrl = `${apiUrl}/US/`; // Default URL for global data
  // if (country) {
  //   changeableUrl = `${apiUrl}/${country}`;
  // }
  try {
    const data = await axios.request(options);
    const confirmed = data.data.stats.totalConfirmedCases;
    const recovered = data.data.stats.totalRecoveredCases;
    const deaths = data.data.stats.totalDeaths;
    const lastUpdate = data.data.updatedDateTime;
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.error(error);
  }
};

export const history = async () => {
  try {
    const {
      data: {
        stats: { history },
      },
    } = await axios.request(options);

    const modifiedData = history.map((history) => ({
      confirmed: history.confirmed,
      deaths: history.deaths,
      recovered: history.recovered,
      date: history.date,
    }));

    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};

// export const countries = async () => {
//   try {
//     const {
//       data: {
//         stats: { breakdowns },
//       },
//     } = await axios.request(options);
//     return breakdowns.map((i) => i.location.countryOrRegion);
//   } catch (error) {
//     console.log(error);
//   }
// };
