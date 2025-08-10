import { useState, useMemo } from "react";
import {} from "@/components/ui/card.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import ProjectDialog from "@/components/ProjectDialog.jsx";
import Header from "@/components/Header.jsx";
import "./App.css";
import projects from "@/data/projects";

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
        <Header
          allTechnologies={allTechnologies}
          selectedTechnologies={selectedTechnologies}
          handleTechnologyToggle={handleTechnologyToggle}
          setSelectedTechnologies={setSelectedTechnologies}
          filteredProjects={filteredProjects}
          projects={projects}
        />

        <main className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                setSelectedProject={setSelectedProject}
                selectedTechnologies={selectedTechnologies}
              />
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

        <ProjectDialog
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </div>
    </div>
  );
}

export default App;
