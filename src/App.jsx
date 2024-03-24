import { useState, useRef } from "react";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  const form = useRef();

  const [projectForm, setProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectTasks, setProjectTasks] = useState();

  const handleAddProject = () => {
    setProjectForm(true);
  };

  const handleSaveProject = (formData) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        },
      ];
    });

    console.log(projects);
    setProjectForm(false);
  };

  return (
    <>
      <Sidebar onAddProject={handleAddProject} projects={projects} />
      {projectForm && (
        <ProjectForm onSaveProject={handleSaveProject} ref={form} />
      )}
      {!projectForm && projectTasks && <Tasks />}
    </>
  );
}

export default App;
