function List({ header, items }) {
  return (
    <div>
      <h1>{header}</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
