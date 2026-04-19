import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const BloodPressureChart = ({ history }) => {
  // Sort oldest → newest so the chart reads left-to-right chronologically
  const lastSixMonths = useMemo(() => {
    return [...history]
      .sort(
        (a, b) =>
          new Date(`${a.month} 1, ${a.year}`) -
          new Date(`${b.month} 1, ${b.year}`),
      )
      .slice(-6);
  }, [history]);

  const latest = lastSixMonths[lastSixMonths.length - 1];

  const data = {
    labels: lastSixMonths.map(
      (item) => `${item.month.substring(0, 3)}, ${item.year}`,
    ),
    datasets: [
      {
        label: "Systolic",
        data: lastSixMonths.map((item) => item.blood_pressure.systolic.value),
        borderColor: "#C26EB4",
        backgroundColor: "rgba(194,110,180,0.12)", // subtle fill under line
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#fff", // white ring around point
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 2,
        tension: 0.4,
        fill: true, // fill area below line
      },
      {
        label: "Diastolic",
        data: lastSixMonths.map((item) => item.blood_pressure.diastolic.value),
        borderColor: "#7E6CAB",
        backgroundColor: "rgba(126,108,171,0.08)",
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index", // tooltip shows both values at the same x
      intersect: false,
    },
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { font: { size: 11 }, color: "#888", maxRotation: 0 },
      },
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20, font: { size: 11 }, color: "#888" },
        grid: { color: "rgba(0,0,0,0.06)" },
        border: { display: false },
      },
    },
  };

  return (
    <div style={{ background: "#F4F0FD", borderRadius: 16, padding: 24 }}>
      {/* Custom legend showing live latest values */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      ></div>

      {/* Chart — wrapper div controls height, never the canvas */}
      <div style={{ position: "relative", height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BloodPressureChart;
