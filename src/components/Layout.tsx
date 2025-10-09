import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Activity, Users, Settings, BarChart3 } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/home", icon: Home, label: "Home" },
    { path: "/activity", icon: Activity, label: "Activity" },
    { path: "/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/contacts", icon: Users, label: "Contacts" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card border-t border-primary/20 backdrop-blur-lg">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 transition-all flex-1 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-all ${isActive ? "glow-primary" : ""}`} 
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
