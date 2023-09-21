import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";

import { ColorRing } from "react-loader-spinner";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <nav className="flex justify-between p-5 py-6 shadow-lg">
        <h2 className="text-2xl font-bold text-rose-600">Market Hub</h2>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 text-white " : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 text-white " : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 text-white " : ""
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 text-white " : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center my-48 text-6xl">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
