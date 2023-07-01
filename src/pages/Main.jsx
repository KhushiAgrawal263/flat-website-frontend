import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";
import Venue from "./Venue";

export default function Main() {
  const [select, setSelected] = useState("none");
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="main-div">
      <div className="type-menu">
        <div className="menu1" onClick={() => setSelected("venue")}>
        {
          path==="/venue" ? "Venue" : "Event Manager"
        }
        </div>
      </div>

      <div className="sub-div">
        <nav role="navigation" class="primary-navigation">
          <ul>
            <li>
              <a href="#">Select Event Type</a>
              <ul class="dropdown">
                <li>
                  <a href="#">Birthday</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Charity</a>
                </li>
                <li>
                  <a href="#">mkmkmvk</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Select City</a>
              <ul class="dropdown">
                <li>
                  <a href="#">Indore</a>
                </li>
                <li>
                  <a href="#">Pune</a>
                </li>
                <li>
                  <a href="#">Jaipur</a>
                </li>
                <li>
                  <a href="#">Banglore</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {path && path === "/venue" ? (
          <Venue />
        ) : path === "/event" ? (
          <h1>Event Manager</h1>
        ) : (
          <h1>Home</h1>
        )}
      </div>
    </div>
  );
}
