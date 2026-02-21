import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'subodh-portfolio';

  return (
    <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-terminal-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-box p-6">
          <div className="font-mono text-center">
            <div className="text-terminal-gray text-xs mb-2">
              C:\Users\SubodhRam&gt; echo %COPYRIGHT%
            </div>
            <p className="text-sm text-terminal-white mb-3">
              © {currentYear} Subodh Ram. All rights reserved.
            </p>
            <div className="text-terminal-gray text-xs mb-2">
              C:\Users\SubodhRam&gt; type credits.txt
            </div>
            <p className="text-sm text-terminal-white flex items-center justify-center gap-2 flex-wrap">
              Built with <Heart className="h-4 w-4 text-terminal-green fill-terminal-green" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-terminal-yellow transition-colors font-medium underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
