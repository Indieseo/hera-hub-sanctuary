import { useState, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, PiggyBank } from "lucide-react";

const ROICalculatorSection = () => {
  const [currentCosts, setCurrentCosts] = useState({
    adaPlugin: 490,
    gdprPlugin: 119,
    cachePlugin: 200,
    securityPlugin: 300,
    seoPlugin: 200,
    maintenanceHours: 10,
  });

  const hourlyRate = 75;
  const [animatedSavings, setAnimatedSavings] = useState(0);

  const totalCurrentAnnual = 
    currentCosts.adaPlugin +
    currentCosts.gdprPlugin +
    currentCosts.cachePlugin +
    currentCosts.securityPlugin +
    currentCosts.seoPlugin +
    (currentCosts.maintenanceHours * hourlyRate * 12);

  const webflowAnnual = 948; // ~$79/mo CMS plan
  const annualSavings = totalCurrentAnnual - webflowAnnual;
  const threeYearSavings = annualSavings * 3;

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const increment = annualSavings / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= annualSavings) {
        setAnimatedSavings(annualSavings);
        clearInterval(timer);
      } else {
        setAnimatedSavings(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [annualSavings]);

  const costItems = [
    { key: "adaPlugin", label: "ADA Compliance Plugin", default: 490 },
    { key: "gdprPlugin", label: "GDPR/Privacy Plugin", default: 119 },
    { key: "cachePlugin", label: "Caching Plugin", default: 200 },
    { key: "securityPlugin", label: "Security Plugin", default: 300 },
    { key: "seoPlugin", label: "SEO Plugin", default: 200 },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Calculate Your <span className="font-semibold gradient-text">Savings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See exactly how much you will save by switching from WordPress
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <div className="glass-card rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Your Current WordPress Costs</h3>
            </div>

            <div className="space-y-4">
              {costItems.map((item) => (
                <div key={item.key} className="flex items-center justify-between gap-4">
                  <label className="text-sm text-muted-foreground flex-1">{item.label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={currentCosts[item.key as keyof typeof currentCosts]}
                      onChange={(e) => setCurrentCosts(prev => ({ ...prev, [item.key]: Number(e.target.value) }))}
                      className="w-24 pl-7 pr-3 py-2 rounded-lg bg-muted border border-border text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm text-muted-foreground">Monthly maintenance hours</label>
                  <input
                    type="number"
                    value={currentCosts.maintenanceHours}
                    onChange={(e) => setCurrentCosts(prev => ({ ...prev, maintenanceHours: Number(e.target.value) }))}
                    className="w-24 px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">@ ${hourlyRate}/hr = ${currentCosts.maintenanceHours * hourlyRate * 12}/year</p>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Your Annual Savings</h3>
              </div>

              <div className="text-center py-6">
                <p className="text-6xl font-light text-success">
                  ${animatedSavings.toLocaleString()}
                </p>
                <p className="text-muted-foreground mt-2">saved per year</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center p-4 rounded-xl bg-muted/50">
                  <DollarSign className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-light gradient-text">${totalCurrentAnnual.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Current annual cost</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-muted/50">
                  <PiggyBank className="w-5 h-5 text-success mx-auto mb-2" />
                  <p className="text-2xl font-light text-success">${threeYearSavings.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">3-year savings</p>
                </div>
              </div>
            </div>

            <div className="gradient-bg rounded-2xl p-6 text-center">
              <p className="text-white/80 text-sm mb-2">Break-even on your investment in</p>
              <p className="text-4xl font-light text-white">
                {Math.ceil(4500 / (annualSavings / 12))} months
              </p>
              <p className="text-white/60 text-xs mt-2">Based on Starter tier ($4,500)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
