function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름 {name} 이며 {age}살입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
