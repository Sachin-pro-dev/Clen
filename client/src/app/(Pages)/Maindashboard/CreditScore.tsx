"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
// import { toast } from '@/components/ui/use-toast'
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number.",
    }),
  dateOfBirth: z.date({ required_error: "Please select a date of birth." }),
  loanAmount: z.number().positive({ message: "Loan amount must be positive." }),
  interestRate: z
    .number()
    .min(0)
    .max(100, { message: "Interest rate must be between 0 and 100." }),
  loanDuration: z
    .number()
    .positive({ message: "Loan duration must be positive." }),
  durationUnit: z.enum(["Months", "Years"]),
  penalty: z.enum(["Yes", "No"]),
  penaltyDescription: z.string().optional(),
  repaymentStatus: z.enum(["Fully Repaid", "Partially Repaid", "Defaulted"]),
  monthlyIncome: z
    .number()
    .positive({ message: "Monthly income must be positive." }),
  incomeSources: z.string(),
  employmentStatus: z.enum([
    "Employed",
    "Self-employed",
    "Freelancer",
    "Unemployed",
  ]),
  businessType: z.string().optional(),
  otherIncomeSource: z.string().optional(),
  expenses: z
    .number()
    .nonnegative({ message: "Expenses must be non-negative." }),
  dependents: z
    .number()
    .nonnegative({ message: "Number of dependents must be non-negative." }),
  otherLoans: z
    .number()
    .nonnegative({ message: "Other loans amount must be non-negative." }),
});

export default function CreditScorePage() {
  const [showForm, setShowForm] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [creditScore, setCreditScore] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      loanAmount: 0,
      interestRate: 0,
      loanDuration: 0,
      durationUnit: "Months",
      penalty: "No",
      penaltyDescription: "",
      repaymentStatus: "Fully Repaid",
      monthlyIncome: 0,
      incomeSources: "",
      employmentStatus: "Employed",
      businessType: "",
      otherIncomeSource: "",
      expenses: 0,
      dependents: 0,
      otherLoans: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Hardcoded credit score (in a real application, this would be calculated based on the form data)
    const hardcodedScore = 720;

    setCreditScore(hardcodedScore);
    setDialogOpen(true);

    toast({
      title: "Form submitted successfully",
      description: "Your credit score has been calculated.",
    });
  }

  function getCreditScoreCategory(score: number) {
    if (score >= 800) return "Excellent";
    if (score >= 740) return "Very Good";
    if (score >= 670) return "Good";
    if (score >= 580) return "Fair";
    return "Poor";
  }

  function getCreditScoreColor(score: number) {
    if (score >= 800) return "text-green-500";
    if (score >= 740) return "text-blue-500";
    if (score >= 670) return "text-yellow-500";
    if (score >= 580) return "text-orange-500";
    return "text-red-500";
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Nano-Entrepreneur Credit Score Check
      </h1>

      {!showForm ? (
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Check Credit Score
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Previous Loan Details
                </h2>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1234567890"
                          {...field}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-gray-800 border-green-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="5000"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interestRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interest Rate (%)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="5"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="loanDuration"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Loan Duration</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="12"
                            {...field}
                            onChange={(e) => field.onChange(+e.target.value)}
                            className="bg-gray-800 border-green-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="durationUnit"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Duration Unit</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-800 border-green-500">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Months">Months</SelectItem>
                            <SelectItem value="Years">Years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="penalty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any Penalty</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 border-green-500">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.watch("penalty") === "Yes" && (
                  <FormField
                    control={form.control}
                    name="penaltyDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Penalty Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Describe the penalty"
                            {...field}
                            className="bg-gray-800 border-green-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="repaymentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repayment Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 border-green-500">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fully Repaid">
                            Fully Repaid
                          </SelectItem>
                          <SelectItem value="Partially Repaid">
                            Partially Repaid
                          </SelectItem>
                          <SelectItem value="Defaulted">Defaulted</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Income Details</h2>
                <FormField
                  control={form.control}
                  name="monthlyIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Income</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="3000"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="incomeSources"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Income Sources</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Salary, Freelancing, etc."
                          {...field}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormDescription>
                        Separate multiple sources with commas
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employmentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employment Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 border-green-500">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Employed">Employed</SelectItem>
                          <SelectItem value="Self-employed">
                            Self-employed
                          </SelectItem>
                          <SelectItem value="Freelancer">Freelancer</SelectItem>
                          <SelectItem value="Unemployed">Unemployed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.watch("employmentStatus") === "Self-employed" && (
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Shop Owner, Freelancer"
                            {...field}
                            className="bg-gray-800 border-green-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="otherIncomeSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Sources of Income</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Rental income, investments, etc."
                          {...field}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expenses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Expenses</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="1000"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dependents"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Dependents</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherLoans"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Loans (Total Amount)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                          className="bg-gray-800 border-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Check Credit Score
              </Button>
              <Button
                type="reset"
                variant="destructive"
                onClick={() => form.reset()}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Clear All
              </Button>
            </div>
          </form>
        </Form>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">
              Your Credit Score
            </DialogTitle>
            <DialogDescription>
              Based on the information you provided, here's your estimated
              credit score:
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <div className="text-center">
              <span
                className={`text-6xl font-bold ${getCreditScoreColor(
                  creditScore
                )}`}
              >
                {creditScore}
              </span>
              <p className="text-xl mt-2">
                {getCreditScoreCategory(creditScore)}
              </p>
            </div>
            <Progress value={(creditScore / 850) * 100} className="mt-4" />
            <div className="flex justify-between text-sm mt-2">
              <span>300</span>
              <span>850</span>
            </div>
          </div>
          <DialogFooter className="flex flex-col space-y-4">
            <p className="text-sm text-gray-400">
              Credit scores typically range from 300 to 850. A higher score
              indicates better creditworthiness.
            </p>
            <Button
              onClick={() => setDialogOpen(false)}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
