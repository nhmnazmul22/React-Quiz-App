export default function From({ children }) {
  console.log(children);
  return <form className="fromBox">{children}</form>;
}
