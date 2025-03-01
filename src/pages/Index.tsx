
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Bot, PieChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const ProductCard = ({ 
  title, 
  description, 
  icon: Icon, 
  popularityPercentage
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  popularityPercentage: number;
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="bg-slate-50 dark:bg-slate-800 pb-2">
        <div className="flex justify-between items-center">
          <Icon className="h-8 w-8 text-emerald-500" />
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {popularityPercentage}% of clients choose this
          </span>
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <CardDescription className="text-sm text-slate-600 dark:text-slate-300 min-h-[80px]">
          {description}
        </CardDescription>
      </CardContent>
      <Separator />
      <CardFooter className="p-4 flex flex-col space-y-3 w-full">
        <div className="flex justify-between w-full text-sm">
          <span className="font-medium">Popularity</span>
          <span className="text-slate-500">{popularityPercentage}%</span>
        </div>
        <Progress value={popularityPercentage} className="h-2" />
        <button className="w-full mt-4 py-3 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors font-medium">
          Learn More
        </button>
      </CardFooter>
    </Card>
  );
};

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Learn to Trade",
      description: "Master the markets with our comprehensive trading course. Perfect for beginners and intermediate traders.",
      icon: ChartLine,
      popularityPercentage: 65
    },
    {
      id: 2,
      title: "Automated Trading Bots",
      description: "Let our AI-powered bots trade for you. Set your risk tolerance and investment goals, then relax.",
      icon: Bot,
      popularityPercentage: 80
    },
    {
      id: 3,
      title: "Diversified Portfolio",
      description: "Create a balanced investment portfolio across multiple asset classes, optimized for your goals.",
      icon: PieChart,
      popularityPercentage: 70
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative pt-16 pb-24 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 dark:text-white mb-4">
          Financial Freedom <span className="text-emerald-500">Made Simple</span>
        </h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
          We provide the tools, knowledge, and strategies to help you achieve your financial goals.
        </p>
        
        {/* Products Grid */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              icon={product.icon}
              popularityPercentage={product.popularityPercentage}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-slate-800 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartLine className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get insights from experienced traders with proven track records.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-slate-600 dark:text-slate-300">
                State-of-the-art tools and AI-driven algorithms to optimize your trading.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Comprehensive strategies to protect your investments and grow your wealth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 bg-emerald-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Join thousands of successful traders who have transformed their financial future with our proven methods.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-md font-medium text-lg hover:bg-emerald-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer - Updated to remove links and only show contact and copyright */}
      <footer className="bg-slate-800 text-slate-300 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <p className="text-slate-400 mb-2">support@valueflowtrading.com</p>
            <p className="text-slate-400 mb-2">+1 (555) 123-4567</p>
            <p className="text-slate-400">123 Trading St, New York, NY</p>
          </div>
          
          <div className="pt-8 border-t border-slate-700 text-slate-400">
            <p>© 2023 Value Flow Trading LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
