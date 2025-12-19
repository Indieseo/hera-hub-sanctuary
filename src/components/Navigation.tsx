import { Sparkles, Globe, Rocket, Zap, Crown } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "platform", label: "Platform Choice", icon: Globe },
    { id: "build", label: "Build Your Plan", icon: Rocket },
    { id: "automation", label: "Automation", icon: Zap },
    { id: "whyus", label: "Why Us", icon: Crown },
  ];

  return (
    <nav className="relative z-10 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl glass-card">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
                  transition-all duration-300 ease-out
                  ${isActive 
                    ? "gradient-bg text-primary-foreground shadow-rose" 
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
