function Component(props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

console.log(<Component message="Hello, Bun!" />);
