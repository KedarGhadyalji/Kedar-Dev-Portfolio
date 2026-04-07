import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Secure Chat App",
    description:
      "A real-time communication platform built on the MERN stack. Utilizing Socket.io for instant, bi-directional messaging and MongoDB for persistent, secure session storage.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express", "React", "Socket.io"],
    link: "https://github.com/KedarGhadyalji/secure-chat-app",
    github: "https://github.com/KedarGhadyalji/secure-chat-app",
  },
  {
    title: "Genie - AI Pocket Agent",
    description:
      "A cross-platform mobile application featuring a multi-agent AI ecosystem. Built with React Native and Expo, enabling users to interact with or architect new AI agents in real-time.",
    image: "/projects/project2.png",
    tags: ["React Native", "Expo", "Firebase", "Clerk"],
    link: "https://github.com/KedarGhadyalji/genie-ai-pocket-agent",
    github: "https://github.com/KedarGhadyalji/genie-ai-pocket-agent",
  },
  {
    title: "CraftedCV",
    description:
      "An AI-powered resume builder leveraging Google Gemini AI. Features real-time content suggestions and intelligent formatting to generate professional, ATS-optimized resumes.",
    image: "/projects/project3.png",
    tags: ["MERN Stack", "Gemini AI", "Tailwind CSS", "Vite"],
    link: "https://github.com/KedarGhadyalji/AnalyzedCV",
    github: "https://github.com/KedarGhadyalji/AnalyzedCV",
  },
  {
    title: "AnalyzedCV",
    description:
      "A diagnostic ATS analysis tool that evaluates resume compatibility against job descriptions. Uses semantic parsing to identify keyword gaps and provide structural improvement insights.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "GenAI", "NLP"],
    link: "https://github.com/KedarGhadyalji/craftedcv",
    github: "https://github.com/KedarGhadyalji/craftedcv",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-black tracking-[0.3em] uppercase animate-fade-in">
            Engineering Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground transition-colors">
            Solutions engineered for
            <span className="font-serif italic font-normal text-foreground/80 block md:inline">
              {" "}
              real-world impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto leading-relaxed">
            A deep dive into my technical journey — from architecting scalable
            web ecosystems to developing intelligent tools that bridge logic and
            usability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl overflow-hidden animate-fade-in border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video border-b border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />

                {/* GitHub Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-full glass bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-2xl backdrop-blur-md"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-5 bg-card/30">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-foreground transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-secondary/50 text-[11px] font-bold uppercase tracking-wider border border-border text-muted-foreground group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-24 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/KedarGhadyalji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <AnimatedBorderButton>
              <div className="flex items-center gap-3 px-2">
                <FaGithub className="w-5 h-5" />
                <span>View More</span>
              </div>
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
