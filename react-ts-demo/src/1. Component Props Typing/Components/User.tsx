interface UserShape {
  name: string;
  age: number;
  isStu: boolean;
}

const User = ({ name, age, isStu }: UserShape) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>{isStu ? "Student" : "FreeLancer"}</p>
    </div>
  );
};

export default User;
