
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, MapPin, Phone, Mail, Lock, ArrowRight } from "lucide-react";
import Background3D from "@/components/Background3D";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/identity-verification");
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center">
      <Background3D />
      <div className="container px-4 py-16">
        <Card className="max-w-xl mx-auto p-8 glass-effect">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-white/60">Join ForexPro and start trading today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="password"
                  placeholder="Password"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="text"
                  placeholder="Address"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              Continue to Identity Verification
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Already have an account?{" "}
              <a href="/sign-in" className="text-white hover:text-[#F2FF44]">
                Sign in
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateAccount;
