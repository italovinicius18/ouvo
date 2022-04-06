import "./Navbar.css";

import { AiFillInfoCircle } from "react-icons/ai";
import { BiDonateHeart, BiHelpCircle, BiStats } from "react-icons/bi";

const buttons = { 1: "info", 2: "donate", 3: "stats", 4: "help" };

function Navbar() {
  const handleClick = (e) => {
    console.log(e.currentTarget.className);
  };

  return (
    <div className="Navbar">
      <div className="titleArea">
        <div className="leftArea">
          <button className="stats" onClick={handleClick}>
            <AiFillInfoCircle size={30} className="icon"/>
          </button>

          <button className="donate" onClick={handleClick}>
            <BiDonateHeart size={30} className="icon"/>
          </button>
        </div>
        <div className="centralArea">
          <h1>Ouvo</h1>
        </div>
        <div className="rightArea">
          <button className="stats" onClick={handleClick}>
            <BiStats size={30} className="icon"/>
          </button>
          <button className="help" onClick={handleClick}>
            <BiHelpCircle size={30} className="icon"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
