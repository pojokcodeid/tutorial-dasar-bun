function Comp(props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

console.log(<Comp message="Hello, Bun!" />);
