import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date.substring(5, 11)),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#035aa6",
            borderWidth: 2,
            hitRadius: 2,
            pointRadius: 1,
            pointBackgroundColor: "#035aa6",
            backgroundColor: "rgba(192,192,192,0.15)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deceased",
            borderColor: "#fa163f",
            borderWidth: 2,
            hitRadius: 2,
            pointRadius: 1,
            backgroundColor: "rgba(250, 22, 63,0.3)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  if (country === "Taiwan") country = "Taiwan";
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(3, 90, 166, 0.3)",
              "rgba( 33, 191, 115, 0.3)",
              "rgba(250, 22, 63, 0.3)",
            ],
            borderColor: ["#035aa6", "#21bf73", "#fa163f"],
            borderWidth: 2,
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Statistics from ${country}` },
      }}
    />
  ) : null;
  return (
    <React.Fragment>
      <div className="container graph">{country ? barChart : lineChart}</div>
    </React.Fragment>
  );
};
export default Chart;
