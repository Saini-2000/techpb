import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TokenContext } from "../adminroutes/AdminRoutes";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track sidebar state
  const location = useLocation();
  const path = location.pathname.split("/");
  const currPath = path[2];
  // const { setToken } = useContext(TokenContext);
const navigation = useNavigate();
  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar state
  
  const logout = ()=> {
    try{
    // setToken("")
    localStorage.removeItem('authToken');
    navigation("/admin")
    }catch{
      console.error("Failed to log out:", error); 

    }


  }

  return (
    <>
      <div className="sm:w-1/3 md:relative absolute lg:w-1/5 h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen bg-black  text-white w-64 md:w-1/5 transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-2 md:hidden">
            <i className="text-3xl fa-solid fa-times cursor-pointer" onClick={toggleSidebar}></i>
          </div>
          <ul className="w-full p-2 text-md lg:text-lg  h-full">
            <Link to="/admin/home">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "home" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/admin/work">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "work" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Work
              </li>
            </Link>
            <Link to="/admin/services">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "services" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Services
              </li>
            </Link>
            <Link to="/admin/serviceItem">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "serviceItem" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Service Item
              </li>
            </Link>
            <Link to="/admin/reviews">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "reviews" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Reviews
              </li>
            </Link>
            <Link to="/admin/queries">
              <li onClick={toggleSidebar}
                className={`text-center p-4 m-2 rounded ${
                  currPath === "queries" ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                Queries
              </li>
            </Link>
          </ul>
            <div className="bottom-0 absolute flex items-center justify-center w-full p-4 text-black font-bold text-xl bg-[var(--primary-color)]" onClick={logout}>
              LOGOUT
            </div>
        </div>

        {/* Hamburger Menu */}
        <div className="p-2 md:hidden">
          <i className="text-3xl fa-solid fa-bars cursor-pointer" onClick={toggleSidebar}></i>
        </div>

        {/* Overlay (optional for closing sidebar when clicking outside) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default AdminSidebar;
