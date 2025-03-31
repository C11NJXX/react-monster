import { FormEvent, useRef, useState } from "react";

interface FormDataShape {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormDataShape>({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button type="submit">Submit</button>
      </form>
      <section>
        <p>Name:{formData.name}</p>
        <p>Email:{formData.email}</p>
        <p>Password:*****</p>
      </section>
    </>
  );
};

export default Form;
