const experiences = [
  {
    company: 'Aivariant',
    role: 'Data Analyst Intern',
    period: 'Aug 2023 – Jan 2024',
    location: 'Remote',
    responsibilities: [
      'Analyzed large datasets to identify trends and patterns',
      'Created interactive dashboards using Power BI and Tableau',
      'Collaborated with cross-functional teams to deliver insights',
      'Automated data processing workflows using Python'
    ]
  },
  {
    company: 'Freelance',
    role: 'IT Support Specialist',
    period: '2022 – Present',
    location: 'Remote',
    responsibilities: [
      'Provided technical support for network configuration',
      'Troubleshot hardware and software issues',
      'Implemented security measures and access controls',
      'Maintained system documentation and user guides'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
            <span className="text-terminal-white font-mono">netstat -ano | findstr ESTABLISHED</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6">
          <div className="font-mono text-terminal-white text-xs mb-4">
            <div className="mb-2 text-terminal-yellow">Active Connections</div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-yellow/50 transition-all duration-300"
              >
                <div className="font-mono">
                  <div className="mb-3">
                    <div className="text-terminal-green text-sm font-bold mb-1">
                      {exp.company} - {exp.role}
                    </div>
                    <div className="text-terminal-gray text-xs flex flex-wrap gap-3">
                      <span>{exp.period}</span>
                      <span>│</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-terminal-green/30 pl-4">
                    <div className="text-terminal-yellow text-xs mb-2">Responsibilities:</div>
                    <div className="space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="text-terminal-white text-xs flex items-start gap-2">
                          <span className="text-terminal-green">-</span>
                          <span>{resp}</span>
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
