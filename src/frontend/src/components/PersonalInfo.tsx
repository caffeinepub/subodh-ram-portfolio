import { Calendar } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <section id="personal-info" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
            <span className="text-terminal-white font-mono">systeminfo | findstr /C:"Personal"</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6">
          <div className="flex items-center gap-3 font-mono">
            <Calendar className="h-5 w-5 text-terminal-green" />
            <span className="text-terminal-yellow">Date of Birth:</span>
            <span className="text-terminal-white">28/04/2003</span>
          </div>
        </div>
      </div>
    </section>
  );
}
