import React, { useEffect } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";

import { privateRoutes } from "../router";

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("pass")) navigate("/login");
  }, []);

  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/registration" />}></Route>
    </Routes>
  );
};

export default AppRouter;
