import { Card } from "@/components/ui/card";
import { Calendar, MapPin, AlertTriangle, TrendingUp, Shield } from "lucide-react";

const Analytics = () => {
  const alertHistory = [
    { 
      date: "2025-10-08", 
      time: "14:32", 
      type: "Abnormal Movement", 
      duration: "12s",
      location: "Market Street, SF",
      severity: "high"
    },
    { 
      date: "2025-10-07", 
      time: "09:15", 
      type: "Fall Detected", 
      duration: "8s",
      location: "Park Avenue, SF",
      severity: "critical"
    },
    { 
      date: "2025-10-05", 
      time: "18:45", 
      type: "Sudden Stop", 
      duration: "15s",
      location: "Downtown SF",
      severity: "medium"
    },
  ];

  const stats = [
    { label: "Total Alerts", value: "12", icon: AlertTriangle, color: "text-destructive" },
    { label: "Avg Stability Score", value: "89%", icon: TrendingUp, color: "text-success" },
    { label: "Days Protected", value: "47", icon: Shield, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics & History</h1>
        <p className="text-sm text-muted-foreground">Your safety insights</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-4 bg-card/50 border-primary/20 backdrop-blur">
              <Icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Weekly Overview */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-4 text-foreground">Weekly Movement Stability</h3>
        <div className="h-32 flex items-end justify-between gap-2">
          {[65, 78, 92, 85, 91, 88, 94].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-muted-foreground">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Alert Timeline */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Recent Alerts
        </h3>
        
        {alertHistory.map((alert, index) => (
          <Card key={index} className="p-4 bg-card/50 border-primary/20 backdrop-blur hover:border-primary/40 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{alert.type}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    alert.severity === "critical" 
                      ? "bg-destructive/20 text-destructive" 
                      : alert.severity === "high"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{alert.date} at {alert.time}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                {alert.duration}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm bg-secondary/30 p-2 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground">{alert.location}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Map Preview */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          Alert Locations
        </h3>
        
        {/* Map Placeholder */}
        <div className="h-48 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-primary/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="30" cy="40" r="2" fill="hsl(var(--destructive))" />
              <circle cx="50" cy="60" r="2" fill="hsl(var(--destructive))" />
              <circle cx="70" cy="35" r="2" fill="hsl(var(--destructive))" />
            </svg>
          </div>
          <div className="text-center z-10">
            <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Interactive map view</p>
          </div>
        </div>
      </Card>

      {/* Insights */}
      <Card className="p-4 bg-gradient-to-r from-secondary/50 to-secondary/30 border-primary/20">
        <h3 className="font-semibold mb-2 text-foreground">Safety Insights</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-success">✓</span>
            <span className="text-muted-foreground">Your movement stability has improved by 12% this week</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">Most alerts occur during evening hours (6-8 PM)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">Average response time: 3.2 seconds</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Analytics;
