import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/LoginPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import RedirectPage from "../pages/RedirectPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Protected routes */}
        {/* Dashboard layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/verify-email/:id/:token"
            element={<VerifyEmailPage />}
          />
        </Route>

        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
