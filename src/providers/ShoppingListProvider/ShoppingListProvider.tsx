import { ReactNode, useState } from "react";
import { Item, SavedList, ShoppingListContext } from "../../contexts";

export const ShoppingListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [savedLists, setSavedLists] = useState<SavedList[]>([]);

  const addItem = (name: string, quantity: number) => {
    setItems((prevState) => [...prevState, { name, quantity }]);
  };

  const removeItem = (index: number) => {
    setItems((prevState) => prevState.filter((_, idx) => idx !== index));
  };

  const saveList = (nameList: string) => {
    setSavedLists((prevState) => [...prevState, { name: nameList, items }]);
    setItems([]);
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, savedLists, addItem, removeItem, saveList }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
