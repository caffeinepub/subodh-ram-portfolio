import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Hero() {
  const name = useTypingEffect({ text: 'SUBODH RAM', speed: 100, startDelay: 500 });
  const title = useTypingEffect({ text: 'Master of Computer Applications Student', speed: 50, startDelay: 2000 });
  const tagline = useTypingEffect({ text: 'Networking & IT Infrastructure Enthusiast', speed: 50, startDelay: 4500 });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
            </div>
            <span className="terminal-title">C:\Users\SubodhRam\Portfolio</span>
          </div>
          
          <div className="terminal-body p-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">C:\Users\SubodhRam&gt;</span>
                <span className="text-terminal-white">echo %NAME%</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-mono">
                <span className="text-terminal-green">
                  {name.displayedText}
                  {!name.isComplete && <span className="cursor-blink">_</span>}
                </span>
              </h1>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">C:\Users\SubodhRam&gt;</span>
                <span className="text-terminal-white">type education.txt</span>
              </div>
              <h2 className="text-lg sm:text-xl font-mono text-terminal-white">
                {title.displayedText}
                {!title.isComplete && name.isComplete && <span className="cursor-blink">_</span>}
              </h2>
              {title.isComplete && (
                <p className="text-md text-terminal-gray font-mono mt-1">2024–2026</p>
              )}
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">C:\Users\SubodhRam&gt;</span>
                <span className="text-terminal-white">type specialization.txt</span>
              </div>
              <p className="text-lg sm:text-xl font-mono text-terminal-yellow">
                {tagline.displayedText}
                {!tagline.isComplete && title.isComplete && <span className="cursor-blink">_</span>}
              </p>
            </div>

            {tagline.isComplete && (
              <div className="mt-8 animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-terminal-green">C:\Users\SubodhRam&gt;</span>
                  <span className="text-terminal-white">download resume.pdf</span>
                </div>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 font-mono px-6 py-3 text-base transition-all duration-300 group"
                  asChild
                >
                  <a href="/assets/resume.pdf" download className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    <span>resume.pdf</span>
                    <span className="opacity-0 group-hover:opacity-100 cursor-blink transition-opacity">_</span>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
