export default function Button({ onAddProject, children, ...props }) {
  return (
    <button
      onClick={onAddProject}
      {...props}
      className="px-4 py-2 text-xs md: text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hoer:text-stone-100"
    >
      {children}
    </button>
  );
}
