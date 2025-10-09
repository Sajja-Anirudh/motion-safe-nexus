import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Vibrate, Mic, MapPin, Radio, Gauge } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [autoSOS, setAutoSOS] = useState(true);
  const [shakeAlert, setShakeAlert] = useState(true);
  const [voiceActivated, setVoiceActivated] = useState(false);
  const [liveGPS, setLiveGPS] = useState(true);
  const [backgroundMonitoring, setBackgroundMonitoring] = useState(true);
  const [sensitivity, setSensitivity] = useState("medium");

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Configure safety preferences</p>
      </div>

      {/* Detection Settings */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Shield className="w-5 h-5 text-primary" />
          Detection Settings
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Auto SOS on Abnormal Movement</p>
              <p className="text-xs text-muted-foreground">Automatically trigger alerts when unusual patterns detected</p>
            </div>
            <Switch checked={autoSOS} onCheckedChange={setAutoSOS} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Shake-to-Alert</p>
              <p className="text-xs text-muted-foreground">Shake phone vigorously to send SOS</p>
            </div>
            <Switch checked={shakeAlert} onCheckedChange={setShakeAlert} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Voice-Activated SOS</p>
              <p className="text-xs text-muted-foreground">Say "Help" or "Emergency" to trigger alert</p>
            </div>
            <Switch checked={voiceActivated} onCheckedChange={setVoiceActivated} />
          </div>
        </div>
      </Card>

      {/* Tracking Settings */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          Tracking & Monitoring
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Live GPS Tracking</p>
              <p className="text-xs text-muted-foreground">Share real-time location with contacts</p>
            </div>
            <Switch checked={liveGPS} onCheckedChange={setLiveGPS} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Enable Background Monitoring</p>
              <p className="text-xs text-muted-foreground">Keep monitoring even when app is closed</p>
            </div>
            <Switch checked={backgroundMonitoring} onCheckedChange={setBackgroundMonitoring} />
          </div>
        </div>
      </Card>

      {/* Sensitivity Settings */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Gauge className="w-5 h-5 text-primary" />
          Detection Sensitivity
        </h3>
        
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Adjust how sensitive the app is to unusual movement patterns
          </p>
          <Select value={sensitivity} onValueChange={setSensitivity}>
            <SelectTrigger className="bg-input border-primary/20">
              <SelectValue placeholder="Select sensitivity" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-primary/20">
              <SelectItem value="low">Low - Fewer false alerts</SelectItem>
              <SelectItem value="medium">Medium - Balanced (Recommended)</SelectItem>
              <SelectItem value="high">High - Maximum protection</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 border border-primary/10">
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              Current: <span className="text-foreground font-medium capitalize">{sensitivity}</span> sensitivity
            </span>
          </div>
        </div>
      </Card>

      {/* Test Detection */}
      <Card className="p-4 bg-gradient-to-r from-secondary/50 to-secondary/30 border-primary/20">
        <h3 className="font-semibold mb-2 text-foreground">Test Detection System</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Verify that movement detection and alerts are working correctly
        </p>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
          Run Test Detection
        </Button>
      </Card>

      {/* Notification Settings */}
      <Card className="p-4 bg-card/50 border-primary/20 backdrop-blur">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Radio className="w-5 h-5 text-primary" />
          Notifications
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Vibration Alerts</p>
              <p className="text-xs text-muted-foreground">Vibrate on abnormal detection</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-foreground">Sound Alerts</p>
              <p className="text-xs text-muted-foreground">Play alarm sound on detection</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
