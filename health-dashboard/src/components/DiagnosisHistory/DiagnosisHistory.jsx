import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";
import expandIcon from "../../assets/expand.svg";
import arrowUpIcon from "../../assets/ArrowUp.svg";
import arrowDownIcon from "../../assets/ArrowDown.svg";
import temperatureIcon from "../../assets/temperature.svg";
import heartRateIcon from "../../assets/heart_rate.svg";
import respiratoryRateIcon from "../../assets/respiratory_rate.svg";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ data }) => {
  if (!data) return null;
  const latest = data[0];

  return (
    <div className="diagnosis-container">
      <h3 className="section-title">Diagnosis History</h3>

      {/* ── Blood pressure row ── */}
      <div className="chart-section-wrapper">
        {/* LEFT — chart */}
        <div className="chart-left">
          <div className="chart-header">
            <h4 style={{ whiteSpace: "nowrap" }}>Blood Pressure</h4>
            <div className="chart-period">
              <span>Last 6 months</span>
              <img src={expandIcon} alt="" />
            </div>
          </div>
          <div className="bp-chart-wrapper">
            <BloodPressureChart history={data} />
          </div>
        </div>

        <div className="chart-divider" />

        {/* RIGHT — legends */}
        <div className="chart-right-stats">
          {/* Systolic */}
          <div className="stat-item">
            <div className="stat-label">
              <span className="stat-dot systolic-dot" />
              Systolic
            </div>
            <div className="stat-value">
              {latest.blood_pressure.systolic.value}
            </div>
            <div className="stat-level-row">
              <img src={arrowUpIcon} alt="higher" className="stat-arrow" />
              <span className="stat-levels">
                {latest.blood_pressure.systolic.levels}
              </span>
            </div>
          </div>

          <hr />

          {/* Diastolic */}
          <div className="stat-item">
            <div className="stat-label">
              <span className="stat-dot diastolic-dot" />
              Diastolic
            </div>
            <div className="stat-value">
              {latest.blood_pressure.diastolic.value}
            </div>
            <div className="stat-level-row">
              <img
                src={arrowDownIcon}
                alt="lower"
                className="stat-arrow"
                style={{
                  transform: "rotate(180deg)",
                }}
              />
              <span className="stat-levels">
                {latest.blood_pressure.diastolic.levels}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Metric cards row ── */}
      <div className="metrics-grid">
        <div className="metric-card respiratory">
          <img
            src={respiratoryRateIcon}
            alt="respiratory rate"
            className="metric-icon"
          />
          <p className="metric-name">Respiratory Rate</p>
          <p className="metric-value">{latest.respiratory_rate.value} bpm</p>
          <p className="metric-status">{latest.respiratory_rate.levels}</p>
        </div>

        <div className="metric-card temperature">
          <img
            src={temperatureIcon}
            alt="temperature"
            className="metric-icon"
          />
          <p className="metric-name">Temperature</p>
          <p className="metric-value">{latest.temperature.value}°F</p>
          <p className="metric-status">{latest.temperature.levels}</p>
        </div>

        <div className="metric-card heart-rate">
          <img src={heartRateIcon} alt="heart rate" className="metric-icon" />
          <p className="metric-name">Heart Rate</p>
          <p className="metric-value">{latest.heart_rate.value} bpm</p>
          <p className="metric-status">{latest.heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
