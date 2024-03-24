export default function Project({ projectSelected, projects, onDeleteProject }) {
  const project = projects[projectSelected];
  const tasks = project.tasks;
  console.log(`Project: ${project}`);

  const [inputData, setInputData] = useState(null);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    onSave(formData);
    // Clear form after submission
    setInputData("");
  };

  

  return (
    <div className="project-container">
      <div className="project">
        <h2>{project.title}</h2>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
        <button onClick={() => onDeleteProject(projectSelected)}>Delete</button>
      </div>

      <div className="divider"></div>

      <div className="tasks">
        <h2>Tasks</h2>
        <div>
          <input type="text" value={inputData} onChange={handleChange} />
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
      <ol>
        {tasks.map((task, index) => {
          <div className='task'>
            <li key={index}> {task}</li>
            <button>Clear</button>
          </div>
        })}
      </ol>
    </div>
  );
}
