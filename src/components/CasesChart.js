import { useEffect, useRef } from "react";
import Chart from "chart.js";
import { green, indigo, deepOrange, red } from "@material-ui/core/colors";

export default function CasesChart() {
  const chartRef = useRef();

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [722976, 433892, 275982, 13102],
            backgroundColor: [
              green[600],
              indigo[600],
              deepOrange[600],
              red[600],
            ],
          },
        ],
        labels: ["Confirmed cases", "Active Cases", "Recovered", "Death"],
      },
    });

    return () => {
      chart.destroy();
    };
  });

  return <canvas ref={chartRef} />;
}
