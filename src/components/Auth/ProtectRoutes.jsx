import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
  const user = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default ProtectRoutes;
