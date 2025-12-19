import { Calendar, Palette, Code, Rocket, Users, CheckCircle } from "lucide-react";

const TimelineSection = () => {
  const phases = [
    {
      week: "Week 1-2",
      title: "Discovery & Design",
      icon: Palette,
      gradient: "from-rose-400 to-rose-500",
      tasks: [
        "Brand deep-dive & content audit",
        "Wireframes & design concepts",
        "Stakeholder review & feedback",
      ],
      deliverable: "Approved design mockups",
    },
    {
      week: "Week 3-4",
      title: "Development",
      icon: Code,
      gradient: "from-violet-400 to-purple-500",
      tasks: [
        "Webflow build & CMS setup",
        "n8n automation workflows",
        "Optix booking integration",
      ],
      deliverable: "Staging site ready",
    },
    {
      week: "Week 5",
      title: "Testing & Launch",
      icon: Rocket,
      gradient: "from-amber-400 to-orange-500",
      tasks: [
        "Cross-browser QA testing",
        "Performance optimization",
        "DNS cutover & go-live",
      ],
      deliverable: "Live website",
    },
    {
      week: "Week 6+",
      title: "Training & Support",
      icon: Users,
      gradient: "from-emerald-400 to-teal-500",
      tasks: [
        "Team training session",
        "Documentation handoff",
        "30-day support period",
      ],
      deliverable: "Empowered team",
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Your <span className="font-semibold gradient-text">Journey</span> to Launch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A clear, predictable timeline from kickoff to go-live
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-violet-300 to-emerald-300" />

          <div className="space-y-8 md:space-y-0">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={phase.week}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card rounded-2xl p-6 hover-lift inline-block w-full max-w-md">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                        <span className="text-sm font-medium text-primary">{phase.week}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                      <ul className={`space-y-2 mb-4 ${isEven ? "md:text-right" : ""}`}>
                        {phase.tasks.map((task) => (
                          <li key={task} className={`flex items-center gap-2 text-sm text-muted-foreground ${isEven ? "md:flex-row-reverse" : ""}`}>
                            <CheckCircle className="w-4 h-4 text-success shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`flex items-center gap-2 pt-3 border-t border-border ${isEven ? "md:justify-end" : ""}`}>
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{phase.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg z-10 shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl gradient-bg-subtle border border-rose-200/50">
            <Rocket className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Total Project Timeline</p>
              <p className="text-2xl font-light gradient-text">5-6 Weeks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
