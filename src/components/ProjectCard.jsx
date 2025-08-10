import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { DynamicIcon } from "lucide-react/dynamic";
import { Badge } from "@/components/ui/badge.jsx";
import { GitGraph, ExternalLink } from "lucide-react";
import electron from "@/assets/electron.svg";
import nextdotjs from "@/assets/nextdotjs.svg";
import react from "@/assets/react.svg";
import extensions from "@/assets/extensions.svg";
import modelcontextprotocol from "@/assets/modelcontextprotocol.svg";
import github from "@/assets/github.svg";

const projecticon = (iconName) => {
  switch (iconName) {
    case "electron":
      return electron;
    case "nextdotjs":
      return nextdotjs;
    case "react":
      return react;
    case "extensions":
      return extensions;
    case "modelcontextprotocol":
      return modelcontextprotocol;
    case "github":
      return github;
    default:
      return null;
  }
};

function ProjectCard({
  project,
  index,
  setSelectedProject,
  selectedTechnologies,
}) {
  return (
    <Card
      key={project.id}
      className="group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setSelectedProject(project)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
            <img
              src={projecticon(project.externalIcon)}
              alt="YouTube"
              className="w-6 h-6 transition-transform transition-shadow duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-[0_2px_8px_rgba(246,28,13,0.5)]"
            />
          </div>
          <div className="flex gap-2">
            <a
              href={project.githubLink}
              className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-700/50 cursor-pointer flex justify-center items-center rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              title="View on GitHub"
            >
              <GitGraph className="w-4 h-4" />
            </a>
            {project.appLink && (
              <a
                href={project.appLink}
                className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-700/50 cursor-pointer flex justify-center items-center rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                title="View Live App"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
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
          {project.technologies
            .sort()
            .slice(0, 3)
            .map((tech) => (
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
  );
}

export default ProjectCard;
