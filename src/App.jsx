import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/headers";
import Concepts from "./components/concepts";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          {CORE_CONCEPTS.map((item)=> <Concepts />)}
        </section>
      </main>
    </div>
  );
}

export default App;
