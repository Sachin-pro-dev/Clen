import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  HandCoins,
  Users,
  PiggyBank,
  LineChart,
  Building2,
  GraduationCap,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Settings,
} from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/Maindashboard" },
  { name: "Check Your Creditscore", icon: HandCoins, href: "/creditscore" },
  { name: "Request Loan", icon: HandCoins, href: "/request-loan" },
  { name: "Crowdfunding", icon: Users, href: "/crowdfunding" },
  { name: "Create Account", icon: PiggyBank, href: "/createAccount" },
  { name: "Business Insights", icon: LineChart, href: "/business-insights" },
  { name: "Bank Communities", icon: Building2, href: "/bank-communities" },
  { name: "Education", icon: GraduationCap, href: "/education" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Help Center", icon: HelpCircle, href: "/help" },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 h-full bg-dark-800 border-r border-white/10 transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.freepik.com/premium-photo/happy-indian-girl-professional-posing-home-office-portrait_1168123-52359.jpg"
              className="w-10 h-10 rounded-full ring-2 ring-glow-purple/50"
            />
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  Sangeetha
                </p>
                <p className="text-xs text-gray-400 truncate">
                  Individual Lender
                </p>
              </div>
            )}
          </div>
          {isOpen && (
            <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
              Edit Profile
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                clsx(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-glow-blue/20 to-glow-purple/20 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white",
                  !isOpen && "justify-center"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            {isOpen ? (
              <>
                <ChevronLeft className="h-5 w-5" />
                <span className="ml-2">Collapse</span>
              </>
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          <button className="mt-2 w-full flex items-center justify-center px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Settings className="h-5 w-5" />
            {isOpen && <span className="ml-2">Settings</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
