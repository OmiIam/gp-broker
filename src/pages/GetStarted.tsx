
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RocketIcon, CheckCircle2, Shield, Wallet } from "lucide-react";
import Background3D from "@/components/Background3D";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Background3D />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Start Trading Today</h1>
          <p className="text-white/60">Simple steps to begin your trading journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Create Account",
              description: "Quick and secure registration"
            },
            {
              icon: <Wallet className="w-8 h-8" />,
              title: "Fund Account",
              description: "Multiple payment methods"
            },
            {
              icon: <RocketIcon className="w-8 h-8" />,
              title: "Start Trading",
              description: "Access global markets"
            }
          ].map((step, index) => (
            <Card key={index} className="p-6 glass-effect text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 glass-effect mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose ForexPro?</h3>
              <ul className="space-y-4">
                {[
                  "Advanced Trading Platform",
                  "24/7 Expert Support",
                  "Competitive Spreads",
                  "Secure Trading Environment",
                  "Educational Resources"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Button className="px-8 py-6 text-lg bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                Create Account
                <RocketIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GetStarted;
