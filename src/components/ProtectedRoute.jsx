import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Firebase authentication is temporarily disabled.
  // This allows the application to build and deploy
  // while the admin authentication system is being completed.

  return children;
}