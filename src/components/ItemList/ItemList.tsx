import { useShoppingListContext } from "../../contexts";

export const ItemList = () => {
  const { items, removeItem } = useShoppingListContext();
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.quantity}
          <button onClick={() => removeItem(index)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};
