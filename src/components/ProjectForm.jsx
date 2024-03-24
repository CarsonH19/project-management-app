import { useState, forwardRef } from "react";

const ProjectForm = forwardRef(function ProjectForm({ onCancel, onSave }, ref) {
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
    onSave(formData);
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
          <button onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={formData.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input
            value={formData.dueData}
            type="date"
            name="dueDate"
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
});

export default ProjectForm;
