import { twMerge } from 'tailwind-merge';

export function Button({ type, children = 'submit', className, onClick }) {
  return (
    <button type={type} onClick={onClick} className={twMerge('primary-btn rounded-md text-slate-200', className)}>
      {children}
    </button>
  );
}
