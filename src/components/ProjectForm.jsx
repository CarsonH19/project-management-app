import { useState, forwardRef } from "react";

const ProjectForm = forwardRef(function ProjectForm({ onSaveProject }, ref) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProject(formData);
    // Clear form after submission
    setFormData({
      title: "",
      description: "",
      dueDate: "",
    });
  };

  return (
    <>
      <form ref={ref} onSubmit={handleSubmit}>
        <div>
          <button value={formData.title} onClick={() => ref.current.reset()}>Cancel</button>
          <button type="submit">Save</button>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input value={formData.title} type="text" name="title" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea value={formData.description} name="description" onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input value={formData.dueData} type="date" name="dueDate" onChange={handleChange} required />
        </div>
      </form>
    </>
  );
});

export default ProjectForm;
