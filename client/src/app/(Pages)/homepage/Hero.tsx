import React from "react";
import { ArrowRight, Users, Briefcase, Building2 } from "lucide-react";
import Link from "next/link";

const metrics = [
  { icon: Building2, label: "Loans Funded", value: "$2.5M" },
  { icon: Briefcase, label: "Businesses Supported", value: "1,200+" },
  { icon: Users, label: "Communities Formed", value: "350+" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-gradient-radial from-glow-purple/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-glow-blue via-glow-purple to-glow-aqua">
            <span className="block">Empowering Nano-Entrepreneurs</span>
            <span className="block">Through Community Lending</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Access fair and transparent financial solutions, build your
            business, and join a community of growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Signupin">
              <button className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="inline-flex items-center px-8 py-3 rounded-md text-white font-medium border border-glow-blue/30 hover:border-glow-blue transition-colors hover:bg-glow-blue/10">
              Explore Features
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-blue rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
                <div className="relative bg-dark-800 rounded-lg p-6 border border-white/10">
                  <metric.icon className="h-8 w-8 text-glow-aqua mx-auto" />
                  <p className="mt-4 text-3xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-gray-400">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
