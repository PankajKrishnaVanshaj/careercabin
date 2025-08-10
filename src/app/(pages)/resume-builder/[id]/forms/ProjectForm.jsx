import { useResume } from "@/context/ResumeContext";
import React, { useEffect, useState } from "react";
import GeneratorAi from "../_components/GeneratorAi";

// Base template for a new project
const emptyProject = {
  name: "",
  description: "",
  technologies: [""],
  link: "",
};

const ProjectForm = () => {
  const { resume, updateSection } = useResume();

  // Ensure all loaded projects have the required structure
  const [projects, setProjects] = useState(() => {
    if (Array.isArray(resume.projects) && resume.projects.length > 0) {
      return resume.projects.map((project) => ({
        name: project.name || "",
        description: project.description || "",
        technologies: Array.isArray(project.technologies)
          ? project.technologies
          : [""],
        link: project.link || "",
      }));
    } else {
      return [{ ...emptyProject }];
    }
  });

  // Update resume context on project change
  useEffect(() => {
    updateSection("projects", projects);
  }, [projects]);

  // Handle changes to text inputs (name, description, link)
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...projects];
    updated[index][name] = value;
    setProjects(updated);
  };

  // Handle changes to technologies
  const handleTechChange = (projIndex, techIndex, value) => {
    const updated = [...projects];
    updated[projIndex].technologies[techIndex] = value;
    setProjects(updated);
  };

  const addTechnology = (projIndex) => {
    const updated = [...projects];
    updated[projIndex].technologies.push("");
    setProjects(updated);
  };

  const removeTechnology = (projIndex, techIndex) => {
    const updated = [...projects];
    updated[projIndex].technologies.splice(techIndex, 1);
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([...projects, { ...emptyProject }]);
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  // Styling helpers
  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
  const labelClass = "block text-sm font-medium text-green-600 mb-1";

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Projects
      </h2>

      {projects.map((project, projIndex) => (
        <div key={projIndex} className="pb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-green-600">
              Project {projIndex + 1}
            </h3>
            {projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(projIndex)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove Project
              </button>
            )}
          </div>

          {/* Project Name */}
          <div>
            <label className={labelClass}>Project Name</label>
            <input
              name="name"
              placeholder="e.g., CareerCabin Platform"
              value={project.name}
              onChange={(e) => handleProjectChange(projIndex, e)}
              className={inputClass}
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className={labelClass}>Project Description</label>

              <GeneratorAi Prompt={``} onGenerate={(generatedText) => {}} />
            </div>

            <textarea
              name="description"
              placeholder="A job portal platform..."
              rows={3}
              value={project.description}
              onChange={(e) => handleProjectChange(projIndex, e)}
              className={inputClass}
            />
          </div>

          {/* Technologies */}
          <div className="mt-4">
            <label className={labelClass}>Technologies Used</label>
            {project.technologies?.map((tech, techIndex) => (
              <div key={techIndex} className="flex items-center gap-2 mb-2">
                <input
                  value={tech}
                  onChange={(e) =>
                    handleTechChange(projIndex, techIndex, e.target.value)
                  }
                  className={inputClass}
                  placeholder="e.g., React, MongoDB"
                />
                {project.technologies.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTechnology(projIndex, techIndex)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addTechnology(projIndex)}
              className="text-green-600 hover:underline text-sm"
            >
              + Add another technology
            </button>
          </div>

          {/* Project Link */}
          <div className="mt-4">
            <label className={labelClass}>Project Link</label>
            <input
              name="link"
              type="url"
              placeholder="e.g., https://github.com/username/project"
              value={project.link}
              onChange={(e) => handleProjectChange(projIndex, e)}
              className={inputClass}
            />
          </div>
        </div>
      ))}

      {/* Add Project Button */}
      <button
        type="button"
        onClick={addProject}
        className="mt-4 text-green-700 hover:underline text-sm"
      >
        + Add Another Project
      </button>
    </div>
  );
};

export default ProjectForm;
