const experiences = [
  {
    period: "Jan 2026 — Apr 2026",
    role: "Research and Innovation Intern",
    company: "Cyber Secured India",
    description:
      "Contributed to the development of a scalable Learning Management System (LMS), focusing on secure user authentication, seamless RazorPay integration, and optimizing database schemas for real-time progress tracking.",
    technologies: ["React", "TypeScript", "MongoDB", "Firebase", "RazorPay"],
    current: false,
  },
  {
    period: "Dec 2025 — Jan 2026",
    role: "AI Engineer Intern",
    company: "Claidroid Technologies",
    description:
      "Collaborated with a 3-member dev team to build a GenAI-powered recruitment engine. Engineered semantic parsing logic to automate resume scoring and optimization, significantly improving candidate matching accuracy.",
    technologies: ["React", "GenAI", "Node.js", "MongoDB"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-black tracking-[0.3em] uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-foreground/80 transition-colors">
              {" "}
              defines expertise.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
            A timeline of my professional contributions, focusing on building
            secure architectures and delivering high-performance digital
            solutions at every stage.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/20 to-transparent md:-translate-x-1/2 dark:shadow-[0_0_15px_rgba(125,211,252,0.5)] transition-all" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 shadow-lg">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content - Flips side based on index */}
                <div
                  className={`pl-10 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 shadow-xl shadow-primary/5 group">
                    <span className="text-xs font-black tracking-widest text-primary uppercase">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 text-foreground transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary/80 font-medium mb-4">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech Badges */}
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-secondary/80 text-[10px] font-bold uppercase tracking-wider rounded-lg text-muted-foreground border border-border group-hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
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
};
