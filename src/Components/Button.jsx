export default function Button({ text }) {
  return (
    <div className="btnBox">
      <a href="./index.html" className="btn">
        {text}
      </a>
    </div>
  );
}
