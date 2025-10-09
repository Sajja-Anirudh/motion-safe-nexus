import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Phone, Mail, Send } from "lucide-react";

const Contacts = () => {
  const emergencyContacts = [
    { name: "John Doe", phone: "+1 234 567 8900", relation: "Family", email: "john@example.com" },
    { name: "Jane Smith", phone: "+1 234 567 8901", relation: "Friend", email: "jane@example.com" },
    { name: "Emergency Services", phone: "911", relation: "Emergency", email: "emergency@911.com" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Trusted Contacts</h1>
          <p className="text-sm text-muted-foreground">Emergency contact list</p>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </div>

      {/* Contacts List */}
      <div className="space-y-3">
        {emergencyContacts.map((contact, index) => (
          <Card key={index} className="p-4 bg-card/50 border-primary/20 backdrop-blur hover:border-primary/40 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{contact.name}</h3>
                <span className="text-xs text-primary px-2 py-1 rounded-full bg-primary/20 inline-block mt-1">
                  {contact.relation}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold">
                {contact.name.charAt(0)}
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{contact.email}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 border-primary/20">
                <Phone className="w-3 h-3 mr-1" />
                Call
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-primary/20">
                <Send className="w-3 h-3 mr-1" />
                Alert
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Test Alert Button */}
      <Card className="p-4 bg-gradient-to-r from-secondary/50 to-secondary/30 border-primary/20">
        <h3 className="font-semibold mb-2 text-foreground">Test Alert System</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Send a test SOS message to all contacts to verify the alert system is working properly.
        </p>
        <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
          <Send className="w-4 h-4 mr-2" />
          Send Test Alert
        </Button>
      </Card>

      {/* Import Contacts */}
      <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
        Import from Phone Contacts
      </Button>
    </div>
  );
};

export default Contacts;
