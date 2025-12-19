import { useState, useMemo } from "react";
import FloatingOrbs from "@/components/FloatingOrbs";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import OverviewSection from "@/components/sections/OverviewSection";
import PlatformSection from "@/components/sections/PlatformSection";
import BuildPlanSection from "@/components/sections/BuildPlanSection";
import AutomationSection from "@/components/sections/AutomationSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StickyTotal from "@/components/StickyTotal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedTier, setSelectedTier] = useState("growth");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["seo-local", "geo"]);

  const tierPrices: Record<string, number> = {
    starter: 4500,
    growth: 8500,
    enterprise: 14500,
  };

  const addonPrices: Record<string, number> = {
    "seo-local": 1200,
    "geo": 800,
    "booking": 1500,
    "ai-content": 2000,
    "analytics": 600,
    "training": 400,
  };

  const total = useMemo(() => {
    const tierPrice = tierPrices[selectedTier] || 0;
    const addonsPrice = selectedAddons.reduce((sum, id) => sum + (addonPrices[id] || 0), 0);
    return tierPrice + addonsPrice;
  }, [selectedTier, selectedAddons]);

  const handleBuildPlan = () => {
    setActiveSection("build");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection onBuildPlan={handleBuildPlan} />;
      case "platform":
        return <PlatformSection />;
      case "build":
        return (
          <BuildPlanSection
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        );
      case "automation":
        return <AutomationSection />;
      case "whyus":
        return <WhyUsSection onBuildPlan={handleBuildPlan} />;
      default:
        return <OverviewSection onBuildPlan={handleBuildPlan} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingOrbs />
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        {renderSection()}
      </main>
      <StickyTotal total={total} visible={activeSection === "build"} />
    </div>
  );
};

export default Index;
