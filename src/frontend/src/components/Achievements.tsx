export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
            <span className="text-terminal-white font-mono">type achievements.log</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 max-w-3xl mx-auto">
          <div className="font-mono">
            <div className="text-terminal-yellow text-xs mb-3">
              [SUCCESS] Achievement Logged
            </div>
            <div className="border-l-2 border-terminal-green/50 pl-4">
              <div className="text-terminal-white text-sm leading-relaxed">
                Led end-to-end data analysis projects converting raw data into meaningful insights, 
                demonstrating strong analytical capabilities and technical expertise in data-driven decision making.
              </div>
            </div>
            <div className="text-terminal-gray text-xs mt-3">
              Status: COMPLETED | Priority: HIGH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
