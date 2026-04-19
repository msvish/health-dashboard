import "./Sidebar.css";

const navLinks = [
  { label: "Overview", icon: "src/assets/home.svg" },
  { label: "Patients", icon: "src/assets/group.svg" },
  { label: "Schedule", icon: "src/assets/calendar.svg" },
  { label: "Message", icon: "src/assets/chat.svg" },
  { label: "Transactions", icon: "src/assets/credit_card.svg" },
];

const Sidebar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo — 211×48px from XD */}
        <div className="navbar-logo">
          <img src="src/assets/TestLogo.svg" alt="Tech.Care" />
        </div>

        {/* Nav links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`navbar-link ${link.label === "Patients" ? "active" : ""}`}
            >
              <img src={link.icon} alt="" className="nav-icon" />
              <span>{link.label}</span>
            </li>
          ))}
        </ul>

        {/* Doctor + settings */}
        <div className="navbar-user">
          <img
            src="src/assets/senior_woman_doctor.png"
            alt="Dr. Jose Simmons"
            className="navbar-avatar"
          />
          <div className="navbar-user-info">
            <p className="navbar-user-name">Dr. Jose Simmons</p>
            <p className="navbar-user-role">General Practitioner</p>
          </div>
          <div className="navbar-divider" />
          <div className="navbar-actions">
            <button className="icon-btn" aria-label="Settings">
              <img src="src/assets/settings.svg" alt="settings_icon" />
            </button>
            <button className="icon-btn" aria-label="More options">
              <img src="src/assets/more_vert.svg" alt="more_vert_icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
