import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/LoginPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Dashboard layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Catch-all route for 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
