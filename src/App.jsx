import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(selected) {
    console.log("Button selected " + selected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton onClick={() => handleSelect("states")}>States</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
