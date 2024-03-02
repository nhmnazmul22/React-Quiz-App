export default function From({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="fromBox">
      {children}
    </form>
  );
}
