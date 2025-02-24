
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { TrendingUp, LineChart, CandlestickChart, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 glass-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">Portfolio Value</p>
                <h3 className="text-2xl font-bold text-white">$25,420.65</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
          <Card className="p-6 glass-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">24h Profit/Loss</p>
                <h3 className="text-2xl font-bold text-green-400">+$892.40</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </Card>
          <Card className="p-6 glass-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">Open Positions</p>
                <h3 className="text-2xl font-bold text-white">8</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <CandlestickChart className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="forex" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="forex" className="text-lg">Forex</TabsTrigger>
            <TabsTrigger value="crypto" className="text-lg">Crypto</TabsTrigger>
            <TabsTrigger value="stocks" className="text-lg">Stocks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="forex">
            <Card className="glass-effect p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Popular Pairs</h3>
                  {[
                    { pair: "EUR/USD", price: "1.0923", change: "+0.15%" },
                    { pair: "GBP/USD", price: "1.2634", change: "-0.08%" },
                    { pair: "USD/JPY", price: "148.12", change: "+0.22%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div>
                        <h4 className="text-white font-medium">{item.pair}</h4>
                        <p className="text-white/60">{item.price}</p>
                      </div>
                      <Button variant="outline" className="ml-4">
                        Trade
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <LineChart className="w-64 h-64 text-white/20" />
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="crypto">
            <Card className="glass-effect p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Top Cryptocurrencies</h3>
                  {[
                    { pair: "BTC/USD", price: "52,342.80", change: "+2.45%" },
                    { pair: "ETH/USD", price: "2,834.16", change: "+1.87%" },
                    { pair: "SOL/USD", price: "101.23", change: "+3.21%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div>
                        <h4 className="text-white font-medium">{item.pair}</h4>
                        <p className="text-white/60">{item.price}</p>
                      </div>
                      <Button variant="outline" className="ml-4">
                        Trade
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-64 h-64 text-white/20" />
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="stocks">
            <Card className="glass-effect p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Popular Stocks</h3>
                  {[
                    { pair: "AAPL", price: "182.52", change: "+0.75%" },
                    { pair: "MSFT", price: "404.30", change: "+1.23%" },
                    { pair: "GOOGL", price: "142.65", change: "+0.92%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div>
                        <h4 className="text-white font-medium">{item.pair}</h4>
                        <p className="text-white/60">{item.price}</p>
                      </div>
                      <Button variant="outline" className="ml-4">
                        Trade
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <CandlestickChart className="w-64 h-64 text-white/20" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
