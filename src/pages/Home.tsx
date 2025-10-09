import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, MapPin, Mic, Bell, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState<"normal" | "warning">("normal");

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">SafeStride</h1>
          <p className="text-sm text-muted-foreground">Real-time Safety Monitoring</p>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-primary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>
      </div>

      {/* Status Card */}
      <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">Current Status</span>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
            status === "normal" ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
          }`}>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span className="text-xs font-medium">
              {status === "normal" ? "Normal Walking" : "Abnormal Activity Detected"}
            </span>
          </div>
        </div>

        {/* Movement Indicator - Placeholder Wave */}
        <div className="h-24 rounded-xl bg-secondary/30 border border-primary/10 flex items-center justify-center mb-4 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 40" className="w-full h-full opacity-50">
              <path
                d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>
          <TrendingUp className="w-8 h-8 text-primary/50" />
        </div>

        {/* Central SOS Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowAlert(true)}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center shadow-lg animate-pulse-danger transition-all hover:scale-105 active:scale-95"
          >
            <div className="text-center">
              <Shield className="w-16 h-16 text-destructive-foreground mx-auto mb-2" />
              <span className="text-sm font-bold text-destructive-foreground">SOS</span>
            </div>
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Press and hold for 3 seconds to send emergency alert
        </p>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <Button variant="outline" className="flex flex-col h-20 border-primary/20 hover:bg-primary/10">
          <MapPin className="w-5 h-5 mb-1 text-primary" />
          <span className="text-xs">Share Location</span>
        </Button>
        <Button variant="outline" className="flex flex-col h-20 border-primary/20 hover:bg-primary/10">
          <Mic className="w-5 h-5 mb-1 text-primary" />
          <span className="text-xs">Voice Trigger</span>
        </Button>
        <Button variant="outline" className="flex flex-col h-20 border-primary/20 hover:bg-primary/10">
          <Shield className="w-5 h-5 mb-1 text-primary" />
          <span className="text-xs">Auto Mode</span>
        </Button>
      </div>

      {/* Last Alert Panel */}
      <Card className="p-4 bg-secondary/30 border-primary/10">
        <h3 className="text-sm font-semibold mb-2 text-foreground">Last Alert Sent</h3>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Time:</span>
            <span className="text-foreground">--:-- --</span>
          </div>
          <div className="flex justify-between">
            <span>Location:</span>
            <span className="text-foreground">No alerts sent</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="text-success">Resolved</span>
          </div>
        </div>
      </Card>

      {/* Alert Dialog */}
      <Dialog open={showAlert} onOpenChange={setShowAlert}>
        <DialogContent className="bg-card border-destructive/50">
          <DialogHeader>
            <DialogTitle className="text-destructive flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Abnormal Movement Detected!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Are you in danger? This will send an SOS alert to your emergency contacts with your current location.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-2 text-sm bg-secondary/30 p-3 rounded-lg">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span className="text-foreground">GPS: 37.7749° N, 122.4194° W</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="text-foreground">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setShowAlert(false)}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setShowAlert(false)}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Send SOS
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
