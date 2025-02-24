
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">ForexPro</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-white/80 hover:text-white transition-colors">Dashboard</Link>
          <Link to="/markets" className="text-white/80 hover:text-white transition-colors">Markets</Link>
          <Link to="/analytics" className="text-white/80 hover:text-white transition-colors">Analytics</Link>
          <Link to="/learn" className="text-white/80 hover:text-white transition-colors">Learn</Link>
          <Link to="/get-started">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Get Started
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              Sign in
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
