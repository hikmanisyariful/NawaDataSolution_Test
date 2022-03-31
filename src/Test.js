import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Test() {
  return (
    <div className="container">
      <h3 className="my-5">Selection Test of PT Nawa Data Solutions</h3>

      <ul className="row p-0">
        <li className="col-auto" style={{ listStyle: "none" }}>
          <NavLink
            to="/sortCharacter"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "500" : "400",
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "#d0a33c" : ""
              };
            }}
          >
            Sort Character
          </NavLink>
        </li>
        <li className="col-auto" style={{ listStyle: "none" }}>
          <NavLink
            to="/psbb"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "500" : "400",
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "#d0a33c" : ""
              };
            }}
          >
            PSBB
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
