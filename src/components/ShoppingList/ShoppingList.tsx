import { useState } from "react";
import { AddItem } from "../AddItem";
import { ItemList } from "../ItemList";
import { useShoppingListContext } from "../../contexts";
import { Modal } from "../Modal";
import { SavedLists } from "../SavedLists";

export const ShoppingList = () => {
  const { savedLists } = useShoppingListContext();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [viewSavedLists, setViewSavedLists] = useState<boolean>(false);
  return (
    <div className="shopping-list">
      <h2>Lista de compras</h2>
      <AddItem />
      <ItemList />
      <button onClick={() => setShowModal(true)}>
        Finalizar Lista de compras
      </button>
      <button
        onClick={() => setViewSavedLists(!viewSavedLists)}
        disabled={savedLists.length === 0}
      >{`${viewSavedLists ? "Esconder" : "Mostrar"} Lista de compras`}</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {viewSavedLists && (
        <SavedLists onClose={() => setViewSavedLists(false)} />
      )}
    </div>
  );
};
