import { createBrowserRouter } from "react-router-dom";

import UserManagement from "../Pages/UserManagement/UserManagement";
import AllUser from "../Pages/UserManagement/AllUser";
import CreateUsers from "../Pages/UserManagement/CreateUsers";







export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserManagement></UserManagement>,
      
      children: [
      
        {
          path:"/allUsers",
          element:<AllUser></AllUser>
        },
        {
          path:"/createUser",
          element:<CreateUsers></CreateUsers>
        }
      ]
    }

  ]);

