import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default Toggle;
