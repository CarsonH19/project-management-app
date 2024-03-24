import React from "react";

export default function Sidebar({ onAddProject, projects, onOpenProject }) {
  return (
    <>
      <h3>YOUR PROJECTS</h3>
      <button onClick={onAddProject}>Add Projects</button>
      <ul>
        {projects &&
          projects.map((project, index) => <li key={index} onClick={() => onOpenProject(index)} >{project.title}</li>)}
      </ul>
    </>
  );
}
