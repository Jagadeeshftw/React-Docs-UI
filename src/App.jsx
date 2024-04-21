import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/headers";
import TabButton from "./components/TabButton";
const Concepts = ({ image, title, description }) => {
  return (
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((item)=> <Concepts {...item} />)}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
