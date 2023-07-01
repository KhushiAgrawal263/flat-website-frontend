import React from "react";
import {Link} from "react-router-dom"
import "./Home.css";

export default function Home() {
  return (
    <div className="main-home">
      <div className="home1">
        <div className="home1-left">
          <div className="image1">
            <Link to='/venue'><p>Venue</p></Link>
          </div>
        </div>

        {/* // vertical line */}
        <div className="vertical-h"></div>

        <div className="home1-right">
          <div className="image2">
            <Link to="/event"><p>Event Manager</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
