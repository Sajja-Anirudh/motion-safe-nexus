import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Activity, Bell } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-destructive/10 animate-pulse-glow" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center glow-primary animate-pulse-glow">
            <Shield className="w-16 h-16 text-primary-foreground" />
          </div>
          <Activity className="absolute -top-2 -right-2 w-10 h-10 text-primary animate-bounce" />
        </div>

        {/* Title and Tagline */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            SafeStride
          </h1>
          <p className="text-xl text-muted-foreground max-w-sm">
            Smart, Automated Safety with Industry 4.0 Intelligence
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-8">
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card/50 border border-primary/20">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xs text-foreground">Auto SOS</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card/50 border border-primary/20">
            <Activity className="w-8 h-8 text-primary" />
            <span className="text-xs text-foreground">AI Detection</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card/50 border border-primary/20">
            <Bell className="w-8 h-8 text-primary" />
            <span className="text-xs text-foreground">Real-time</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/home")}
          size="lg"
          className="mt-8 w-full max-w-xs bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl h-14 glow-primary transition-all hover:scale-105"
        >
          Get Started
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Stay safe with automated walking pattern detection
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
