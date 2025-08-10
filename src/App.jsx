import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import Header from "@/components/Header.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import {
  Github,
  ExternalLink,
  Code,
  Zap,
  Cpu,
  Globe,
  Image,
  Calendar,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "WordSpark Linguify Learn",
    description:
      "A modern language learning platform built with React, TypeScript, and Vite",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    githubLink: "https://github.com/artemu78/wordspark-linguify-learn",
    appLink: "", // To be added later
    detailedDescription:
      "A comprehensive language learning application that leverages modern web technologies to provide an interactive and engaging learning experience. Built with Vite for fast development, TypeScript for type safety, and React for component-based architecture. The UI is crafted using shadcn-ui components and styled with Tailwind CSS for a modern, responsive design.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Infinite LLM Dialogue",
    description:
      "An advanced chat application with infinite dialogue capabilities",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    githubLink: "https://github.com/artemu78/infinite-llm-dialogue",
    appLink: "", // To be added later
    detailedDescription:
      "A sophisticated chat application that enables infinite dialogue sessions with large language models. Features real-time communication, advanced UI components, and seamless user experience. Built with modern React patterns and TypeScript for robust type checking and maintainability.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Tech Assessment",
    description:
      "A comprehensive technical assessment platform built with React",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/artemu78/tech_assessment",
    appLink: "", // To be added later
    detailedDescription:
      "A technical assessment platform designed to evaluate programming skills and knowledge. Features interactive coding challenges, real-time feedback, and comprehensive reporting. Built with Create React App and follows modern web development best practices.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "OpenAI API Explorer",
    description:
      "Chrome extension for text summarization using OpenAI ChatGPT API",
    technologies: ["TypeScript", "HTML", "JavaScript"],
    githubLink: "https://github.com/artemu78/openai-api-explorer",
    appLink: "", // To be added later
    detailedDescription:
      "A Chrome extension called TextAigist that integrates with the OpenAI ChatGPT API to provide text summarization capabilities. Users can select text on any webpage and get instant summaries. Features secure API key management, OAuth 2.0 authentication, and privacy-focused design.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Todoist Chrome Extension",
    description: "Enhanced Todoist experience with completed tasks display",
    technologies: ["JavaScript", "HTML"],
    githubLink: "https://github.com/artemu78/todoist-chrome-extension",
    appLink: "", // To be added later
    detailedDescription:
      "A Chrome extension that enhances the Todoist web application by displaying completed tasks directly on the interface. Features automatic updates every 10 seconds, manual refresh capability, and OAuth 2.0 integration for secure access to Todoist API. Designed with user privacy in mind.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Creato",
    description: "Electron app for Text-to-Speech & Character animation APIs",
    technologies: ["JavaScript", "HTML", "CSS", "Electron"],
    githubLink: "https://github.com/artemu78/Creato",
    appLink: "", // To be added later
    detailedDescription:
      "A desktop application built with Electron that provides Text-to-Speech capabilities and character animation features. Integrates with various APIs to deliver multimedia content creation tools. Features audio file generation, character animations, and a user-friendly interface.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "TeamSkillBooster",
    description: "Single-page teamwork skills course web application",
    technologies: ["TypeScript", "CSS"],
    githubLink: "https://github.com/artemu78/TeamSkillBooster",
    appLink: "", // To be added later
    detailedDescription:
      "An educational web application focused on improving teamwork skills through interactive courses and progress tracking. Features a game-like progress tracker, comprehensive course content, and modern UI design. Built with TypeScript for enhanced development experience.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Sahibinden Price Converter",
    description:
      "Chrome extension for currency conversion on Turkish marketplace",
    technologies: ["JavaScript", "HTML"],
    githubLink: "https://github.com/artemu78/sahibinden-price-converter",
    appLink: "", // To be added later
    detailedDescription:
      "A Chrome extension that automatically converts Turkish Lira (TL) prices to US Dollars (USD) on sahibinden.com using real-time exchange rates. Features automatic price detection, real-time conversion, and privacy-focused design with no data collection.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "Prompt Play Pictures",
    description:
      "A project for generating and manipulating images based on prompts.",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    githubLink: "https://github.com/artemu78/prompt-play-pictures",
    appLink: "", // To be added later
    detailedDescription:
      "A web application designed for creative exploration of image generation using AI prompts. Users can input text prompts to generate unique images, and further manipulate them with various tools and effects. Built with Vite for a fast development experience, TypeScript for robust code, and React for a dynamic user interface. Styling is handled with shadcn-ui and Tailwind CSS for a modern and responsive design.",
    icon: <Image className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "Events N Feedbacks",
    description: "React web app for managing events and attendee feedback",
    technologies: ["Next.js", "TypeScript", "React", "Firebase", "HTML"],
    githubLink: "https://github.com/artemu78/events-n-feedbacks",
    appLink: "https://events-n-feedbacks.vercel.app", // Live app available
    detailedDescription:
      "A comprehensive event management web application built with Next.js 14 for managing events and collecting attendee feedback. Features include event creation, attendee management, feedback collection, voice feedback capabilities, and real-time analytics. The application uses Firebase for backend services and is deployed on Vercel for optimal performance.",
    icon: <Calendar className="w-6 h-6" />,
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Initialize all technologies as checked
  const [selectedTechnologies, setSelectedTechnologies] = useState(() => {
    const initialState = {};
    allTechnologies.forEach((tech) => {
      initialState[tech] = true;
    });
    return initialState;
  });

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return project.technologies.some((tech) => selectedTechnologies[tech]);
    });
  }, [selectedTechnologies]);

  const handleTechnologyToggle = (technology) => {
    setSelectedTechnologies((prev) => ({
      ...prev,
      [technology]: !prev[technology],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <Header
          allTechnologies={allTechnologies}
          selectedTechnologies={selectedTechnologies}
          handleTechnologyToggle={handleTechnologyToggle}
          setSelectedTechnologies={setSelectedTechnologies}
          filteredProjects={filteredProjects}
          projects={projects}
        />

        {/* Projects Grid */}
        <main className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-700/50"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, "_blank");
                        }}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      {project.appLink && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-700/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.appLink, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs border-slate-600/50 transition-colors ${
                          selectedTechnologies[tech]
                            ? "bg-purple-900/50 text-purple-300 border-purple-500/50"
                            : "bg-slate-900/50 text-slate-400"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-slate-900/50 text-slate-300 border-slate-600/50"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                No projects match the selected technologies.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Try selecting different technologies to see more projects.
              </p>
            </div>
          )}
        </main>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl bg-slate-900/95 border-slate-700/50 backdrop-blur-sm">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex gap-3 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          onClick={() =>
                            window.open(selectedProject.githubLink, "_blank")
                          }
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                        {selectedProject.appLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            onClick={() =>
                              window.open(selectedProject.appLink, "_blank")
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live App
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                <DialogDescription className="text-slate-300 text-base leading-relaxed mb-6">
                  {selectedProject.detailedDescription}
                </DialogDescription>
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border-slate-600/50 hover:bg-slate-700/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                  <p className="text-sm text-slate-400 italic">
                    📸 Screenshots will be added here once the live application
                    links are provided.
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
