import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>I am from DashBoard</h1>
      <section className="md:flex gap-4">
        <div className="w-[20%] bg-gray-100 rounded-lg">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-400 " : ""
                }
              >
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-400 text-white"
                    : ""
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/items"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-400 text-white"
                    : ""
                }
              >
                Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/editProfile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-400 text-white"
                    : ""
                }
              >
                Edit Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-[80%]">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
