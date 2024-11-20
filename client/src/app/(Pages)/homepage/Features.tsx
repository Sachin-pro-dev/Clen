import React from "react";
import {
  Users,
  Building,
  Brain,
  Briefcase,
  PiggyBank,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community Crowdfunding",
    description:
      "Join or create funding pools to access or contribute to loans with transparent tracking.",
    gradient: "from-glow-blue to-glow-purple",
  },
  {
    icon: Building,
    title: "Bank-Led Communities",
    description:
      "Access loans from banks even without traditional documentation through our trusted network.",
    gradient: "from-glow-purple to-glow-aqua",
  },
  {
    icon: Brain,
    title: "AI Financial Insights",
    description:
      "Get personalized money management and business growth tips powered by AI.",
    gradient: "from-glow-aqua to-glow-blue",
  },
  {
    icon: Briefcase,
    title: "Business Registration",
    description:
      "Register your business and connect with others nearby for growth opportunities.",
    gradient: "from-glow-blue to-glow-aqua",
  },
  {
    icon: PiggyBank,
    title: "Savings Plans",
    description:
      "Save small amounts daily or weekly to secure your financial future.",
    gradient: "from-glow-purple to-glow-blue",
  },
  {
    icon: Building2,
    title: "Corporate Contributions",
    description:
      "Companies can fulfill CSR obligations by funding communities and tracking impact.",
    gradient: "from-glow-aqua to-glow-purple",
  },
];

export default function Features() {
  return (
    <div className="bg-dark-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-aqua">
            Empowering Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to grow your business and build financial
            stability.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative group">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur-md`}
              />
              <div className="relative bg-dark-700 rounded-xl p-8 border border-white/10">
                <feature.icon className="h-8 w-8 text-glow-blue" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
