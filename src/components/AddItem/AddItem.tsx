import { useState } from "react";
import { useShoppingListContext } from "../../contexts";

export const AddItem = () => {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const { addItem } = useShoppingListContext()


  const handleAddItem = () => {
    if(name.trim() !== ""){
        addItem(name, quantity);
        setName('')
        setQuantity(0)
    }
  }
  return (
    <div className="add-item">
      <input
        type="text"
        placeholder="Nome do item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="number" placeholder="Quantidade" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>

      <button onClick={handleAddItem}>Adicionar</button>
    </div>
  );
};
