const User = (props: { name: string; age: number; isStu: boolean }) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>{props.isStu ? "Student" : "FreeLancer"}</p>
    </div>
  );
};

export default User;
