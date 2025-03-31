import { FC } from "react";

interface PersonShape {
  name: string;
  age: number;
  job: string;
}

const Person: FC<PersonShape> = ({ name, age, job }) => {
  return (
    <div>
      <p>
        {name} is a {age} years old {job}
      </p>
    </div>
  );
};

export default Person;
