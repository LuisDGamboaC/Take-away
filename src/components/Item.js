export default function Item({ item, onDeleteItem, onToggleItem }) {
  // recibimos el ondleteitem de packinglist
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)} //actualizar el producto con el mismo id
      />
      {/* este span es donde aparece la info de la lista que el usuario agrega */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>✖️</button>
    </li>
  );
}
