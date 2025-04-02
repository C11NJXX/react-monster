import { use } from "react";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async (): Promise<Data> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const dataPromise = fetchData();

const FetchData = () => {
  const data = use(dataPromise);
  return (
    <div>
      <p>ID:{data.id}</p>
      <p>Title:{data.title}</p>
      <p>{data.completed ? "Finished" : "Pending"}</p>
    </div>
  );
};

export default FetchData;
