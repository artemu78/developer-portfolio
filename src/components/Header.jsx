import { Button } from "@/components/ui/button.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";

function Header({
  allTechnologies,
  selectedTechnologies,
  handleTechnologyToggle,
  setSelectedTechnologies,
  filteredProjects,
  projects,
}) {
  return (
    <header className="container mx-auto px-6 py-12 text-center">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
          Artem Reva
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-delay">
          Full-Stack Developer & Innovation Enthusiast
        </p>

        {/* Technology Filters */}
        <div className="mb-8">
          <h3 className="text-lg text-slate-300 mb-4">
            Filter by Technologies:
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
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
              {allTechnologies.map((tech) => (
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
