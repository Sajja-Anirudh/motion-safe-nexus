import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Activity, Gauge, TrendingUp, AlertTriangle } from "lucide-react";
import { useState } from "react";

const ActivityMonitor = () => {
  const [autoDetect, setAutoDetect] = useState(true);

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Activity Monitor</h1>
        <p className="text-sm text-muted-foreground">Real-time sensor data analysis</p>
      </div>

      {/* Auto Detection Toggle */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground">Auto Detection Mode</h3>
            <p className="text-xs text-muted-foreground">Automatically monitor movement patterns</p>
          </div>
          <Switch checked={autoDetect} onCheckedChange={setAutoDetect} />
        </div>
      </Card>

      {/* Sensor Data Visualization */}
      <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Movement Pattern</h3>
        </div>
        
        {/* Waveform placeholder */}
        <div className="h-40 rounded-xl bg-secondary/30 border border-primary/10 flex items-center justify-center overflow-hidden relative">
          <svg viewBox="0 0 400 100" className="w-full h-full">
            <path
              d="M0,50 Q20,30 40,50 T80,50 Q100,70 120,50 T160,50 Q180,30 200,50 T240,50 Q260,40 280,50 T320,50 Q340,60 360,50 T400,50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              className="opacity-70"
            />
            <path
              d="M0,50 Q20,35 40,50 T80,50 Q100,65 120,50 T160,50 Q180,35 200,50 T240,50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="opacity-40"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
        </div>
        
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          <span>0s</span>
          <span>Live Data</span>
          <span>30s</span>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-br from-card to-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Gauge className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Current Speed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">4.2 <span className="text-sm text-muted-foreground">km/h</span></p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-card to-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-success/20">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <span className="text-xs text-muted-foreground">Stability</span>
          </div>
          <p className="text-2xl font-bold text-success">92%</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-card to-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-destructive/20">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-xs text-muted-foreground">Last Fall</span>
          </div>
          <p className="text-sm font-semibold text-foreground">No events</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-card to-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Steps Today</span>
          </div>
          <p className="text-2xl font-bold text-foreground">3,847</p>
        </Card>
      </div>

      {/* Sensor Status */}
      <Card className="p-4 bg-card/50 border-primary/20">
        <h3 className="font-semibold mb-3 text-foreground">Sensor Status</h3>
        <div className="space-y-3">
          {[
            { name: "Accelerometer", status: "Active", color: "text-success" },
            { name: "Gyroscope", status: "Active", color: "text-success" },
            { name: "GPS Tracker", status: "Active", color: "text-success" },
            { name: "Motion Detector", status: "Active", color: "text-success" },
          ].map((sensor) => (
            <div key={sensor.name} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{sensor.name}</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${sensor.color === "text-success" ? "bg-success" : "bg-destructive"} animate-pulse`} />
                <span className={`text-xs font-medium ${sensor.color}`}>{sensor.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ActivityMonitor;
