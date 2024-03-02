export default function Button({ type, text, ...rest }) {
  return (
    <div className="btnBox">
      <button type={type} {...rest} className="btn">
        {text}
      </button>
    </div>
  );
}
