import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/KedarGhadyalji",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kedar-ghadyalji-98b7a6341",
    label: "LinkedIn",
  },
  {
    icon: BsTwitterX,
    href: "https://x.com/kedarghadyalji?t=FmvbXvlo0zHJhsuLMV-0sA&s=09",
    label: "X (Twitter)",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Narrative Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
            >
              KG<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with{" "}
              <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />
              by{" "}
              <span className="text-foreground font-medium">
                Kedar Ghadyalji
              </span>
            </p>
            <p className="text-[11px] tracking-widest text-muted-foreground/50 font-bold">
              © {currentYear} • git commit -m "fixed stuff, don't ask how"
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
