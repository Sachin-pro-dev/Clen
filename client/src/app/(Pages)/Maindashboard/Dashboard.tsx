// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Wallet, CreditCard, Users, TrendingUp } from "lucide-react";

// const data = [
//   { name: "Jan", amount: 400 },
//   { name: "Feb", amount: 300 },
//   { name: "Mar", amount: 600 },
//   { name: "Apr", amount: 800 },
//   { name: "May", amount: 700 },
// ];

// const stats = [
//   {
//     name: "Wallet Balance",
//     value: "₹2,500",
//     icon: Wallet,
//     color: "from-glow-blue to-glow-purple",
//   },
//   {
//     name: "Outstanding Loans",
//     value: "₹1,200",
//     icon: CreditCard,
//     color: "from-glow-purple to-glow-aqua",
//   },
//   {
//     name: "Contributions Made",
//     value: "₹3,800",
//     icon: Users,
//     color: "from-glow-aqua to-glow-blue",
//   },
//   {
//     name: "Total Earnings",
//     value: "₹850",
//     icon: TrendingUp,
//     color: "from-glow-blue to-glow-aqua",
//   },
// ];

// export default function Dashboard() {
//   return (
//     <div className="space-y-6">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat) => (
//           <div key={stat.name} className="relative group">
//             <div
//               className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md`}
//             />
//             <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
//               <div className="flex items-center">
//                 <stat.icon className="h-8 w-8 text-glow-blue" />
//                 <span className="ml-4 text-2xl font-bold text-white">
//                   {stat.value}
//                 </span>
//               </div>
//               <p className="mt-2 text-gray-400">{stat.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Financial Overview */}
//         <div className="relative group">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
//           <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Financial Overview
//             </h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={data}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                   <XAxis dataKey="name" stroke="#9CA3AF" />
//                   <YAxis stroke="#9CA3AF" />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: "#1F2937",
//                       border: "none",
//                       borderRadius: "0.5rem",
//                       color: "#fff",
//                     }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="amount"
//                     stroke="#4EA8DE"
//                     strokeWidth={2}
//                     dot={{ fill: "#4EA8DE" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Active Loans */}
//         <div className="relative group">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-aqua rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
//           <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
//             <h3 className="text-lg font-semibold text-white ">Active Loans</h3>
//             <div className="space-y-4">
//               {[
//                 { name: "Business Expansion Loan", progress: 75 },
//                 { name: "Equipment Purchase", progress: 45 },
//                 { name: "Working Capital", progress: 80 },
//                 { name: "Vehicle Loan", progress: 90 },
//                 { name: "Home Loan", progress: 10 },
//                 { name: "Personal Loan", progress: 100 },
//               ].map((loan) => (
//                 <div key={loan.name}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-300">{loan.name}</span>
//                     <span className="text-gray-400">{loan.progress}%</span>
//                   </div>
//                   <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-gradient-to-r from-glow-blue to-glow-purple"
//                       style={{ width: `${loan.progress}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Wallet,
  CreditCard,
  Users,
  TrendingUp,
  Brain,
  Calendar,
  AlertCircle,
  Activity,
  Target,
  Award,
} from "lucide-react";

const activityData = [
  { name: "Jan", loans: 400, savings: 240, contributions: 320 },
  { name: "Feb", loans: 300, savings: 380, contributions: 280 },
  { name: "Mar", loans: 600, savings: 420, contributions: 550 },
  { name: "Apr", loans: 800, savings: 460, contributions: 420 },
  { name: "May", loans: 700, savings: 520, contributions: 680 },
];

const pieData = [
  { name: "Loans", value: 45 },
  { name: "Savings", value: 30 },
  { name: "Investments", value: 25 },
];

const COLORS = ["#4EA8DE", "#9D4EDD", "#2DD4BF"];

const stats = [
  {
    name: "Wallet Balance",
    value: "$2,500",
    icon: Wallet,
    color: "from-glow-blue to-glow-purple",
  },
  {
    name: "Outstanding Loans",
    value: "$1,200",
    icon: CreditCard,
    color: "from-glow-purple to-glow-aqua",
  },
  {
    name: "Contributions Made",
    value: "$3,800",
    icon: Users,
    color: "from-glow-aqua to-glow-blue",
  },
  {
    name: "Total Earnings",
    value: "$850",
    icon: TrendingUp,
    color: "from-glow-blue to-glow-aqua",
  },
];

const upcomingPayments = [
  { id: 1, name: "Business Loan Payment", amount: 250, due: "2024-03-25" },
  { id: 2, name: "Equipment Loan", amount: 180, due: "2024-03-28" },
  { id: 3, name: "Working Capital", amount: 320, due: "2024-04-01" },
];

const aiInsights = [
  {
    title: "Credit Score Improvement",
    description: "Your timely payments have improved your score by 25 points",
    icon: TrendingUp,
  },
  {
    title: "Savings Opportunity",
    description: "You could save $200 more monthly based on your cash flow",
    icon: Target,
  },
  {
    title: "Achievement Unlocked",
    description: 'You\'ve reached the "Trusted Borrower" status',
    icon: Award,
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Activity Chart */}
        <div className="lg:col-span-2 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:bg-cyan-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Financial Activity
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
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
                  <Bar dataKey="loans" fill="#4EA8DE" />
                  <Bar dataKey="savings" fill="#9D4EDD" />
                  <Bar dataKey="contributions" fill="#2DD4BF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Portfolio Distribution */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-aqua rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Portfolio Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#dcaded",
                      border: "none",
                      borderRadius: "0.5rem",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-4 -mb-12">
                {pieData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center mb-18">
                    <div
                      className="w-3 h-3 rounded-full mr-2 "
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-sm text-gray-400 ">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights and Upcoming Payments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-aqua to-glow-blue rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-glow-aqua mr-2" />
              <h3 className="text-lg font-semibold text-white">AI Insights</h3>
            </div>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-dark-800 rounded-lg"
                >
                  <insight.icon className="h-5 w-5 text-glow-blue mt-1" />
                  <div className="ml-3">
                    <h4 className="text-white font-medium">{insight.title}</h4>
                    <p className="text-sm text-gray-400">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Payments */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-glow-purple mr-2" />
              <h3 className="text-lg font-semibold text-white">
                Upcoming Payments
              </h3>
            </div>
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 bg-dark-800 rounded-lg"
                >
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-glow-purple" />
                    <div className="ml-3">
                      <p className="text-white font-medium">{payment.name}</p>
                      <p className="text-sm text-gray-400">
                        Due: {payment.due}
                      </p>
                    </div>
                  </div>
                  <span className="text-white font-medium">
                    ${payment.amount}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
              View All Payments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
