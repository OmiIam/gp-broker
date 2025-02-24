
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";
import Background3D from "@/components/Background3D";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Background3D />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Advanced Analytics</h1>
          <p className="text-white/60">Comprehensive trading analysis and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-effect">
            <div className="flex items-center gap-4 mb-4">
              <LineChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">Technical Analysis</h3>
            </div>
            <p className="text-white/60">Advanced charting tools and indicators</p>
          </Card>

          <Card className="p-6 glass-effect">
            <div className="flex items-center gap-4 mb-4">
              <BarChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">Market Data</h3>
            </div>
            <p className="text-white/60">Real-time market statistics and trends</p>
          </Card>

          <Card className="p-6 glass-effect">
            <div className="flex items-center gap-4 mb-4">
              <PieChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">Portfolio Analysis</h3>
            </div>
            <p className="text-white/60">Detailed portfolio performance metrics</p>
          </Card>
        </div>

        <Card className="p-8 glass-effect">
          <div className="aspect-video flex items-center justify-center">
            <TrendingUp className="w-32 h-32 text-white/20" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
