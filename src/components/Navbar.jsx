import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
  return (
    <nav onClick={()=>navigate('/')} className="navbar">
      <button><h1>Dashboard App</h1></button>
    </nav>
  );
}

export default Navbar;
