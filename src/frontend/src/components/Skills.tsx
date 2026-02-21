const technicalSkills = [
  {
    category: 'Programming',
    command: 'python --version && java -version',
    skills: ['Java', 'Python', 'JavaScript']
  },
  {
    category: 'Databases',
    command: 'mysql --version',
    skills: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    category: 'Data Tools',
    command: 'systeminfo | findstr /C:"Analytics"',
    skills: ['Power BI', 'Tableau', 'Excel', 'Data Visualization']
  },
  {
    category: 'Networking',
    command: 'ipconfig /all',
    skills: ['TCP/IP', 'Subnetting', 'Routing & Switching', 'DHCP', 'DNS', 'NAT', 'Firewall Configuration']
  },
  {
    category: 'Tools',
    command: 'netstat -ano',
    skills: ['Nmap', 'Wireshark']
  },
  {
    category: 'IT',
    command: 'net user',
    skills: ['System Security', 'User Access Management']
  }
];

const softSkills = [
  'Problem-Solving',
  'Team Collaboration',
  'Effective Communication',
  'Time Management'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
            <span className="text-terminal-white font-mono">ipconfig /all</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <div className="terminal-box p-6">
            <div className="font-mono text-terminal-yellow text-sm mb-6">
              Windows IP Configuration
            </div>

            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="border-l-2 border-terminal-green/30 pl-4">
                  <div className="font-mono mb-3">
                    <div className="text-terminal-gray text-xs mb-1">
                      &gt; {category.command}
                    </div>
                    <div className="text-terminal-green text-sm font-bold mb-2">
                      {category.category}:
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 bg-terminal-green/10 text-terminal-white border border-terminal-green/30 hover:border-terminal-green/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-terminal-green font-mono">C:\Users\SubodhRam&gt;</span>
              <span className="text-terminal-white font-mono">type soft_skills.txt</span>
            </div>
          </div>

          <div className="terminal-box p-6">
            <div className="font-mono">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-terminal-white text-sm mb-2 flex items-center gap-2">
                  <span className="text-terminal-yellow">&gt;</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
