import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Github, ExternalLink } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

function ProjectDialog({ selectedProject, setSelectedProject }) {
  return (
    <Dialog
      open={!!selectedProject}
      onOpenChange={() => setSelectedProject(null)}
    >
      <DialogContent className="max-w-2xl bg-slate-900/95 border-slate-700/50 backdrop-blur-sm max-h-[80vh] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-slate-800 rounded-xl">
        {selectedProject && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                  <DynamicIcon name={selectedProject.icon} size={32} />
                </div>
                <div>
                  <DialogTitle className="text-2xl text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex gap-3 mt-2">
                    <a
                      className="p-2 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white cursor-pointer flex justify-center items-center rounded-md"
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    {selectedProject.appLink && (
                      <a
                        className="p-2 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white cursor-pointer flex justify-center items-center rounded-md"
                        href={selectedProject.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live App
                      </a>
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
                {selectedProject.technologies.sort().map((tech) => (
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
            <div className="bg-slate-800/30 rounded-lg border border-slate-700/30">
              {selectedProject?.screenshots?.map((screenshot, index) => (
                <img
                  key={index}
                  src={`/screenshots/${screenshot}`}
                  alt={`${selectedProject.title}`}
                  className="mt-6"
                />
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDialog;
