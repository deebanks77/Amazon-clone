import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useStateValue from "../../StateProvider/StateProvider";

function ProtectedRoute({ children }) {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
