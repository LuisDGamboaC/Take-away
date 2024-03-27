import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList"; // fue exportado con un nombre no default
import Stats from "./Stats";
// import Item from "./Item";

// const initialItems = [ // puede ir dentro de usestae items
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]); // used by one or few sibligns components? yes = lift state up to first common parent
  // tanto form y packinglist usan este state
  function handleAddItems(item) {
    // una funcion puede ser usada como un prop
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // elegimos el id para borrar
    // console.log(id);
  }

  function handleToogleItem(id) {
    // update a object
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete al items"
    );
    if (confirmed) setItems([]); // regresa el array a 0
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToogleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
