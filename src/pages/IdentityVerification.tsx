
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IdCard, Upload, Check } from "lucide-react";
import Background3D from "@/components/Background3D";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IdentityVerification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idNumber: "",
    expiryDate: "",
    frontImage: null as File | null,
    backImage: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center">
      <Background3D />
      <div className="container px-4 py-16">
        <Card className="max-w-xl mx-auto p-8 glass-effect">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Identity Verification</h1>
            <p className="text-white/60">Please provide your identity card information</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <IdCard className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  required
                  type="text"
                  placeholder="Identity Card Number"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                />
              </div>

              <div className="relative">
                <Input
                  required
                  type="date"
                  placeholder="Expiry Date"
                  className="pl-4 bg-white/5 border-white/10 text-white"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <label className="block">
                  <div className="flex items-center justify-center w-full h-32 px-4 transition bg-white/5 border-2 border-white/10 border-dashed rounded-lg appearance-none cursor-pointer hover:border-white/20 focus:outline-none">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="w-6 h-6 text-white/60" />
                      <span className="text-sm text-white/60">Upload ID Card Front</span>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, frontImage: e.target.files?.[0] || null })}
                    />
                  </div>
                </label>

                <label className="block">
                  <div className="flex items-center justify-center w-full h-32 px-4 transition bg-white/5 border-2 border-white/10 border-dashed rounded-lg appearance-none cursor-pointer hover:border-white/20 focus:outline-none">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="w-6 h-6 text-white/60" />
                      <span className="text-sm text-white/60">Upload ID Card Back</span>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, backImage: e.target.files?.[0] || null })}
                    />
                  </div>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              Complete Verification
              <Check className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default IdentityVerification;
