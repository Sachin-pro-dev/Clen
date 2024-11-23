"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Play,
  ChevronRight,
  MessageCircle,
  Award,
  BarChart2,
} from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
interface ChatMessage {
  sender: string;
  text: string;
}
export default function EducationPage() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const sendChatMessage = (message: string) => {
    setChatMessages([...chatMessages, { sender: "user", text: message }]);
    // Simulate AI response
    setTimeout(() => {
      setChatMessages([
        ...chatMessages,
        { sender: "user", text: message },
        { sender: "ai", text: "Here's some information about that topic..." },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 py-6 relative overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Education header background"
          width={1920}
          height={400}
          className="absolute inset-0 object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">
            Empower Yourself with Knowledge
          </h1>
          <p className="text-xl text-aqua-300 mb-4">
            Learn to manage finances, grow your business, and secure your
            future.
          </p>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search for topics..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border-blue-500 focus:border-aqua-400"
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Learning
            </Button>
            <Button
              className="bg-aqua-600 hover:bg-cyan-700 text-white"
              onClick={() => setChatbotOpen(true)}
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "What is Crowdfunding?",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "How to Manage Loan Repayments",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Top Tips for Budgeting and Saving",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-blue-500 text-white"
              >
                <CardHeader>
                  <CardTitle className="text-aqua-400">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    Learn about this important topic
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/KOtYd-hfaSI?si=PDjsJ3IoBgPFSwiF"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <Play className="text-blue-400 absolute" size={48} />
                  </div>
                  <div className="flex gap-2">
                    {["Loans", "Business", "Savings"].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-aqua-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Watch Now <ChevronRight className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Learning Modules
          </h2>
          <Tabs defaultValue="loans" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-800">
              <TabsTrigger
                value="loans"
                className="data-[state=active]:bg-blue-700"
              >
                Loan Basics
              </TabsTrigger>
              <TabsTrigger
                value="crowdfunding"
                className="data-[state=active]:bg-blue-700"
              >
                Crowdfunding
              </TabsTrigger>
              <TabsTrigger
                value="money"
                className="data-[state=active]:bg-blue-700"
              >
                Money Management
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="data-[state=active]:bg-blue-700"
              >
                Business Growth
              </TabsTrigger>
              <TabsTrigger
                value="inclusion"
                className="data-[state=active]:bg-blue-700"
              >
                Financial Inclusion
              </TabsTrigger>
            </TabsList>
            <TabsContent value="loans" className="mt-4">
              <Card className="bg-gray-800 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-cyan-400">
                    Understanding Loans
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Learn about interest rates, terms, and eligibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/AOP5wiu7mRU?si=BbOXdT5i06QJQgon"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <Progress value={33} className="mb-4" />
                  <p className="text-white mb-4">
                    You've completed 1 of 3 lessons
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Similar TabsContent for other tabs */}
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-blue-500">
              <CardHeader>
                <CardTitle className="text-cyan-400">
                  Suresh's Business Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gze9Ybrmh6k?si=vhgyNQAQ0nPGvLL1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <Play className="text-blue-400 absolute" size={48} />
                </div>
                <p className="text-white">
                  Suresh used our educational resources to secure a loan and
                  expand her local bakery.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-blue-500 text-cyan-300">
              <CardHeader>
                <CardTitle className="text-aqua-400">Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <BarChart2
                      className="mx-auto text-blue-400 mb-2"
                      size={48}
                    />
                    <p className="text-2xl font-bold text-aqua-300">10,000+</p>
                    <p className="text-white">Users Educated</p>
                  </div>
                  <div className="text-center">
                    <Award className="mx-auto text-blue-400 mb-2" size={48} />
                    <p className="text-2xl font-bold text-aqua-300">5,000+</p>
                    <p className="text-white">Loans Approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Interactive Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Loan Calculator",
                image: "/img.png",
              },
              {
                name: "Budget Planner",
                image: "/img.png",
              },
              {
                name: "Savings Tracker",
                image: "/img.png",
              },
            ].map((tool, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-blue-500 text-cyan-200"
              >
                <CardHeader>
                  <CardTitle className="text-aqua-400">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={`${tool.name} illustration`}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-50"
                    />
                  </div>
                  <p className="text-white mb-4">
                    Use our interactive {tool.name.toLowerCase()} to plan your
                    finances.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Open Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {chatbotOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-gray-800 rounded-lg shadow-lg border border-blue-500">
          <div className="p-4 border-b border-blue-500">
            <h3 className="text-lg font-bold text-aqua-400">AI Assistant</h3>
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
                      : "bg-gray-700 text-aqua-300"
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
                placeholder="Ask a question..."
                className="w-full bg-gray-700 text-white border-blue-500"
              />
            </form>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-gray-400">
              &copy; 2024 Financial Education Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
