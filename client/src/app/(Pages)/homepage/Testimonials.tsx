import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Clen helped me get my first loan to expand my vegetable stall! The community support was incredible.",
    author: "Asha Kumar",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    gradient: "from-glow-blue to-glow-purple"
  },
  {
    quote: "Our company supported a community that has now created 20 new jobs! The impact tracking is transparent and meaningful.",
    author: "John Smith",
    role: "CSR Manager, XYZ Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    gradient: "from-glow-purple to-glow-aqua"
  },
  {
    quote: "The AI-driven insights helped me improve my business decisions and credit score significantly.",
    author: "Maria Rodriguez",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    gradient: "from-glow-aqua to-glow-blue"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-dark-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-glow-purple to-glow-aqua">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Real people, real impact. See how Clen is changing lives.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur-md`} />
              <div className="relative flex flex-col bg-dark-800 rounded-xl p-8 border border-white/10">
                <Quote className="h-8 w-8 text-glow-blue mb-4" />
                <p className="flex-grow text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-glow-purple/50"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}