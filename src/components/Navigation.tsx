import { useState } from "react";
import { Sparkles, Globe, Rocket, Zap, Crown, Menu, X, Users, Calculator, MapPin, Clock } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "platform", label: "Platform", icon: Globe },
    { id: "build", label: "Build Plan", icon: Rocket },
    { id: "automation", label: "Automation", icon: Zap },
    { id: "locations", label: "Locations", icon: MapPin },
    { id: "roi", label: "ROI Calculator", icon: Calculator },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "testimonials", label: "Testimonials", icon: Users },
    { id: "whyus", label: "Why Us", icon: Crown },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-20 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap justify-center gap-2 p-2 rounded-2xl glass-card">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-sm
                  transition-all duration-300 ease-out
                  ${isActive 
                    ? "gradient-bg text-primary-foreground shadow-rose" 
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between p-3 rounded-2xl glass-card">
            <span className="text-sm font-medium text-foreground capitalize">
              {navItems.find(item => item.id === activeSection)?.label || "Menu"}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute left-6 right-6 mt-2 p-3 rounded-2xl glass-card shadow-lg animate-fade-in">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        flex items-center gap-2 px-3 py-3 rounded-xl font-medium text-sm
                        transition-all duration-300 ease-out
                        ${isActive 
                          ? "gradient-bg text-primary-foreground shadow-rose" 
                          : "text-muted-foreground hover:text-foreground hover:bg-card"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
