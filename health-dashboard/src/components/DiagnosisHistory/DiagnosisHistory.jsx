import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ data }) => {
  if (!data) return null;
  const latest = data[0];

  return (
    <div className="diagnosis-container card">
      <h3 className="section-title">Diagnosis History</h3>

      {/* ── Blood pressure row ── */}
      <div className="chart-section-wrapper">
        {/* Left: chart */}
        <div className="chart-left">
          <div className="chart-header">
            <h4 className="chart-title">Blood Pressure</h4>
            <div className="chart-period">
              <span className="period-label">Last 6 months</span>
              <img
                src="/src/assets/expand_more.svg"
                alt="expand"
                className="expand-icon"
              />
            </div>
          </div>
          <div className="chart-canvas-wrapper">
            <BloodPressureChart history={data} />
          </div>
        </div>

        {/* Divider */}
        <div className="chart-divider" />

        {/* Right: systolic + diastolic stats */}
        <div className="chart-right-stats">
          <div className="stat-item">
            <div className="stat-label">
              <span className="stat-dot systolic-dot" />
              Systolic
            </div>
            <div className="stat-value">
              {latest.blood_pressure.systolic.value}
            </div>
            <div className="stat-levels">
              {latest.blood_pressure.systolic.levels}
            </div>
          </div>

          <hr className="stat-divider" />

          <div className="stat-item">
            <div className="stat-label">
              <span className="stat-dot diastolic-dot" />
              Diastolic
            </div>
            <div className="stat-value">
              {latest.blood_pressure.diastolic.value}
            </div>
            <div className="stat-levels">
              {latest.blood_pressure.diastolic.levels}
            </div>
          </div>
        </div>
      </div>

      {/* ── Metric cards row ── */}
      <div className="metrics-grid">
        <div className="metric-card respiratory">
          <img
            src="/src/assets/respiratory_rate.svg"
            alt="respiratory rate"
            className="metric-icon"
          />
          <p className="metric-name">Respiratory Rate</p>
          <p className="metric-value">{latest.respiratory_rate.value} bpm</p>
          <p className="metric-status">{latest.respiratory_rate.levels}</p>
        </div>

        <div className="metric-card temperature">
          <img
            src="/src/assets/temperature.svg"
            alt="temperature"
            className="metric-icon"
          />
          <p className="metric-name">Temperature</p>
          <p className="metric-value">{latest.temperature.value}°F</p>
          <p className="metric-status">{latest.temperature.levels}</p>
        </div>

        <div className="metric-card heart-rate">
          <img
            src="/src/assets/heart_rate.svg"
            alt="heart rate"
            className="metric-icon"
          />
          <p className="metric-name">Heart Rate</p>
          <p className="metric-value">{latest.heart_rate.value} bpm</p>
          <p className="metric-status">{latest.heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
