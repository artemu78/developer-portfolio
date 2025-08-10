import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import youtube from "@/assets/youtube.svg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";

// 1. Social Links Component
// For better organization, the social links are in their own component.
const SocialLinks = () => {
  const socials = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@CodeMentorHub-y6b",
      icon: (
        <img
          src={youtube}
          alt="YouTube"
          className="w-6 h-6 transition-transform transition-shadow duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-[0_2px_8px_rgba(246,28,13,0.5)]"
        />
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/artemu78",
      icon: (
        <img
          src={github}
          alt="GitHub"
          className="w-6 h-6 transition-transform transition-shadow duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-[0_2px_8px_rgba(36,41,46,0.5)]"
        />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/artem-reva/",
      icon: (
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-6 h-6 transition-transform transition-shadow duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-[0_2px_8px_rgba(0,119,183,0.5)]"
        />
      ),
    },
  ];

  return (
    <div className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to my ${social.name}`}
          className="group text-slate-400 hover:text-white transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

function Header({
  allTechnologies,
  selectedTechnologies,
  handleTechnologyToggle,
  setSelectedTechnologies,
  filteredProjects,
  projects,
}) {
  // Animated word cycling
  const words = ["Full-Stack", "Front-End", "AI-first"];
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400); // fade out duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="container mx-auto px-6 py-12 text-center">
      <SocialLinks />
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
          Artem (Tim) Reva
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-delay">
          <span
            className={`inline-block transition-opacity duration-1000 w-32 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[currentWord]}
          </span>{" "}
          Developer
        </p>

        {/* Technology Filters */}
        <div className="mb-8">
          <h3 className="text-lg text-slate-300 mb-4">
            Filter by Technologies:
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto items-center">
            {/* Controls box on the left */}
            <div className="flex flex-col items-start justify-start bg-slate-800/60 border border-slate-700 rounded-lg p-4 min-w-[140px] shadow-lg">
              <Button
                variant="secondary"
                className="mb-2 w-full"
                onClick={() => {
                  const allChecked = {};
                  allTechnologies.forEach((tech) => {
                    allChecked[tech] = true;
                  });
                  setSelectedTechnologies(allChecked);
                }}
              >
                Select all
              </Button>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  const allUnchecked = {};
                  allTechnologies.forEach((tech) => {
                    allUnchecked[tech] = false;
                  });
                  setSelectedTechnologies(allUnchecked);
                }}
              >
                Deselect all
              </Button>
            </div>
            {/* Technology checkboxes on the right */}
            <div className="flex flex-wrap gap-3 items-center">
              {allTechnologies.sort().map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <Checkbox
                    id={tech}
                    checked={selectedTechnologies[tech]}
                    onCheckedChange={() => handleTechnologyToggle(tech)}
                    className="border-slate-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    label={tech}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
