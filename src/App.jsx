import Header from "./components/headers";
import Concepts from "./components/coreConcepts";
import Examples from "./components/Examples";
function App() {

  return (
    <div>
      <Header />
      <main>
        <Concepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
