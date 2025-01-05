export function Button({ type, children, className }) {
  return (
    <button
    type={type}
    className="primary-btn ms-24 mt-3 rounded-md text-slate-200"
  >
    Submit
  </button>
  );
}