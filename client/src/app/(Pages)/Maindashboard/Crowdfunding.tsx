"use client";
import React, { useState } from "react";
import {
  Wallet,
  History,
  HandCoins,
  Heart,
  TrendingUp,
  Users,
  Building2,
  ChevronRight,
  Clock,
  Target,
} from "lucide-react";

const activeCampaigns = [
  {
    id: 1,
    title: "Local Grocery Store Expansion",
    goal: 5000,
    raised: 3750,
    timeRemaining: "15 days",
    description:
      "Help us expand our local grocery store to serve more customers in the community.",
    contributors: 28,
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Artisan Workshop Equipment",
    goal: 3000,
    raised: 2100,
    timeRemaining: "7 days",
    description:
      "Supporting local artisans by funding new equipment for traditional crafts.",
    contributors: 15,
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Women's Textile Cooperative",
    goal: 7500,
    raised: 4500,
    timeRemaining: "21 days",
    description: "Empowering women through a community-owned textile business.",
    contributors: 42,
    image:
      "https://images.unsplash.com/photo-1590845947670-c009801ffa74?auto=format&fit=crop&q=80&w=400",
  },
];

const recentContributions = [
  {
    name: "Sarah M.",
    amount: 500,
    campaign: "Local Grocery Store Expansion",
    time: "2 hours ago",
  },
  {
    name: "John D.",
    amount: 250,
    campaign: "Artisan Workshop Equipment",
    time: "5 hours ago",
  },
  {
    name: "Maria R.",
    amount: 1000,
    campaign: "Women's Textile Cooperative",
    time: "1 day ago",
  },
];

export default function Crowdfunding() {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative group col-span-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Your Balance</p>
                <h3 className="text-3xl font-bold text-white mt-1">
                  ₹2,500.00
                </h3>
              </div>
              <Wallet className="h-12 w-12 text-glow-blue" />
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
                Request Loan
              </button>
              <button className="flex-1 px-4 py-2 border border-glow-blue/30 hover:border-glow-blue rounded-md text-white text-sm font-medium transition-colors hover:bg-glow-blue/10">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-aqua rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400">Total Contributed</p>
              <HandCoins className="h-6 w-6 text-glow-purple" />
            </div>
            <h4 className="text-2xl font-bold text-white">₹12,450</h4>
            <p className="text-sm text-gray-400 mt-2">Across 15 campaigns</p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-aqua to-glow-blue rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400">Active Loans</p>
              <TrendingUp className="h-6 w-6 text-glow-aqua" />
            </div>
            <h4 className="text-2xl font-bold text-white">3</h4>
            <p className="text-sm text-gray-400 mt-2">₹3,200 total value</p>
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-aqua">
            Active Campaigns
          </h2>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCampaigns.map((campaign) => (
            <div key={campaign.id} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
              <div className="relative bg-dark-700 rounded-lg overflow-hidden border border-white/10">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {campaign.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">
                          ₹{campaign.raised} of ₹{campaign.goal}
                        </span>
                      </div>
                      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-glow-blue to-glow-purple"
                          style={{
                            width: `${
                              (campaign.raised / campaign.goal) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {campaign.timeRemaining}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {campaign.contributors} contributors
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
                      Contribute Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Contributions */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-purple to-glow-aqua rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
        <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">
            Recent Contributions
          </h3>
          <div className="space-y-4">
            {recentContributions.map((contribution, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-glow-blue to-glow-purple flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">
                      {contribution.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {contribution.campaign}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">
                    ₹{contribution.amount}
                  </p>
                  <p className="text-sm text-gray-400">{contribution.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bank Communities */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-glow-aqua to-glow-blue rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
        <div className="relative bg-dark-700 rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Bank Communities
              </h3>
              <p className="text-gray-400 mt-1">
                Join bank-led communities for better loan opportunities
              </p>
            </div>
            <Building2 className="h-8 w-8 text-glow-aqua" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-dark-800 border border-white/10">
              <h4 className="text-white font-medium">First Community Bank</h4>
              <p className="text-sm text-gray-400 mt-1">
                Specialized in small business loans
              </p>
              <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
                Join Community
              </button>
            </div>
            <div className="p-4 rounded-lg bg-dark-800 border border-white/10">
              <h4 className="text-white font-medium">Micro Finance Hub</h4>
              <p className="text-sm text-gray-400 mt-1">
                Focus on women entrepreneurs
              </p>
              <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-glow-blue to-glow-purple rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
