import "./LabResults.css";

const LabResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className="lab-results-container">
      <h3 className="lab-title">Lab Results</h3>

      <div className="lab-scroll-area">
        {results.map((result, i) => (
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
  );
};

export default LabResults;
