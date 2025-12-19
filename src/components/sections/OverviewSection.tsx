import { Sparkles, DollarSign, Zap, Rocket, ArrowRight } from "lucide-react";

interface OverviewSectionProps {
  onBuildPlan: () => void;
}

const OverviewSection = ({ onBuildPlan }: OverviewSectionProps) => {
  const valueProps = [
    {
      icon: DollarSign,
      title: "Save $1,800+/year",
      description: "No plugin fees ever",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Zap,
      title: "3 Automation Workflows",
      description: "Booking, routing, AI",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Scale in Minutes",
      description: "Instant franchise pages",
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Card */}
        <div className="gradient-border rounded-3xl overflow-hidden">
          <div className="bg-card p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-6 max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-subtle border border-rose-200/50">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Modern Fancy Experience</span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                  Your <span className="font-semibold gradient-text">Digital Sanctuary</span> Awaits
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Replace the sterile, boxy designs of yesterday with a serene digital experience 
                  that reflects the warmth and sophistication of the Hera Hub brand. Your members 
                  deserve a platform as inspiring as the spaces you create.
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-3">
                  {["No annual plugin fees", "Automation included", "AI-ready from day one"].map((pill) => (
                    <span 
                      key={pill}
                      className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing CTA */}
              <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
                <div className="text-center lg:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="text-5xl font-light gradient-text">$4,500</p>
                </div>
                <button 
                  onClick={onBuildPlan}
                  className="group flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-primary-foreground font-medium shadow-rose hover-lift"
                >
                  Build Your Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div 
                key={prop.title}
                className="glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
