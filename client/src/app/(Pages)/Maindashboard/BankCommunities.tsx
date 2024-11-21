"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  Star,
  MessageCircle,
  Info,
  ArrowRight,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const banks = [
  {
    name: "Canara Bank",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKMArQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIGAwUHBP/EAEYQAAEDAgIFCAcFBgMJAAAAAAEAAgMEEQUSBiEiMkITMUFRYWJygRQjUnGRocEHM7Hh8BWCkqLC0SQmdDU2Q0RTY4Oy8f/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEH/8QAMhEAAQMCBAMGBQQDAAAAAAAAAAECAwQRBRIhMRNBURQyYXGx4YGhwdHwIjNCkQYjYv/aAAwDAQACEQMRAD8A7f8A1ItwpD2UuHvOQExtJOSbvp8aALtRduXsQNxRO78EBJyQy7KbeJI8OXrQDOVA/eUeBymEBG7UyGqO1kT8KAk1BSaUn/r5IB2buo7qVtrN+uZK/F+rICSAWpEbXiQUBKyiMqd9hL+ZAPM1CONA3nIAuhIDeajh8SAYOZDvDmQN9JyAd+6lfZ3UxuKJ3fggJO8OZAO6lfLmQdrKgGSgDupHdc1MHvIADu6kcvspW2EzlQEmoJSaVFw1/FAS2d1O/QoA8SO95oCd0rpEbXiQRmQEkgWoB2Ege8gHmTulxoG85AGZO6QG8lbYQDacwQSgDbQ5AF+6jMgbixyvbFE573ZWtGYuPQBzlAabSrHW4JQZow11TJqiaebtJ7B9QvNodpC7GIZY6nJ6XHtbOrM09Nuw6j5Kk4vWT6R496hrnco7k6ePqaOk9XSSoUslXo3jjOXblkhdaSMHU5pHQekEH8FdpQM4GRe/uc47E5O08RP20W3v58zr+ZAzLDBMyop2yxOzRvaHMcOkHmWYW73zVIdEioqXQM3dRmUcuwmfCh6SBScUNSI+qAZO1lRm28qQ9r9cyVnfVASzILkiNpqLICRSB7qBuJeFAPaRmRxobvO8kAX/ADRf+FACMuxlQA0ocUW2kHMgDaVL+0DGeRpm4ZTu9bMM0uXoZ0DzI+A7VaMSrYsNoZqufdjbfL1noA7SVy/DaWp0l0gvLzSOzzO9hg6B8gPJWFBCiuWZ/daVWJ1DkakEfed6Fm+z7B+SididQ3bk2IQRzN6T583uHal9ouGZ6aPEmN2o/Vy+EnUfI6vNXOKNsMbY4mtbG1oa0DVYW1BY6ylZWU0tPOM0cjS13uKjSrd2jjL+ISrQM7J2dPxepUPs9xfNFJhcztqO74e1vSPI6/NXcHvLjRFTgON/96ll/iA+hH4rrWG1kWIUcNXB93I247OsHtBuFLiMCNekrdnEGE1KvjWF/eb6ex6r95BP7qMuwntKuLcbUid1DQhwQATtovtJAIyIB5kifzTtuoyoBqIKYGwlZAFne0mDrKLbSANZQCv/ACovxKvO0hlP3FMPN1/wCXpuMz/dQub7o7fMqqXGKZf27u8kX2Nrscn8rJ5qWNhWOV7GD1jg1vvsq/6DjM/3srm+KW3yC1mkNN+ycOdUT1DXTOOWJlibn3nqGtZR1dVO9GQwLr1WxhKyGFivkkSydNTW6eY16ZUsoKWTNBDreWnU5/1sPmStxo7FBo7hzPSI3OrKoCV7RbZHQD1dPmStBoTg/wC1MS9JqG5oKd13ZuJ/OB9T5da6I+gppJHSywtdI7nJ1q+xV0scDaWmVEXmqlFhbEmmdVzpvshqpNI3f8Km/if/AGXlkx2udu8m33D+6zaQS0zQykgjjztdc5QBl1dnSlgGHcq/0mVvqm/dt6z+S4aSSulquzMlv1VNETrt0Ota2BsXEcyxptPsNc6npsVyesyhlRl6DbUfjcfBY/s8xbkqh2Fzu2JNuHscOceY1+XarziFHHX0k9NNuzMLT2dR8udcemjmwzEXx/dz08m91EHUR+K+j0VqimWncuqbfnmcPXotJVtqWJou/wBTtN/EmVrsCxGPFsMgq287hZ7fZcOcfrsWXFnuiwurkYdpkD3N94BIVSrFR2Rdy9SRqx8RNtzQw4rPjuNSUFBM6Gip7maVmp8hvawPQL9I16lLSWgnocOfW4TVVUc0O25rpnPD2jnuHEjVz+S1n2YN/wBoO4tgfirzNEyZjo5G5muaQR1g84W5OqU8+RuyW+PmV9K1aqm4j1/U6/w6WMFDI6Wip5HnafE1zj2kXKyR1UEr8sc0bj1NeCVp9JMNkqsKgoKXM1rpo2nLwsGo+QC1+mNJQ0GBtdTRxU88L2ci5lmvGsA2I183OoI4myKiX1VTYlmfE1Vto1L+ZbS78ljlnjiy8rJG3xEC6rWkIbW6Ftq6hrXT8gx7XFouHG1yOpeXBsJpKnRLl6yNs0zoHlr36zGBewaTzAc+rpuskp25Mzl52PHVTuJkY3+Obf2Lpf2VglqIog3lZo4/G4BV/wCz+oknwDLK4uMcrmN7BYED5rJguDMZU4hW18LXSzVL8hlF7Rgm1r81/wALLB0KMc5rl2+ZmyodIxjmJ3vkWAHNra7M1yYcLnaVQ0Tm5PH8WooHf4SNxdEwG7W6+jqGtVXS6GKDSOsjhYyJgyENYABraCdXvutiKh4kyxZraX2NWbEeHAkqNvrbfz8PAtLTU4TV3y7XxDh2FWOgxKCtZsbMnsO+nYs1XSQ1UPJzNzDo6wetVevoJ8OmzZjkvsPGr/4VxbmVGFOzR/qi6dDpkWOrSztHepbwcvEuTaV4v+1sUe5jv8NDdkPuvrPmflZXiixdk8Lqav4mlnKjVcEW19XvWkn+z/ipcRbl6M8XR7wfouswTEKSW8ubX0OcxqkqlakbG6c/oWDRw4XRYZDSUtbTSOaLvc2QXc485tf9al68XxBtHT5YvvpBs9naVQK3Q6sosrp56d0TnW9W438gQtnRUv3dNSt59TW/U/iqr/IK2On/ANdO/NI/5e68jeweOaVLzR5WN+Z7sNo3V9Tt5svPK/8AXSVbWMbExrGN2W6mjyXP9I8SxDDKllLhfpEMULfWStiNpXnnNyLEDm+K18GmeNRb88Unjjb9LLawj/H5YIEfdMztV+xr12Ow8ZWKi2Q6nwKgfaLheWaLE4m7Mnq5feBqPmBbyCxQ/aBXf8xRU7vA5zfxupYnpnBiOFz0s+HyNdIyw2wQDzg8wOo2KuaelqaeVHZdPMrquupKmBWZrLy0Xc8mgmLeh4l6JK71FVsjuv6D583wXSJ4WTwvik2myMLHe4jWuHg5d1dnwaodVYRR1Mp9ZJA1zu0kC5WWKwo1ySpzMcFqFexYXciqaERuwvGsQwyp1SuaHMvxAE6x7wbq0aQVnoGEVNTmDXNjOTxHUPmVOuwylrhG6druUj1slYS17fcRrC8tTo/T1ha2vqKqqja64jkkAb8GgXWm+WOWRJH+F/h0N+OCWCJYo/Gy9L9Sv43iFZkwGgiqZIW1bI+Wla7aN7A6+fpusmmVDh+HYC7kIGtnke1okdtPNjc3J1nmVixHBKDEKaKnmjsyEeqLDYs1W1H4LA7R2hlgdDVuqKrMA3PPM5zgAQbA9HML25+lSMqY2qxdrLqnXUikpJXI9NFumiry0Nfip/yA3/Sxf0rPgJ/yTF/pn/Ve6TA6KWibROdO6mbwcs7m6jr5hYWHQnDgtJFRupI3VDYXcPLu1DqGvUDc+9RrMxY8v/VyRIJUlz6d22/P+jQaEzOpdE62oa3M+N0j2t6yGggfJGiMDcZo5a/FnGqlM5YGvcSxoABsG83T1dSsGG4NSYYxzaNsjWO52Okc5uvnNjqXli0ZoIpZOQlqoopDd9PHMWxu94Gv5qR9RG5Xqmiqu/0I46WVjY0Wyo1FRU9FNJoi6KXSzF3U+Xk8rsmXULB4AtboVf04/wB6a3/x/wDo1dDp8Dw+lrXVtM10crt7LI4NPZa9vJeebRTCamd81TBJNK83c587yerr7Apoa2KOfire1rEE2HzS0yQpa+ZV9fDxN4FCRjZYi2RuYO4Ssl0KpVEVLKXZVsUwl1Lmlp8zovZ6W/3C89Bik9Hst9ZH/wBM9HuKuI2locVwbM7laNu10x9BXN1uFywP49GtvD7fYsoapr04cxp6+rlrZuUd5BvQt/guHeixcpK318n8o6l5cGwp7ZuXqo8uXcZ29ZVhvsKTCaB6uWqqO8u1/X7GNXOluFHsA4l5Z6GknHrqaGTxxgr1HKkC3ZXRIqpsVytRd0NNNoxg0zHZqCNp7l2/gVr5tBcJf906oh8L7/iCrScu0gBvsqZtTM3Z6mu+jp395if0U2PQCjbM10tXNJH0sygE+8q3xxsiY2OLK1rWgBvQAOZZA7uoOVYyzyS2zrexlDTRQX4bbXBqT/18lJqR4VETivtpX4v1ZS2d1F+FAIj+ZDk7t/hRf+ZAF9lL2VJRGX2UA+NA3nIv3XIugEBvNRw+JPMndARG+g73Um05gglAAOwond+Clm7qM3dQADvJHaypkoBQEeBzVIHvIzIB7qAjbYTOXwp5u6glADCouGv4qYKCUBC/F+uZHe81MnoRfoQESNtB2s3wUrpZkAA7CQOve8lNRB7qAONA3nIzd1O6AiBvNRbZ8Seb80XQAN9DkNKCdtAA3FE7vwUtpK7siAd8qR2sqd0XQCO7lQP3vmnfVmQP3UBHLs/0plF3d1MuQA1Ij6qQSJ3UAh7SVnfVSJ20X2kAiNpqLZk8yCfzQADsJDu5lIpAoA40N3neSNpGZAACVtjKi6d+JAFttDvDmQ0pOKAYGwgjYRw7yXD8EA91K27mT3kicuVAFt5qY8KV9jMge8oAybPeTPhUb95MlANoSI+qk1Rcd1AACMqZO2lfb+SAdt1GVK/D8EOKAY3Erd1SUQe8gHbbQBrKRG1vOTbvO8kAm7zkcLUkIB8afGhCAiOLzQd34IQgG3eckOdvvKSEAzxLIhCAhwJ8fkhCATeL3odvfulCEAm8KXAhCAk7eagcSEIAbuI4QhCAfGjpKSEB/9k=",
    rating: 4.5,
    services: ["Microloans", "Crowdfunding"],
  },
  {
    name: "Axis Bank",
    logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
    rating: 4.7,
    services: ["CSR Programs", "No Documentation Loans"],
  },
  {
    name: "State Bank of India",
    logo: "data:image/png;base64,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",
    rating: 4.8,
    services: ["Microloans", "Crowdfunding", "CSR Programs"],
  },
  {
    name: "Union Bank of India",
    logo: "data:image/png;base64,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",
    rating: 4.6,
    services: ["Microloans", "No Documentation Loans"],
  },
  // Add more banks as needed
];
interface ChatMessage {
  sender: string;
  text: string;
}
export default function BankCommunityPage() {
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
            Join a Bank Community and Empower Your Financial Journey
          </h1>
          <p className="text-xl text-cyan-300 mb-6">
            Explore trusted banks offering inclusive financial solutions for
            unbanked users.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search banks by name or location..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border-blue-500 focus:border-cyan-400"
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Learn About Bank Communities
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gray-900 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400">
                What Are Bank Communities?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Bank Communities are initiatives that allow users to join with
                minimal documentation, providing access to crowdfunding,
                microloans, and CSR-backed financial support.
              </p>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Why Join a Bank Community?
              </h3>
              <ul className="list-disc list-inside text-white">
                <li>Simplified account creation process</li>
                <li>
                  Loans and financial support without tedious traditional
                  banking processes
                </li>
                <li>Participation in CSR-driven crowdfunding</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Featured Banks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.slice(0, 3).map((bank, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500 hover:border-cyan-400 transition-colors"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bank.services.map((service, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-cyan-300 px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-blue-400 border-blue-400 hover:bg-blue-900"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-cyan-400">
                          {bank.name} Community
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Learn more about our programs and benefits.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                          Our Programs
                        </h3>
                        <ul className="list-disc list-inside text-white">
                          {bank.services.map((service, i) => (
                            <li key={i}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Join Community
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
              <SelectContent className="bg-gray-800 text-white">
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
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500 hover:border-cyan-400 transition-colors"
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
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {bank.services.map((service, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-cyan-300 px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-blue-400 border-blue-400 hover:bg-blue-900"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-cyan-400">
                          {bank.name} Community
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Learn more about our programs and benefits.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                          Our Programs
                        </h3>
                        <ul className="list-disc list-inside text-white">
                          {bank.services.map((service, i) => (
                            <li key={i}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
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
              <CardTitle className="text-2xl font-bold text-cyan-400">
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-white space-y-4">
                <li>Browse and select a bank from our curated list.</li>
                <li>Join the community by providing basic details.</li>
                <li>
                  Participate in crowdfunding or request loans tailored for
                  unbanked users.
                </li>
                <li>
                  Access CSR-driven benefits and financial resources to grow
                  your financial stability.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-900 to-cyan-900 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                CSR Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Corporate Social Responsibility (CSR) initiatives from
                mid-to-large private companies contribute to bank communities,
                providing:
              </p>
              <ul className="list-disc list-inside text-white mb-4">
                <li>Funded loans for unbanked users</li>
                <li>Donations directed to community crowdfunding pools</li>
                <li>Financial literacy programs and resources</li>
              </ul>
              <Button className="bg-white text-blue-900 hover:bg-gray-200">
                Learn More About CSR Programs
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-900 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400">
                Crowdfunding Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Participate in our community-driven crowdfunding initiatives:
              </p>
              <ul className="list-disc list-inside text-white mb-4">
                <li>Contribute to crowdfunding pools to support others</li>
                <li>
                  Request loans from these pooled funds for your own needs
                </li>
                <li>Be part of a supportive financial community</li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Crowdfunding
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {chatbotOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-gray-900 rounded-lg shadow-lg border border-blue-500">
          <div className="p-4 border-b border-blue-500">
            <h3 className="text-lg font-bold text-cyan-400">
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
                      : "bg-gray-800 text-cyan-300"
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
                    Dashboard
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
                    Support
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
