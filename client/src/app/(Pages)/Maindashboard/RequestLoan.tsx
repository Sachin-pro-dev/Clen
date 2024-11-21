"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LoanRequestPage() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(6);
  const [isAIAssistEnabled, setIsAIAssistEnabled] = useState(true);

  const handleLoanAmountChange = (value: number[]) => {
    setLoanAmount(value[0]);
  };

  const handleLoanTermChange = (value: string) => {
    setLoanTerm(parseInt(value));
  };

  const calculateMonthlyPayment = () => {
    const interestRate = 0.1; // 10% annual interest rate
    const monthlyRate = interestRate / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-4xl font-bold text-blue-400 glow-blue">
          Loan Request
        </h1>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold text-aqua-400 glow-aqua">
              Your Balance: $10,000
            </p>
            <p className="text-lg text-white">
              You are eligible for a loan up to $15,000
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 glow-blue">
            Request a Loan
          </Button>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
            >
              Personal Information
            </TabsTrigger>
            <TabsTrigger
              value="loan"
              className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
            >
              Loan Details
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
            >
              Documents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card className="bg-gray-900 border-blue-500">
              <CardHeader>
                <CardTitle className="text-aqua-400">
                  Personal Information
                </CardTitle>
                <CardDescription className="text-white">
                  Provide your personal details for the loan application.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-blue-300">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Sangeetha"
                      className="bg-gray-800 border-blue-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-blue-300">
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      className="bg-gray-800 border-blue-500 text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-blue-300">
                      Gender
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="gender"
                        className="bg-gray-800 border-blue-500 text-white"
                      >
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maritalStatus" className="text-blue-300">
                      Marital Status
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="maritalStatus"
                        className="bg-gray-800 border-blue-500 text-white"
                      >
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white">
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-blue-300">
                    Residential Address
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your full address"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-300">
                      Contact Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-gray-800 border-blue-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="bg-gray-800 border-blue-500 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="loan">
            <Card className="bg-gray-900 border-blue-500">
              <CardHeader>
                <CardTitle className="text-aqua-400">Loan Details</CardTitle>
                <CardDescription className="text-white">
                  Specify the details of your loan request.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="text-blue-300">
                    Loan Amount: ${loanAmount}
                  </Label>
                  <Slider
                    id="loanAmount"
                    min={1000}
                    max={15000}
                    step={100}
                    value={[loanAmount]}
                    onValueChange={handleLoanAmountChange}
                    className="glow-aqua text-blue-600 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loanPurpose" className="text-blue-300">
                    Loan Purpose
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="loanPurpose"
                      className="bg-gray-800 border-blue-500 text-white"
                    >
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white">
                      <SelectItem value="business">
                        Business Expansion
                      </SelectItem>
                      <SelectItem value="personal">Personal Needs</SelectItem>
                      <SelectItem value="emergency">Emergency Fund</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loanTerm" className="text-blue-300">
                    Loan Term (Months)
                  </Label>
                  <Select
                    value={loanTerm.toString()}
                    onValueChange={handleLoanTermChange}
                  >
                    <SelectTrigger
                      id="loanTerm"
                      className="bg-gray-800 border-blue-500 text-white"
                    >
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white">
                      <SelectItem value="3">3 months</SelectItem>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="rounded-lg bg-gray-800 p-4 glow-blue">
                  <p className="text-lg font-semibold text-blue-400">
                    Estimated Monthly Payment
                  </p>
                  <p className="text-3xl font-bold text-aqua-500 text-blue-400">
                    ${calculateMonthlyPayment()}
                  </p>
                  <p className="text-sm text-gray-400">
                    Based on 10% annual interest rate
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loanJustification" className="text-blue-300">
                    Loan Request Justification
                  </Label>
                  <Textarea
                    id="loanJustification"
                    placeholder="Explain how you plan to use the loan and your repayment strategy"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card className="bg-gray-900 border-blue-500">
              <CardHeader>
                <CardTitle className="text-aqua-400">
                  Required Documents
                </CardTitle>
                <CardDescription className="text-white">
                  Upload the necessary documents for your loan application.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="idProof" className="text-blue-300">
                    Proof of Identity (Aadhaar, Passport, etc.)
                  </Label>
                  <Input
                    id="idProof"
                    type="file"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressProof" className="text-blue-300">
                    Proof of Address (Utility Bill, Rental Agreement)
                  </Label>
                  <Input
                    id="addressProof"
                    type="file"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incomeProof" className="text-blue-300">
                    Proof of Income (Salary Slips, Bank Statements)
                  </Label>
                  <Input
                    id="incomeProof"
                    type="file"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-blue-300">
                    Recent Photograph
                  </Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="bg-gray-800 border-blue-500 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gray-900 border-blue-500">
          <CardHeader>
            <CardTitle className="text-aqua-400">
              AI-Assisted Loan Suggestions
            </CardTitle>
            <CardDescription className="text-white">
              Let our AI help you optimize your loan request.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch
                id="ai-assist"
                checked={isAIAssistEnabled}
                onCheckedChange={setIsAIAssistEnabled}
                className="glow-blue"
              />
              <Label htmlFor="ai-assist" className="text-blue-300">
                Enable AI Assistance
              </Label>
            </div>
            {isAIAssistEnabled && (
              <div className="mt-4 rounded-lg bg-blue-900 p-4 glow-blue">
                <p className="font-semibold text-aqua-400">AI Suggestion:</p>
                <p className="text-white">
                  Based on your profile and transaction history, we recommend:
                </p>
                <ul className="list-inside list-disc text-blue-300">
                  <li>Increase your loan amount to $7,500 for better terms</li>
                  <li>
                    Consider a 12-month repayment period for lower monthly
                    payments
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gray-900 border-blue-500">
          <CardHeader>
            <CardTitle className="text-aqua-400">
              Community Loan Option
            </CardTitle>
            <CardDescription className="text-white">
              Apply for a community-backed loan with more flexible terms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="bank">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="bank"
                  id="bank"
                  className="border-blue-500 text-aqua-400"
                />
                <Label htmlFor="bank" className="text-blue-300">
                  Bank-Backed Loan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="community"
                  id="community"
                  className="border-blue-500 text-aqua-400"
                />
                <Label htmlFor="community" className="text-blue-300">
                  Community-Backed Loan
                </Label>
              </div>
            </RadioGroup>
            <div className="mt-4">
              <p className="font-semibold text-blue-400">
                Current Community Pool:
              </p>
              <p className="text-aqua-300">
                $50,000 available from 25 contributors
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gray-900 border-blue-500">
          <CardHeader>
            <CardTitle className="text-aqua-400">Loan Agreement</CardTitle>
            <CardDescription className="text-white">
              Review and accept the loan terms and conditions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-800 p-4 glow-blue">
                <h3 className="mb-2 text-lg font-semibold text-blue-400">
                  Loan Terms Summary
                </h3>
                <ul className="list-inside list-disc space-y-1 text-blue-300">
                  <li>Loan Amount: ${loanAmount}</li>
                  <li>Interest Rate: 10% per annum</li>
                  <li>Repayment Period: {loanTerm} months</li>
                  <li>
                    Estimated Monthly Payment: ${calculateMonthlyPayment()}
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agree-terms"
                  className="rounded border-blue-500 text-aqua-600 focus:ring-aqua-500"
                />
                <Label htmlFor="agree-terms" className="text-blue-300">
                  I agree to the terms and conditions
                </Label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 glow-blue">
              Submit Loan Request
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="border-blue-500 text-aqua-400 hover:bg-blue-800">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 text-white border-blue-500">
                <p>Need help? Contact our support team</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
