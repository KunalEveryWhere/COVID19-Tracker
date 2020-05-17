import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import "./CountryDropDown.module.css";

const CountryDropDown = ({ handleChangeOnCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <React.Fragment>
      <FormControl className="FormControl_mod">
        <NativeSelect
          defaultValue=""
          onChange={(eve) => handleChangeOnCountry(eve.target.value)}
          className="NativeSelect_mod"
        >
          <option value="" className="option_mod">
            Global
          </option>
          <option value="India" className="option_mod">
            India
          </option>
          {(fetchedCountries[fetchedCountries.indexOf("Taiwan*")] = "Taiwan")}
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country} className="option_mod">
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </React.Fragment>
  );
};
export default CountryDropDown;
