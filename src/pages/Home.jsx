


import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Dashboard</h2>
      <p>This is a simple admin panel where you can show Transactions status and manage settings.</p>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/dashboard">View Dashboard</Link></li>
          <li><Link to="/settings">Manage Settings</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
