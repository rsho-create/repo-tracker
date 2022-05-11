import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function seaarchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-siee">
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="GitHub Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
