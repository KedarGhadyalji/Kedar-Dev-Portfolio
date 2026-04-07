/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "C/C++",
  "Java",
  "Python",
  "Node.js",
  "React",
  "MySQL",
  "MongoDB",
  "C#",
  "JavaScript",
  "Express.js",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub",
];

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/KedarGhadyalji",
    label: "GitHub",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kedar-ghadyalji-98b7a6341",
    label: "LinkedIn",
  },
  {
    Icon: BsTwitterX,
    href: "https://x.com/kedarghadyalji?t=FmvbXvlo0zHJhsuLMV-0sA&s=09",
    label: "X (Twitter)",
  },
];

export const Hero = () => {
  // Set your total commits manually here
  const STATIC_COMMIT_COUNT = 350;
  const [displayedCount, setDisplayedCount] = useState(0);

  // Handle the Counting Animation only
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = duration / frameRate;
    const increment = STATIC_COMMIT_COUNT / totalFrames;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= STATIC_COMMIT_COUNT) {
        setDisplayedCount(STATIC_COMMIT_COUNT);
        clearInterval(timer);
      } else {
        setDisplayedCount(Math.floor(current));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/90 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animation: `slow-drift ${25 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i % 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="max-w-xl space-y-8 lg:justify-self-end">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with{" "}
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-medium">Kedar Ghadyalji</span>{" "}
                — a software engineer specializing in building intelligent
                full-stack applications. I turn complex problems into seamless,
                high-performance digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#projects">
                <Button size="lg" className="group">
                  Explore my work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="/Kedar_Ghadyalji_CV.pdf"
                download
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-5 animate-fade-in animation-delay-400">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Follow me:
              </span>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-white/5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-[80px] animate-pulse" />
              <div className="relative glass rounded-3xl p-3 glow-border">
                <img
                  src="/profile-photo.jpeg"
                  alt="Kedar Ghadyalji"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* STATIC GITHUB BADGE with Animation */}
                <div className="absolute -top-6 -left-6 glass rounded-2xl px-5 py-4 animate-float border border-primary/30 shadow-2xl min-w-37.5">
                  <div className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-primary" />
                    <span className="text-2xl font-bold text-primary">
                      {displayedCount}+
                    </span>
                  </div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold mt-1">
                    Total Code Commits
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-sm font-semibold tracking-tight">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-8 text-center font-medium">
            From logic to pixels
          </p>
          <div className="relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-10">
                  <span className="text-2xl font-bold text-muted-foreground/20 hover:text-primary transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-1000">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">
            Explore My Work
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
