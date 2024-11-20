import React from 'react';
import { UserPlus, Building2, Users } from 'lucide-react';

const options = [
  {
    icon: UserPlus,
    title: 'For Individuals',
    description: 'Request a loan and start your journey',
    buttonText: 'Request a Loan',
    gradient: 'from-glow-blue to-glow-purple'
  },
  {
    icon: Building2,
    title: 'For Corporates',
    description: 'Partner with us for CSR initiatives',
    buttonText: 'Join as Partner',
    gradient: 'from-glow-purple to-glow-aqua'
  },
  {
    icon: Users,
    title: 'For Banks',
    description: 'Create and manage communities',
    buttonText: 'Create Community',
    gradient: 'from-glow-aqua to-glow-blue'
  }
];

export default function GetStarted() {
  return (
    <div className="bg-dark-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-glow-blue via-glow-purple to-glow-aqua">
            Start Your Journey with Clen Today
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose your path and join our community of change-makers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${option.gradient} rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur-md`} />
              <div className="relative bg-dark-700 rounded-lg p-8 border border-white/10">
                <option.icon className="h-12 w-12 text-glow-blue" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {option.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {option.description}
                </p>
                <button className={`mt-6 w-full px-4 py-3 bg-gradient-to-r ${option.gradient} rounded-md text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,171,247,0.5)]`}>
                  {option.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}