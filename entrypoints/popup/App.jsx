import { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const startAutomation = () => {
    setIsLoading(true);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "startAutomation" },
        (response) => {
          console.log(response?.status || "No response");
          setIsLoading(false);
        }
      );
    });
  };

  return (
    <div className="app-container">
      <h2 className="app-title">LinkedIn Auto Connect</h2>
      {isLoading ? (
        <div className="loader-container">
          <span className="loader"></span>
          <h2 className="loading-text">Connecting...</h2>
        </div>
      ) : (
        <button className="connect-button" onClick={startAutomation}>
          Connect With All
        </button>
      )}
    </div>
  );
}

export default App;
