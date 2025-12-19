import { ArrowRight } from "lucide-react";

interface StickyTotalProps {
  total: number;
  visible: boolean;
}

const StickyTotal = ({ total, visible }: StickyTotalProps) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-4 md:p-6 shadow-glow border-t border-rose-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div>
                <p className="text-sm text-muted-foreground">Your Custom Package</p>
                <p className="text-3xl md:text-4xl font-light gradient-text">${total.toLocaleString()}</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="text-center md:text-left">
                <p className="text-sm text-success font-medium">+ Save ~$1,809/year</p>
                <p className="text-xs text-muted-foreground">vs. WordPress plugins</p>
              </div>
            </div>
            
            <button className="group flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-medium shadow-rose hover-lift whitespace-nowrap">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTotal;
