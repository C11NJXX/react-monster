const User = ({
  name,
  age,
  isStu,
}: {
  name: string;
  age: number;
  isStu: boolean;
}) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>{isStu ? "Student" : "FreeLancer"}</p>
    </div>
  );
};

export default User;
