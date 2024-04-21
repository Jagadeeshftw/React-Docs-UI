import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/headers";
import TabButton from "./components/TabButton";
import { useState } from "react";
import Concepts from "./components/coreConcepts";
import Box from "./components/Box";
const content = "Please Click any Button";
function App() {
  const [val, getVal] = useState(content);
  const handleClick = (selectedButton) => {
    getVal(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <Concepts key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleClick("Components");
              }} isSelected={val==='Components'}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("Jsx");
              }} isSelected={val==='Jsx'}
            >
              Jsx
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("Props");
              }} isSelected={val==='Props'}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("State");
              }} isSelected={val==='State'}
            >
              State
            </TabButton>
          </menu>
          {val === content && content}
          {!(val === content) && (
           <Box {...EXAMPLES[val]}/>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
