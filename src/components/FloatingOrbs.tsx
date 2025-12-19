const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Rose orb - top left */}
      <div 
        className="floating-orb w-[500px] h-[500px] bg-rose-300/30 -top-48 -left-48 animate-pulse-soft"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Violet orb - top right */}
      <div 
        className="floating-orb w-[600px] h-[600px] bg-violet-300/25 -top-32 -right-64 animate-pulse-soft"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Amber orb - bottom left */}
      <div 
        className="floating-orb w-[400px] h-[400px] bg-amber-200/20 bottom-32 -left-32 animate-pulse-soft"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Small violet orb - bottom right */}
      <div 
        className="floating-orb w-[350px] h-[350px] bg-violet-200/20 bottom-48 right-16 animate-pulse-soft"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};

export default FloatingOrbs;
