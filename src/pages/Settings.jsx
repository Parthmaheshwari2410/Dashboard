
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import "./Settings.css";

function Settings() {
    const { toggleTheme } = useTheme();

 
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");

  const handleSaveChanges = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email.");
      return;
    }
    setIsChecked(true);
    alert("Email has been updated successfully!");
  };
  return (
    <div className="settings">
      <h2>Settings</h2>

      <div className="setting-item">
        <label>Choose Theme:</label>
         <Link className="htheme" to = "/">Home</Link> 
            <Link className="dtheme" to = "/dashboard">Dashboard</Link>
           
      </div>
      <div className="setting-item">
            <button className="btn" onClick={toggleTheme}>Toggle theme </button>
      </div>
      


<div className="eupdate">
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </label>
      <br />
       <label >
        <input type="checkbox" checked={isChecked} readOnly /> Email Updated
      </label>
    
      <br />
      <button className="save-btn" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
    </div>
  );
}

export default Settings;


