import { useState, useRef } from "react";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";

function App() {
  // useRefs
  const form = useRef();

  // useStates
  const [projectForm, setProjectForm] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: "Finish This Project",
      description: "Complete the project management app for my React course.",
      dueDate: "Mar 26, 2024",
      tasks: [],
    },
  ]);
  const [projectSelected, setProjectSelected] = useState(null);

  // Handlers
  const handleProjectForm = () => {
    setProjectForm(true);
  };

  const handleSaveProject = (formData) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          title: formData.title || "Nothing Important",
          description: formData.description || "blah blah blah........",
          dueDate: formData.dueDate || "2024-03-25",
          tasks: [],
        },
      ];
    });
    setProjectForm(false);
  };

  const handleCancel = () => {
    setProjectForm(false);
  };

  const handleProjectSelect = (index) => {
    setProjectSelected(index);
  };

  const handleDelete = (projectIndex) => {
    setProjects((prevProjects,) => {
      // Filter out the project to be deleted
      return prevProjects.filter((_, index) => index !== projectIndex);
    });
  };

  console.log(projects);
  console.log(projectSelected);
  console.log(projectForm);

  return (
    <>
      <Sidebar
        onAddProject={handleProjectForm}
        projects={projects}
        onOpenProject={handleProjectSelect}
      />

      {projectForm && (
        <ProjectForm
          onClear={handleCancel}
          onSave={handleSaveProject}
          ref={form}
        />
      )}

      {!projectForm && projectSelected && (
        <Project onDeleteProject={handleDeleteProject} projects={projects} projectSelected={projectSelected} />
      )}

      {!projectForm && !projectSelected && (
        <div>
          <img src="src/assets/no-projects.png" alt="Clipboard and Pen Image" />
          <h2>No Project Selected</h2>
          <p>Select a project or get started with a new one</p>
          <button>Create New Project</button>
        </div>
      )}
    </>
  );
}

export default App;
