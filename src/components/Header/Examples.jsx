import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selected) {
    //console.log("Button selected " + selected);
    setSelectedTopic(selected);
    //console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          States
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}