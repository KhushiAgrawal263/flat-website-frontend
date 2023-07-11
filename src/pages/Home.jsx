import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="main-home">
      <div className="home1">
        <div className="home1-left">
          <div className="image1">
            <Link to="/venue">
              {" "}
              <img src="Image/v1.jpg" alt="" />{" "}
            </Link>
            <div class="fadedbox">
              <div class="text"> Book Now </div>
            </div>
          </div>
          <div className="title">Venue</div>
        </div>

        {/* // vertical line */}
        <div className="vertical-h"></div>

        <div className="home1-right">
          <div className="image2">
            <img src="Image/m.jpg" alt="" />
          </div>
          <div className="title">Event Manager</div>
        </div>
      </div>
    </div>
  );
}
