function Cat(props) {
  console.log(props);
  console.log(props.isSofaa);

  return (
    <div>
      <p>isSofaa : {props.isSofaa}</p>
    </div>
  );
}

export default Cat;
