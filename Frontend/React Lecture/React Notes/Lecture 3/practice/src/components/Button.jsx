export default function Button({ text, handelClick }) {
  return (
    <div>
      <a onClick={handelClick}>{text}</a>
    </div>
  );
}
