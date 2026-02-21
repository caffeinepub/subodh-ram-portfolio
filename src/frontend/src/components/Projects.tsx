import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Smart Parking System',
    year: '2025',
    pid: 'PID_1024',
    technologies: ['Java', 'Spring Boot', 'JSP', 'Oracle DB', 'Firebase'],
    features: [
      'Real-time parking discovery and availability',
      'Dynamic pricing and booking system',
      'OpenStreetMap integration for navigation',
      'QR-based secure access control'
    ]
  },
  {
    title: 'Property Price Prediction System',
    year: '2025',
    pid: 'PID_2048',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
    features: [
      'AI-based property price prediction',
      'Interactive dashboards and analytics',
      'Real-time market trend analysis',
      'Comprehensive data visualization'
    ]
  },
  {
    title: 'SmartTech Connect',
    year: '2025',
    pid: 'PID_4096',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    features: [
      'Technician booking and scheduling',
      'Real-time chat functionality',
      'Community forum and support',
      'AI-powered recommendations'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
            <span className="text-terminal-white font-mono">tasklist /FI "STATUS eq RUNNING"</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 mb-6">
          <div className="font-mono text-terminal-white text-xs mb-4 overflow-x-auto">
            <div className="grid grid-cols-[120px_200px_80px_1fr] gap-4 pb-2 border-b border-terminal-green/30">
              <div className="text-terminal-yellow">Image Name</div>
              <div className="text-terminal-yellow">PID</div>
              <div className="text-terminal-yellow">Status</div>
              <div className="text-terminal-yellow">Mem Usage</div>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-yellow/50 transition-all duration-300"
              >
                <div className="font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-[120px_200px_80px_1fr] gap-2 sm:gap-4 mb-4 text-xs">
                    <div className="text-terminal-green">{project.title.replace(/\s+/g, '_')}.exe</div>
                    <div className="text-terminal-white">{project.pid}</div>
                    <div className="text-terminal-green">Running</div>
                    <div className="text-terminal-gray">{project.year}</div>
                  </div>

                  <div className="mb-3">
                    <div className="text-terminal-yellow text-xs mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-mono text-xs bg-transparent border border-terminal-green/30 text-terminal-white hover:border-terminal-green/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-terminal-yellow text-xs mb-2">Features:</div>
                    <div className="space-y-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="text-terminal-white text-xs flex items-start gap-2">
                          <span className="text-terminal-green">*</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
