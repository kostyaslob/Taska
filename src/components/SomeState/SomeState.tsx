import { useState } from "react";

export default function SomeState() {
  const [clicks, setClicks] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Clicked: {clicks}</button>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
          </button>
          {isOpen && <p>You toogle me!</p>}
    </>
  );
}
