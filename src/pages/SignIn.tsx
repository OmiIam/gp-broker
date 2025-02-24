
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn, Lock, Mail } from "lucide-react";
import Background3D from "@/components/Background3D";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center">
      <Background3D />
      <div className="container px-4">
        <Card className="max-w-md mx-auto p-8 glass-effect">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to your ForexPro account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <Button className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              Sign In
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Forgot your password?
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-white/60">
              Don't have an account?{" "}
              <Link to="/create-account" className="text-white hover:text-[#F2FF44]">
                Create one now
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
