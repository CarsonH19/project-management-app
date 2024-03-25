import { useState, forwardRef } from "react";
import Input from "./Input";

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
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
    // <>
    //   <form ref={ref} onSubmit={handleSubmit}>
    //     <div>
    //       <button onClick={onCancel}>Cancel</button>
    //       <button type="submit">Save</button>
    //     </div>
    //     <div>
    //       <label htmlFor="title">Title</label>
    //       <input
    //         value={formData.title}
    //         type="text"
    //         name="title"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="description">Description</label>
    //       <textarea
    //         value={formData.description}
    //         name="description"
    //         onChange={handleChange}
    //       ></textarea>
    //     </div>
    //     <div>
    //       <label htmlFor="dueDate">Due Date</label>
    //       <input
    //         value={formData.dueData}
    //         type="date"
    //         name="dueDate"
    //         onChange={handleChange}
    //       />
    //     </div>
    //   </form>
    // </>
  );
});

export default ProjectForm;
