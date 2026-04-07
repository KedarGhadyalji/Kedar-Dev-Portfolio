import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  ShieldCheck,
  Layers,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "I prioritize maintainable, modular code that scales seamlessly as project requirements evolve.",
  },
  {
    icon: Layers,
    title: "Full-Stack Mastery",
    description:
      "From database schema design to responsive UI, I handle the entire lifecycle of an application.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Deep-diving into bottlenecks to ensure lightning-fast load times and smooth user interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Robust",
    description:
      "Implementing industry-standard security practices and rigorous testing to ensure product stability.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-background"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - The Narrative */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 rounded-full glass text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
              Turning complex problems
              <span className="text-primary"> into </span>
              elegant,
              <span className="font-serif italic font-normal text-white">
                {" "}
                functional reality.
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                focused on building high-performance systems where architectural
                integrity meets seamless user experience.
              </p>

              <p>
                My technical foundation is rooted in{" "}
                <span className="text-foreground font-medium">
                  real-time logic and complex state management
                </span>
                . This background allows me to approach the modern web stack
                with a focus on memory efficiency and mathematical precision
                that goes beyond standard application development.
              </p>

              <p>
                I specialize in architecting the bridge between{" "}
                <span className="text-white font-medium">
                  data-driven, intelligent backends
                </span>{" "}
                and fluid frontend interfaces. I ensure that sophisticated
                underlying logic translates into responsive, reliable, and
                production-ready digital products.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group animate-fade-in animation-delay-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-500 group-hover:w-2" />
              <p className="text-xl font-medium italic text-foreground leading-relaxed">
                "Great software is hidden in the details—it’s about the edge
                cases you handle and the performance you preserve when no one is
                looking."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}

            {/* CTA Box */}
            <div className="sm:col-span-2 glass-strong p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-in animation-delay-500">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  Looking for a collaborator?
                </h4>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for new projects and engineering
                  roles.
                </p>
              </div>
              <a href="#contact" className="shrink-0">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity">
                  Let's Talk
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
