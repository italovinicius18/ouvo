import "./Home.css";
import "../components/Navbar.css";

import Navbar from "../components/Navbar";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Home() {
  const [tried, setTried] = useState([]);

  const handleClick = (e) => {
    console.log(e.currentTarget.className);
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="interaction">
        <div className="triedArea">
          {tried.map((item, index) => (
            <div className="tried">
              <text className="triedText">{item + index}</text>
            </div>
          ))}
        </div>
        <div className="player"></div>
        <div className="input">
          <div className="inputArea">
            <BiSearch size={20} className="icon" />
            <input type="text" className="border inputSong" />
            <button className="donate" onClick={handleClick}>
              <IoCloseOutline size={20} className="icon" />
            </button>
          </div>
          <div className="buttonArea">
            <button className="border buttonAction skipTime">Pular 1+</button>
            <button className="border buttonAction submitSong">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
