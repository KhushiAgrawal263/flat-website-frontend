import React from "react";
import "./Venue.css";

export default function Venue() {
  const array = [
    "/Image/v1.jpeg",
    "/Image/v3.jpeg",
    "/Image/v4.jpeg",
    "/Image/v5.jpeg",
    "/Image/v6.jpeg",
    "/Image/v1.jpeg",
    "/Image/v3.jpeg",
  ];

  return (
    <div className="card-divs">
      {array.length > 0 &&
        array.map((data, i) => (
          <div className="card">
            <div className="card-img">
              <img src={data} alt="" />
            </div>
            <h3>Name of Venue</h3>
            <h4>Type Of venue</h4>
          </div>
        ))}
    </div>
  );
}
