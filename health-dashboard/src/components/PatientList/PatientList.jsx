import "./PatientList.css";

const PatientList = ({ patients }) => {
  return (
    <div className="patient-list-container">
      {/* ── Header ── */}
      <div className="list-header">
        <h3 className="list-title">Patients</h3>
        <img
          src="/src/assets/search.svg"
          alt="search"
          className="search-icon"
        />
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
            <img
              src="/src/assets/more_horiz.svg"
              alt="more"
              className="more-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
