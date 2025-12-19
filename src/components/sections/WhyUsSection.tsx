import { Check, X, ArrowRight } from "lucide-react";

interface WhyUsSectionProps {
  onBuildPlan: () => void;
}

const WhyUsSection = ({ onBuildPlan }: WhyUsSectionProps) => {
  const comparisons = [
    { feature: "Platform", ours: "Webflow (Modern)", theirs: "WordPress (Legacy)", win: true },
    { feature: "Plugin Updates", ours: "None needed", theirs: "Constant maintenance", win: true },
    { feature: "ADA Compliance", ours: "Built-in ($0/year)", theirs: "$490/year plugin", win: true },
    { feature: "GDPR/Privacy", ours: "Native ($0/year)", theirs: "$119/year plugin", win: true },
    { feature: "Page Speed", ours: "95+ PageSpeed", theirs: "70-85 with plugins", win: true },
    { feature: "AI Automation", ours: "n8n workflows included", theirs: "Not included", win: true },
    { feature: "Booking Integration", ours: "Seamless (no redirect)", theirs: "External links", win: true },
    { feature: "Lead Routing", ours: "Automated by location", theirs: "Manual", win: true },
    { feature: "AI Content", ours: "Hyper-local generation", theirs: "Manual migration", win: true },
    { feature: "Ongoing Costs", ours: "~$50-80/month", theirs: "$609+/year plugins", win: true },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Why <span className="font-semibold gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A side-by-side comparison that speaks for itself
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="text-left p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold gradient-text">✨ Our Approach</span>
                    </div>
                  </th>
                  <th className="text-left p-6">
                    <span className="text-sm font-medium text-stone-500">WordPress Alternative</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={row.feature} 
                    className={`border-b border-border/50 ${index % 2 === 0 ? "bg-muted/30" : ""}`}
                  >
                    <td className="p-6">
                      <span className="font-medium text-foreground">{row.feature}</span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-foreground font-medium">{row.ours}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-3 h-3 text-destructive" />
                        </div>
                        <span className="text-muted-foreground">{row.theirs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Savings Callout */}
        <div className="gradient-bg-success rounded-3xl p-8 md:p-12 shadow-glow">
          <div className="text-center space-y-4">
            <p className="text-white/80 text-lg">Annual Plugin Savings</p>
            <p className="text-6xl md:text-7xl font-light text-white">$1,809</p>
            <p className="text-white/90 max-w-xl mx-auto">
              No ADA plugin ($490), no GDPR plugin ($119), no cache plugin ($200+), 
              no security plugin ($300+), plus zero maintenance hours.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-light text-foreground">
            Ready to Build Your <span className="font-semibold gradient-text">Digital Sanctuary</span>?
          </h3>
          <button 
            onClick={onBuildPlan}
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-2xl gradient-bg text-primary-foreground font-medium text-lg shadow-rose hover-lift"
          >
            Build Your Custom Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-muted-foreground">
            Empower 20,000+ women with a platform that works as hard as you do
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
