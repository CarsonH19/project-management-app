import { useState, useRef } from "react";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const form = useRef();

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  // const [projectForm, setProjectForm] = useState(false);
  // const [projects, setProjects] = useState([
  //   {
  //     title: "Finish This Project",
  //     description: "Complete the project management app for my React course.",
  //     dueDate: "Mar 26, 2024",
  //     tasks: [],
  //   },
  // ]);
  // const [projectSelected, setProjectSelected] = useState(null);

  // const handleProjectForm = () => {
  //   setProjectForm(true);
  // };

  // const handleSaveProject = (formData) => {
  //   setProjects((prevProjects) => {
  //     return [
  //       ...prevProjects,
  //       {
  //         title: formData.title || "Nothing Important",
  //         description: formData.description || "blah blah blah........",
  //         dueDate: formData.dueDate || "2024-03-25",
  //         tasks: [],
  //       },
  //     ];
  //   });
  //   setProjectForm(false);
  // };

  // const handleCancel = () => {
  //   setProjectForm(false);
  // };

  // const handleProjectSelect = (index) => {
  //   setProjectSelected(index);
  // };

  // const handleDeleteProject = (projectIndex) => {
  //   setProjects((prevProjects) => {
  //     // Filter out the project to be deleted
  //     return prevProjects.filter((_, index) => index !== projectIndex);
  //   });
  // };

  // const handleClearTask = (projectIndex, taskIndexToDelete) => {
  //   setProjects((prevProjects) => {
  //     // Assuming projectIndex is the index of the project where you want to delete the task
  //     const updatedProjects = prevProjects.map((project, index) => {
  //       if (index === projectIndex) {
  //         // Delete the task at taskIndexToDelete from the tasks array
  //         const updatedTasks = project.tasks.filter(
  //           (task, taskIndex) => taskIndex !== taskIndexToDelete
  //         );
  //         // Return a new object with the updated tasks array
  //         return { ...project, tasks: updatedTasks };
  //       }
  //       return project; // Return unchanged project if it's not the one we're updating
  //     });
  //     return updatedProjects;
  //   });
  // };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <ProjectForm onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        // onOpenProject={handleProjectSelect}
      />

      {/* {projectForm && (
        <ProjectForm
          onClear={handleCancel}
          onSave={handleSaveProject}
          ref={form}
          s
        />
      )} */}

      {/* {!projectForm && projectSelected && (
        <Project
          onClearTask={handleClearTask}
          onDeleteProject={handleDeleteProject}
          projects={projects}
          projectSelected={projectSelected}
        />
      )} */}

      {content}
    </main>
  );
}

export default App;
