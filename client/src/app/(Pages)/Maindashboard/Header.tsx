import React from 'react';
import { Bell, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-dark-800 border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-white">
            Welcome back, Sangeetha!
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-glow-purple rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}