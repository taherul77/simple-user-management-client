import { NavLink, Outlet } from "react-router-dom";

const UserManagement = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex flex-col mx-auto justify-center m-10">
        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-90 text-center text-xl h-[100%] bg-sky-600 text-base-content">
          {/* Sidebar content here */}

          <h2 className="text-4xl text-white py-6">Users Management</h2>
         
          <li>
            <NavLink
              to="/allUsers"
              aria-label="Our HomePage"
              title="Our HomePage"
              className={({ isActive }) =>
                isActive
                  ? " border-md rounded-md bg-white text-black"
                  : "font-medium  text-white"
              }
            >
              All USERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createUser"
              aria-label="Our HomePage"
              title="Our HomePage"
              className={({ isActive }) =>
                isActive
                  ? " border-md rounded-md bg-white text-black"
                  : "font-medium  text-white"
              }
            >
              CREATE USER
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
