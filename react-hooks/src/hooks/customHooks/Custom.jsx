import useFetch from "./useFetch";

const Custom = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <ul>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
  );
};

export default Custom;
