import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-rose">
            <span className="text-primary-foreground font-bold text-xl">H</span>
          </div>
          <div>
            <h1 className="text-2xl font-light text-foreground">
              Hera Hub <span className="font-semibold gradient-text">2.0</span>
            </h1>
            <p className="text-sm text-muted-foreground">Your Digital Sanctuary, Your Way</p>
          </div>
        </div>

        {/* Proposal Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-subtle border border-rose-200/50">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">
            Custom proposal for <span className="font-semibold gradient-text">Felena Hansen</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
