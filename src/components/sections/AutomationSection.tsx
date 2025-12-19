import { useState } from "react";
import { Clock, MapPin, Bot, ChevronDown, ArrowRight } from "lucide-react";

const AutomationSection = () => {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(0);

  const workflows = [
    {
      icon: Clock,
      title: "Seamless Custom Booking",
      gradient: "from-rose-400 to-rose-500",
      preview: "Keep visitors in your branded experience",
      steps: [
        { label: "Trigger", content: "User selects room & time on YOUR site" },
        { label: "Action", content: "n8n sends GraphQL query to Optix" },
        { label: "Result", content: "Instant pricing appears—no portal redirect" },
      ],
      benefit: "Keep visitors in your branded experience, increasing conversions by up to 40%",
    },
    {
      icon: MapPin,
      title: "Franchise Lead Routing",
      gradient: "from-violet-400 to-purple-500",
      preview: "Faster response, happier prospects",
      steps: [
        { label: "Trigger", content: "Inquiry for specific location (e.g., Mission Valley)" },
        { label: "Action", content: "n8n routes to that Community Manager via Slack" },
        { label: "Result", content: "Personalized email sequence starts in Postmark" },
      ],
      benefit: "Response time drops from hours to minutes, dramatically improving conversion rates",
    },
    {
      icon: Bot,
      title: "AI Content Generator",
      gradient: "from-amber-400 to-orange-500",
      preview: "Scale locations in minutes, not weeks",
      steps: [
        { label: "Trigger", content: "New franchise added to Airtable" },
        { label: "Action", content: "GPT-4o writes hyper-local, SEO-optimized copy" },
        { label: "Result", content: "Page auto-publishes to your site" },
      ],
      benefit: "Launch new location pages with unique, SEO-optimized content in minutes",
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Automation <span className="font-semibold gradient-text">Workflows</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by n8n, these workflows run 24/7 saving you hours every week
          </p>
        </div>

        {/* Workflow Accordions */}
        <div className="space-y-4">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            const isExpanded = expandedWorkflow === index;
            
            return (
              <div 
                key={workflow.title}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedWorkflow(isExpanded ? null : index)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${workflow.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{workflow.title}</h3>
                    <p className="text-sm text-muted-foreground">{workflow.preview}</p>
                  </div>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className={`
                  overflow-hidden transition-all duration-300
                  ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}>
                  <div className="px-6 pb-6 space-y-6">
                    {/* Steps */}
                    <div className="flex flex-col md:flex-row items-stretch gap-4">
                      {workflow.steps.map((step, stepIndex) => (
                        <div key={step.label} className="flex-1 flex items-center gap-3">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${workflow.gradient} flex items-center justify-center text-white font-medium text-sm shadow`}>
                              {stepIndex + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">{step.label}</p>
                            <p className="text-sm text-foreground">{step.content}</p>
                          </div>
                          {stepIndex < workflow.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Benefit */}
                    <div className="p-4 rounded-xl bg-muted/50">
                      <p className="text-sm text-foreground">
                        <span className="font-medium text-success">Benefit: </span>
                        {workflow.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
