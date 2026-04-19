import "./DiagnosticList.css";

const statusClass = (status) => {
  if (!status) return "";
  const s = status.toLowerCase();
  if (s.includes("under observation")) return "observation";
  if (s.includes("cured")) return "cured";
  return "active";
};

const DiagnosticList = ({ diagnostics }) => {
  if (!diagnostics || diagnostics.length === 0) return null;

  return (
    <div className="diagnostic-list-container">
      <h3 className="section-title">Diagnostic List</h3>
      <div className="table-wrapper">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((item, index) => (
              <tr key={index}>
                <td className="td-name">{item.name}</td>
                <td className="td-desc">{item.description}</td>
                <td>
                  <span className={`status-badge ${statusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
