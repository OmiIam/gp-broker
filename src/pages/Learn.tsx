
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, PlayCircle, Award } from "lucide-react";
import Background3D from "@/components/Background3D";

const Learn = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Background3D />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Trading Education</h1>
          <p className="text-white/60">Master the markets with our comprehensive learning resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 glass-effect hover-lift">
            <GraduationCap className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Trading Academy</h3>
            <p className="text-white/60 mb-6">
              Structured courses from beginner to advanced levels. Learn forex, crypto, and stock trading.
            </p>
          </Card>

          <Card className="p-8 glass-effect hover-lift">
            <BookOpen className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Market Guides</h3>
            <p className="text-white/60 mb-6">
              Comprehensive guides on trading strategies, risk management, and market analysis.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <PlayCircle className="w-8 h-8 text-white" />,
              title: "Video Tutorials",
              description: "Step-by-step video lessons"
            },
            {
              icon: <Award className="w-8 h-8 text-white" />,
              title: "Certification",
              description: "Professional trading certificates"
            },
            {
              icon: <BookOpen className="w-8 h-8 text-white" />,
              title: "Trading Blog",
              description: "Latest market insights"
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 glass-effect hover-lift">
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
