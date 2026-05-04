import "./Sidebar.css";
import homeIcon from "../../assets/home.svg";
import groupIcon from "../../assets/group.svg";
import calendarIcon from "../../assets/calendar.svg";
import chatIcon from "../../assets/chat.svg";
import creditCardIcon from "../../assets/credit_card.svg";
import testLogoIcon from "../../assets/TestLogo.svg";
import seniorWomanDoctorIcon from "../../assets/senior_woman_doctor.png";
import moreVertIcon from "../../assets/more_vert.svg";
import settingsIcon from "../../assets/settings.svg";

const navLinks = [
  { label: "Overview", icon: homeIcon },
  { label: "Patients", icon: groupIcon },
  { label: "Schedule", icon: calendarIcon },
  { label: "Message", icon: chatIcon },
  { label: "Transactions", icon: creditCardIcon },
];

const Sidebar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo — 211×48px from XD */}
        <div className="navbar-logo">
          <img src={testLogoIcon} alt="Tech.Care" />
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
            src={seniorWomanDoctorIcon}
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
              <img src={settingsIcon} alt="settings_icon" />
            </button>
            <button className="icon-btn" aria-label="More options">
              <img src={moreVertIcon} alt="more_vert_icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
