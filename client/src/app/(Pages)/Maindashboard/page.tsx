"use client";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import RequestLoan from "./RequestLoan";
import Crowdfunding from "./Crowdfunding";

import CreateAccount from "./CreateAccount";
import BusinessInsights from "./BusinessInsights";
import BankCommunities from "./BankCommunities";
import Education from "./Education";
import Notifications from "./Notifications";
import HelpCenter from "./HelpCenter";
import { BrowserRouter as Router } from "react-router-dom";
import CreditScore from "./CreditScore";
export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <main className="p-6">
            <Routes>
              <Route path="/Maindashboard" element={<Dashboard />} />
              <Route path="/request-loan" element={<RequestLoan />} />
              <Route path="/creditscore" element={<CreditScore />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
              <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="/business-insights" element={<BusinessInsights />} />
              <Route path="/bank-communities" element={<BankCommunities />} />
              <Route path="/education" element={<Education />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<HelpCenter />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
