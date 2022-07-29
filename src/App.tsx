import { AddNewItem } from "./components/add-new-item/add-new-item";
import { AppContainer } from "./components/app-container/app-container.style";
import { Card } from "./components/card/card";
import { Column } from "./components/column";

function App() {
  return (
    <AppContainer>
      <Column title="To do">
        <Card text="Read books" />
        <Card text="Read books" />
        <Card text="Read books" />
      </Column>
      <Column title="In Progress">
        <Card text="Read books" />
      </Column>
      <Column title="Completed">
        <Card text="Read books" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add New Item"
        onAdd={() => console.log("Let's goo")}
      />
    </AppContainer>
  );
}

export default App;
