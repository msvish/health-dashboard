import "./PatientProfile.css";

const infoItems = (profile) => [
  {
    icon: "/src/assets/BirthIcon.svg",
    alt: "date of birth",
    label: "Date of Birth",
    value: profile.date_of_birth,
  },
  {
    icon:
      profile.gender === "Female"
        ? "/src/assets/female.svg"
        : "/src/assets/male.svg",
    alt: "gender",
    label: "Gender",
    value: profile.gender,
  },
  {
    icon: "/src/assets/phone.svg",
    alt: "contact",
    label: "Contact Info.",
    value: profile.phone_number,
  },
  {
    icon: "/src/assets/phone.svg",
    alt: "emergency contact",
    label: "Emergency Contact",
    value: profile.emergency_contact,
  },
  {
    icon: "/src/assets/insurance.svg",
    alt: "insurance",
    label: "Insurance Provider",
    value: profile.insurance_type,
  },
];

const PatientProfile = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-column-wrapper">
      {/* ── Profile card ── */}
      <div className="profile-card">
        <img
          src={profile.profile_picture}
          alt={profile.name}
          className="main-avatar"
        />
        <h2 className="profile-name">{profile.name}</h2>

        <div className="info-list">
          {infoItems(profile).map((item) => (
            <div key={item.label} className="info-item">
              <img src={item.icon} alt={item.alt} className="info-icon" />
              <div className="info-text">
                <p className="label">{item.label}</p>
                <p className="value">{item.value ?? "—"}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="info-button">Show All Information</button>
      </div>

      {/* ── Lab results card ── */}
      <div className="lab-results">
        <h3 className="lab-title">Lab Results</h3>
        <div className="results-list">
          {profile.lab_results?.map((result, i) => (
            <div key={i} className="lab-item">
              <span className="lab-name">{result}</span>
              <img
                src="/src/assets/download.svg"
                alt="download"
                className="download-icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
