import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/registration", element: <Registration />, exact: true },
  { path: "/login", element: <Login />, exact: true },
];

