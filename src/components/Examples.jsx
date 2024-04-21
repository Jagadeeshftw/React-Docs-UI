import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Box from "./Box";
const Examples = () => {
  const content = "Please Click any Button";
  const [val, getVal] = useState(content);
  const handleClick = (selectedButton) => {
    getVal(selectedButton);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => {
            handleClick("Components");
          }}
          isSelected={val === "Components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => {
            handleClick("Jsx");
          }}
          isSelected={val === "Jsx"}
        >
          Jsx
        </TabButton>
        <TabButton
          onSelect={() => {
            handleClick("Props");
          }}
          isSelected={val === "Props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => {
            handleClick("State");
          }}
          isSelected={val === "State"}
        >
          State
        </TabButton>
      </menu>
      {val === content && content}
      {!(val === content) && <Box {...EXAMPLES[val]} />}
    </section>
  );
};

export default Examples;
