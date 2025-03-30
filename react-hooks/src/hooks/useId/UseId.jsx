import { useId } from "react";

const UseId = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-password`}>password</label>
      <input type="password" id={`${id}-password`} />
    </>
  );
};

export default UseId;
