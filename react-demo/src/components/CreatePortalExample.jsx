import { useState } from "react";
import { createPortal } from "react-dom";
const CreatePortalExample = () => {
  const [rendered, setRendered] = useState(false);
  return (
    <>
      <button onClick={() => setRendered((prev) => !prev)}>Use Portal</button>
      {rendered &&
        createPortal(
          <p>I'm rendered as the sibling of root</p>,
          document.getElementById("portal")
        )}
    </>
  );
};

export default CreatePortalExample;
