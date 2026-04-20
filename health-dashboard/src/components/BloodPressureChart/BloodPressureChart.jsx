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
        backgroundColor: "rgba(194,110,180,0.12)",
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
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
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: { size: 12, family: "Manrope" },
          color: "#072635",
          maxRotation: 0,
          align: "center",
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          font: { size: 12, family: "Manrope" },
          color: "#072635",
        },
        grid: { color: "rgba(0,0,0,0.06)" },
        border: {
          display: true,
          color: "#CBC8D4",
          width: 1,
        },
      },
    },
  };

  return (
    <div style={{ background: "#F4F0FD", borderRadius: 16 }}>
      {/* Custom legend showing live latest values */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      ></div>

      {/* Chart - wrapper div controls height, never the canvas */}
      <div style={{ position: "relative", height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BloodPressureChart;
