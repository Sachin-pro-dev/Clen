import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Wallet, CreditCard, Users, TrendingUp } from "lucide-react";

const data = [
  { name: "Jan", amount: 400 },
  { name: "Feb", amount: 300 },
  { name: "Mar", amount: 600 },
  { name: "Apr", amount: 800 },
  { name: "May", amount: 700 },
];

const stats = [
  {
    name: "Wallet Balance",
    value: "₹2,500",
    icon: Wallet,
    color: "from-glow-blue to-glow-purple",
  },
  {
    name: "Outstanding Loans",
    value: "₹1,200",
    icon: CreditCard,
    color: "from-glow-purple to-glow-aqua",
  },
  {
    name: "Contributions Made",
    value: "₹3,800",
    icon: Users,
    color: "from-glow-aqua to-glow-blue",
  },
  {
    name: "Total Earnings",
    value: "₹850",
    icon: TrendingUp,
    color: "from-glow-blue to-glow-aqua",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="relative group">
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md`}
            />
            <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
              <div className="flex items-center">
                <stat.icon className="h-8 w-8 text-glow-blue" />
                <span className="ml-4 text-2xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-gray-400">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Financial Overview */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Financial Overview
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                      borderRadius: "0.5rem",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#4EA8DE"
                    strokeWidth={2}
                    dot={{ fill: "#4EA8DE" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Active Loans */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-aqua rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white ">Active Loans</h3>
            <div className="space-y-4">
              {[
                { name: "Business Expansion Loan", progress: 75 },
                { name: "Equipment Purchase", progress: 45 },
                { name: "Working Capital", progress: 80 },
                { name: "Vehicle Loan", progress: 90 },
                { name: "Home Loan", progress: 10 },
                { name: "Personal Loan", progress: 100 },
              ].map((loan) => (
                <div key={loan.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{loan.name}</span>
                    <span className="text-gray-400">{loan.progress}%</span>
                  </div>
                  <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-glow-blue to-glow-purple"
                      style={{ width: `₹{loan.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
