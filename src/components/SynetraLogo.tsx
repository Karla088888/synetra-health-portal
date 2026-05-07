export function SynetraLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="14" fill="#03045E" />
        <circle cx="50" cy="50" r="5" fill="#00B4D8" />
        <circle cx="50" cy="12" r="5" fill="#00B4D8" opacity="0.9" />
        <circle cx="85" cy="35" r="4" fill="#00B4D8" opacity="0.7" />
        <circle cx="78" cy="75" r="6" fill="#00B4D8" opacity="0.8" />
        <circle cx="22" cy="75" r="3.5" fill="#00B4D8" opacity="0.6" />
        <circle cx="15" cy="35" r="4.5" fill="#00B4D8" opacity="0.75" />
        <line x1="50" y1="36" x2="50" y2="17" stroke="#00B4D8" strokeWidth="1.2" opacity="0.5" />
        <line x1="62" y1="42" x2="81" y2="35" stroke="#00B4D8" strokeWidth="1.2" opacity="0.5" />
        <line x1="60" y1="60" x2="74" y2="73" stroke="#00B4D8" strokeWidth="1.2" opacity="0.5" />
        <line x1="40" y1="60" x2="25" y2="73" stroke="#00B4D8" strokeWidth="1.2" opacity="0.5" />
        <line x1="38" y1="42" x2="19" y2="35" stroke="#00B4D8" strokeWidth="1.2" opacity="0.5" />
        {/* Background dots */}
        <circle cx="30" cy="20" r="1.5" fill="#00B4D8" opacity="0.15" />
        <circle cx="70" cy="20" r="1.5" fill="#00B4D8" opacity="0.15" />
        <circle cx="90" cy="55" r="1.5" fill="#00B4D8" opacity="0.15" />
        <circle cx="10" cy="55" r="1.5" fill="#00B4D8" opacity="0.15" />
        <circle cx="50" cy="90" r="1.5" fill="#00B4D8" opacity="0.15" />
      </svg>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold tracking-tight text-foreground font-syne">Synetra</span>
          <span className="text-lg font-normal tracking-tight text-cyan-primary font-syne">Health</span>
        </div>
      </div>
    </div>
  );
}