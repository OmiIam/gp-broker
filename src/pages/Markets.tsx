
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, LineChart } from "lucide-react";
import Background3D from "@/components/Background3D";

const Markets = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Background3D />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Global Markets</h1>
          <p className="text-white/60">Access real-time market data and trade multiple asset classes</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Markets</TabsTrigger>
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "EUR/USD", price: "1.0923", change: "+0.15%", trend: "up" },
                { name: "BTC/USD", price: "52,342.80", change: "-1.23%", trend: "down" },
                { name: "AAPL", price: "182.52", change: "+0.75%", trend: "up" },
                { name: "ETH/USD", price: "2,834.16", change: "+1.87%", trend: "up" },
                { name: "GBP/USD", price: "1.2634", change: "-0.08%", trend: "down" },
                { name: "MSFT", price: "404.30", change: "+1.23%", trend: "up" },
              ].map((market, index) => (
                <Card key={index} className="p-6 glass-effect hover-lift">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{market.name}</h3>
                    {market.trend === "up" ? (
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{market.price}</div>
                  <div className={`text-sm ${market.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {market.change}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Markets;
