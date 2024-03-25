import { useState } from "react";

export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
    // <div className="">
    //   <div className="">
    //     <h2>{project.title}</h2>
    //     <p>{project.dueDate}</p>
    //     <p>{project.description}</p>
    //     <button onClick={() => onDeleteProject(projectSelected)}>Delete</button>
    //   </div>

    //   <div className=""></div>

    //   <div className="">
    //     <h2>Tasks</h2>
    //     <div>
    //       <input type="text" value={inputData} onChange={handleChange} />
    //       <button onClick={handleSubmit}>Add Task</button>
    //     </div>
    //   </div>
    //   <ol>
    //     {tasks.map((task, index) => {
    //       <div className="task">
    //         <li key={index}> {task}</li>
    //         <button onClick={onClearTask}>Clear</button>
    //       </div>;
    //     })}
    //   </ol>
    // </div>
  );
}
