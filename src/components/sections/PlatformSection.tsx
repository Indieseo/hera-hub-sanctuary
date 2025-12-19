import { useState } from "react";
import { Star, Check, X } from "lucide-react";

const PlatformSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'webflow' | 'wordpress'>('webflow');

  const features = [
    { name: "Design Freedom", webflow: 5, wordpress: 3, webflowLabel: "Unlimited", wordpressLabel: "Template-based" },
    { name: "Maintenance", webflow: 5, wordpress: 2, webflowLabel: "Zero updates", wordpressLabel: "Weekly updates" },
    { name: "AI Integration", webflow: 5, wordpress: 3, webflowLabel: "Native", wordpressLabel: "Plugin-dependent" },
    { name: "Page Speed", webflow: 5, wordpress: 3, webflowLabel: "95+ score", wordpressLabel: "70-85 score" },
    { name: "Security", webflow: 5, wordpress: 2, webflowLabel: "Enterprise-grade", wordpressLabel: "Requires plugins" },
    { name: "Scalability", webflow: 5, wordpress: 3, webflowLabel: "Instant", wordpressLabel: "Server-dependent" },
  ];

  const renderDots = (count: number, isWebflow: boolean) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div 
          key={dot}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            dot <= count 
              ? isWebflow 
                ? "bg-gradient-to-r from-primary to-secondary" 
                : "bg-stone-400"
              : "bg-stone-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Choose Your <span className="font-semibold gradient-text">Platform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how each platform stacks up for your digital sanctuary
          </p>
        </div>

        {/* Platform Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl glass-card">
            <button
              onClick={() => setSelectedPlatform('webflow')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedPlatform === 'webflow'
                  ? "gradient-bg text-primary-foreground shadow-rose"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Star className="w-4 h-4" />
              Webflow (Recommended)
            </button>
            <button
              onClick={() => setSelectedPlatform('wordpress')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedPlatform === 'wordpress'
                  ? "bg-stone-700 text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              WordPress
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="text-center p-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-medium gradient-text">Webflow</span>
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                  </th>
                  <th className="text-center p-6">
                    <span className="text-sm font-medium text-stone-500">WordPress</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={feature.name} 
                    className={`border-b border-border/50 ${index % 2 === 0 ? "bg-muted/30" : ""}`}
                  >
                    <td className="p-6">
                      <span className="font-medium text-foreground">{feature.name}</span>
                    </td>
                    <td className="p-6">
                      <div className="flex flex-col items-center gap-2">
                        {renderDots(feature.webflow, true)}
                        <span className="text-xs text-muted-foreground">{feature.webflowLabel}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex flex-col items-center gap-2">
                        {renderDots(feature.wordpress, false)}
                        <span className="text-xs text-muted-foreground">{feature.wordpressLabel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation Callout */}
        {selectedPlatform === 'webflow' && (
          <div className="gradient-bg rounded-3xl p-8 shadow-glow animate-scale-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Why We Recommend Webflow</h3>
                <p className="text-white/90 leading-relaxed">
                  Webflow delivers a modern, maintenance-free experience with native AI capabilities. 
                  Your team spends zero hours on plugin updates, security patches, or server management—freeing 
                  you to focus on what matters: empowering women entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformSection;
