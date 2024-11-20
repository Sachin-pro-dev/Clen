import React from "react";
import Hero from "../app/(Pages)/homepage/Hero";
import Features from "../app/(Pages)/homepage/Features";
import Testimonials from "../app/(Pages)/homepage/Testimonials";
import GetStarted from "../app/(Pages)/homepage/GetStarted";

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Hero />
      <Features />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default App;
