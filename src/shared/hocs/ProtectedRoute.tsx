import React from "react";
import { Navigate } from "react-router-dom";
import { useProfile } from "../hooks/use-profile";
import Loader from "../ui/loader";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { userData, loading } = useProfile();
  if (loading) {
    return <Loader />;
  }

  if (!userData?.id) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
