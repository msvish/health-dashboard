import { useState, useEffect } from "react";
import { fetchPatientData } from "./services/api";
import Sidebar from "./components/Sidebar/Sidebar";
import PatientList from "./components/PatientList/PatientList";
import DiagnosisHistory from "./components/DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList/DiagnosticList";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import LabResults from "./components/LabResults/LabResults";
import "./App.css";

function App() {
  const [allPatients, setAllPatients] = useState([]);
  const [jessicaData, setJessicaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPatientData();
        setAllPatients(data);
        const jessica = data.find((p) => p.name === "Jessica Taylor");
        setJessicaData(jessica);
      } catch (err) {
        console.error("Failed to load patient data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <p className="loading-text">Loading Patient Records…</p>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      {/* Navbar spans full width above the grid */}
      <Sidebar />

      {/* 3-column grid below */}
      <div className="main-layout">
        <PatientList patients={allPatients} />
        <main className="content-column">
          <DiagnosisHistory data={jessicaData?.diagnosis_history} />
          <DiagnosticList diagnostics={jessicaData?.diagnostic_list} />
        </main>
        <div className="profile-column">
          <PatientProfile profile={jessicaData} />
          <LabResults results={jessicaData?.lab_results} />
        </div>
      </div>
    </div>
  );
}

export default App;
