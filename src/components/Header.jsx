import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import youtube from "@/assets/youtube.svg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import { SearchIcon } from "lucide-react";

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
  const [showFilter, setShowFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const words = ["Full-Stack", "Front-End", "AI-first"];
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);
  // Ref for filter UI
  const filterRef = useRef(null);
  // Hide filter textbox when clicking outside
  useEffect(() => {
    if (!showFilter) return;
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

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
        <div className="flex flex-col md:flex-row gap-6 justify-between max-w-4xl mx-auto items-start">
          {/* Controls box on the left */}
          <div className="flex flex-col items-start justify-between bg-slate-800/60 border border-slate-700 rounded-lg p-4 shadow-lg">
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
          <div className="grow">
            <h3 className="text-lg text-slate-300 mb-4">
              <span
                ref={filterRef}
                className="flex items-center justify-between gap-2"
              >
                Filter by Technologies:
                <span className="flex items-center">
                  {showFilter && (
                    <input
                      type="text"
                      autoFocus
                      className="w-full md:w-64 px-3 rounded border border-slate-700 bg-slate-900 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Type to filter technologies..."
                      value={filterValue}
                      onChange={(e) => setFilterValue(e.target.value)}
                    />
                  )}
                  {!showFilter && filterValue && (
                    <span className="text-gray-400">{filterValue}</span>
                  )}
                  <button
                    type="button"
                    aria-label="Filter technologies"
                    className="ml-2 p-1 rounded hover:bg-slate-700 focus:outline-none"
                    onClick={() => setShowFilter((v) => !v)}
                  >
                    <SearchIcon className="w-6 h-6 cursor-pointer" />
                  </button>
                </span>
              </span>
            </h3>
            <div className="flex flex-wrap gap-3 items-center">
              {allTechnologies
                .filter((tech) =>
                  tech.toLowerCase().includes(filterValue.toLowerCase())
                )
                .sort()
                .map((tech) => (
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
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </header>
  );
}

export default Header;
