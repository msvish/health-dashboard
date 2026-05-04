import "./PatientList.css";
import moreHorizIcon from "../../assets/more_horiz.svg";
import searchIcon from "../../assets/search.svg";

const PatientList = ({ patients }) => {
  return (
    <div className="patient-list-container">
      {/* ── Header ── */}
      <div className="list-header">
        <h3 className="list-title">Patients</h3>
        <img src={searchIcon} alt="search" className="search-icon" />
      </div>

      {/* ── Scrollable rows ── */}
      <div className="patients-scroll-area">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`patient-item ${patient.name === "Jessica Taylor" ? "active" : ""}`}
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="patient-avatar"
            />
            <div className="patient-info">
              <p className="patient-name">{patient.name}</p>
              <p className="patient-meta">
                {patient.gender}, {patient.age}
              </p>
            </div>
            <img src={moreHorizIcon} alt="more" className="more-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
