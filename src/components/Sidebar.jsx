import React from "react";

export default function Sidebar({ onAddProject, projects, onOpenProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
      <div>
        <button onClick={onAddProject} className="px-4 py-2 text-xs md: text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hoer:text-stone-100">+ Add Projects</button>
      </div>
      <ul>
        {projects &&
          projects.map((project, index) => (
            <li key={index} onClick={() => onOpenProject(index)}>
              {project.title}
            </li>
          ))}
      </ul>
    </aside>
  );
}
