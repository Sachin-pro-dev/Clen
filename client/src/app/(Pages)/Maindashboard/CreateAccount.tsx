"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ChevronRight, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const banks = [
  {
    name: "Canara Bank",
    logo: "data:image/jpeg;base64,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",
    rating: 4.0,
  },
  {
    name: "Allahabad Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/af/Allahabad_Bank_Logo.svg",
    rating: 4.5,
  },
  {
    name: "Union Bank of India",
    logo: "data:image/png;base64,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",
    rating: 4.2,
  },
  {
    name: "Axis Bank",
    logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
    rating: 4.7,
  },

  {
    name: "Bank of Baroda",
    logo: "data:image/jpeg;base64,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",
    rating: 4.6,
  },
  {
    name: "State Bank of India",
    logo: "data:image/png;base64,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",
    rating: 4.8,
  },
  // Add more banks as needed
];

interface ChatMessage {
  sender: string;
  text: string;
}
export default function CreateAccount() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const sendChatMessage = (message: string) => {
    setChatMessages([...chatMessages, { sender: "user", text: message }]);
    // Simulate AI response
    setTimeout(() => {
      setChatMessages([
        ...chatMessages,
        { sender: "user", text: message },
        {
          sender: "ai",
          text: "Here's some information about bank communities...",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-b from-gray-900 to-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">
            Join a Bank Community Today
          </h1>
          <p className="text-xl text-aqua-300 mb-6">
            Choose from trusted banks to start your financial journey.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search banks by name or region..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border-blue-500 focus:border-aqua-400"
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Bank Communities
            </Button>
            <Button className="bg-aqua-600 hover:bg-aqua-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Featured Banks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.slice(0, 3).map((bank, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500 hover:border-aqua-400 transition-colors"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-cyan-400">{bank.name}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center">
                      <Star className="text-yellow-400 mr-1" size={16} />
                      {bank.rating}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">
                    Special programs for small business owners and unbanked
                    individuals.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-900"
                  >
                    View Details
                  </Button>
                  <Button className="bg-aqua-600 hover:bg-aqua-700 text-white hover:bg-cyan-600">
                    Join Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">All Banks</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 text-white border-blue-500">
                <SelectValue placeholder="Filter by Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North India</SelectItem>
                <SelectItem value="south">South India</SelectItem>
                <SelectItem value="east">East India</SelectItem>
                <SelectItem value="west">West India</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 text-white border-blue-500">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500 hover:border-aqua-400 transition-colors"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-cyan-400">{bank.name}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center">
                      <Star className="text-yellow-400 mr-1" size={16} />
                      {bank.rating}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-900"
                  >
                    View Details
                  </Button>
                  <Button className="bg-aqua-600 hover:bg-aqua-700 text-white">
                    Join
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-900 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-aqua-400">
                What Are Bank Communities?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Bank Communities are initiatives created by banks to offer
                financial inclusion for unbanked individuals. They focus on
                crowdfunding, microloans, and other CSR-backed financial aid.
              </p>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                How It Works
              </h3>
              <ul className="list-disc list-inside text-white mb-4">
                <li>Users join a bank's community</li>
                <li>They can request or contribute to crowdfunding pools</li>
                <li>Access loans without complex documentation requirements</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Benefits of Joining
              </h3>
              <ul className="list-disc list-inside text-white">
                <li>Easy account creation with basic verification</li>
                <li>Financial literacy resources from banks</li>
                <li>Access to community-driven crowdfunding initiatives</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-900 to-aqua-900 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Why Join Today?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Secure your financial future with support from leading banks.
                Enjoy benefits like quick account creation, loan access, and
                participation in crowdfunding.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join a Bank Now
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-blue-800"
              >
                Learn About Crowdfunding
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      {chatbotOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-gray-900 rounded-lg shadow-lg border border-blue-500">
          <div className="p-4 border-b border-blue-500">
            <h3 className="text-lg font-bold text-aqua-400">
              Bank Community Assistant
            </h3>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-aqua-300"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-blue-500">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendChatMessage(e.target.message.value);
                e.target.reset();
              }}
            >
              <Input
                name="message"
                placeholder="Ask about bank communities..."
                className="w-full bg-gray-800 text-white border-blue-500"
              />
            </form>
          </div>
        </div>
      )}

      <Button
        className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3"
        onClick={() => setChatbotOpen(!chatbotOpen)}
      >
        <MessageCircle size={24} />
      </Button>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Popular Banks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Crowdfunding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Dashboard
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-gray-400">
              &copy; 2024 Bank Community Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
