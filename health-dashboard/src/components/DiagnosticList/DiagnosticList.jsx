import "./DiagnosticList.css";

const getStatusClass = (status) => {
  if (!status) return "";
  const s = status.toLowerCase();
  if (s.includes("observation")) return "observation";
  if (s.includes("cured")) return "cured";
  if (s.includes("inactive")) return "inactive";
  return "observation";
};

const DiagnosticList = ({ diagnostics }) => {
  if (!diagnostics) return null;

  return (
    <div className="diagnostic-list-container">
      {/* Fixed title */}
      <h3 className="diagnostic-title">Diagnostic List</h3>

      {/* Fixed header — outside scroll wrapper */}
      <div className="diagnostic-header-row">
        <span className="col-problem">Problem/Diagnosis</span>
        <span className="col-description">Description</span>
        <span className="col-status">Status</span>
      </div>

      {/* Scrollable rows only */}
      <div className="diagnostic-table-wrapper">
        <table className="diagnostic-table">
          <tbody>
            {diagnostics.map((item, i) => (
              <tr key={i}>
                <td className="col-problem">{item.name}</td>
                <td className="col-description">{item.description}</td>
                <td className="col-status">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
