function Greet({ name, age }) {
  return (
    <div>
      <h1>
        Hello {name}, I got to Know that you age is {JSON.stringify(age)}
      </h1>
    </div>
  );
}

export default Greet;
