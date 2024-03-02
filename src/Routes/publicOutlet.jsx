import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
export default function PublicOutlet() {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
