import { NativeSelect, FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { countries } from "../Api";

export default function CountrySearch({ handleChange }) {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCountriesList(await countries());
    };
    fetchCountries();
  }, [setCountriesList]);
  //   console.log(countriesList);

  return (
    <>
      <FormControl>
        <input
          placeholder="search here"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {/* <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option value="global">Global</option>
          {countriesList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </NativeSelect> */}
      </FormControl>
    </>
  );
}
