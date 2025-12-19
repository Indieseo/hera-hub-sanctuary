import { Heart, Rocket, Crown, Check, MapPin, Search, Calendar, Bot, BarChart3, Users } from "lucide-react";

interface BuildPlanSectionProps {
  selectedTier: string;
  setSelectedTier: (tier: string) => void;
  selectedAddons: string[];
  setSelectedAddons: (addons: string[]) => void;
}

const BuildPlanSection = ({ 
  selectedTier, 
  setSelectedTier, 
  selectedAddons, 
  setSelectedAddons 
}: BuildPlanSectionProps) => {
  const tiers = [
    {
      id: "starter",
      name: "Starter",
      price: 4500,
      icon: Heart,
      gradient: "from-rose-400 to-rose-500",
      features: ["15 pages", "3 locations", "Basic SEO setup", "2 revision rounds"],
    },
    {
      id: "growth",
      name: "Growth",
      price: 8500,
      icon: Rocket,
      gradient: "from-violet-400 to-purple-500",
      popular: true,
      features: ["40 pages", "7 locations", "n8n automation suite", "ADA & GDPR compliance", "3 revision rounds"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 14500,
      icon: Crown,
      gradient: "from-amber-400 to-orange-500",
      features: ["Unlimited pages", "All 17 locations", "Full automation stack", "AI content generation", "Unlimited revisions"],
    },
  ];

  const addons = [
    { id: "seo-local", name: "Local SEO Package", price: 1200, description: "GBP optimization for all locations", icon: MapPin },
    { id: "geo", name: "GEO Setup", price: 800, description: "AI search engine optimization", icon: Search },
    { id: "booking", name: "Custom Booking Engine", price: 1500, description: "Seamless Optix integration", icon: Calendar },
    { id: "ai-content", name: "AI Content Migration", price: 2000, description: "100+ pages with hyper-local copy", icon: Bot },
    { id: "analytics", name: "Advanced Analytics", price: 600, description: "Custom dashboards & reporting", icon: BarChart3 },
    { id: "training", name: "Team Training", price: 400, description: "2-hour session + documentation", icon: Users },
  ];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 pb-32 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Build Your <span className="font-semibold gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a tier and customize with add-ons that fit your vision
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const isSelected = selectedTier === tier.id;
            
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`
                  relative text-left p-8 rounded-3xl transition-all duration-300 hover-lift
                  ${isSelected 
                    ? "glass-card ring-2 ring-primary shadow-rose" 
                    : "glass-card hover:ring-1 hover:ring-border"
                  }
                `}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-xs font-medium text-white shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-2">{tier.name}</h3>
                <p className="text-4xl font-light gradient-text mb-6">${tier.price.toLocaleString()}</p>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-success shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {isSelected && (
                  <div className="absolute top-6 right-6 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-foreground text-center">
            Enhance with <span className="font-semibold gradient-text">Add-ons</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => {
              const Icon = addon.icon;
              const isSelected = selectedAddons.includes(addon.id);
              
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`
                    flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300
                    ${isSelected 
                      ? "glass-card ring-2 ring-secondary shadow-violet" 
                      : "glass-card hover:ring-1 hover:ring-border"
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all
                    ${isSelected 
                      ? "bg-gradient-to-br from-violet-400 to-purple-500" 
                      : "bg-muted"
                    }
                  `}>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-muted-foreground"}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-medium text-foreground truncate">{addon.name}</h4>
                      <span className="text-sm font-medium gradient-text shrink-0">+${addon.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>

                  <div className={`
                    w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all
                    ${isSelected 
                      ? "border-secondary bg-secondary" 
                      : "border-border"
                    }
                  `}>
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildPlanSection;
