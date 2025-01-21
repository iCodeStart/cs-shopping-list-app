import { createContext, useContext } from "react";
import { ShoppingListContextType } from "./ShoppingListContext.types";

const initialValuesDefaultShoppingList: ShoppingListContextType = {
    items: [],
    savedLists: [],
    addItem: () => null,
    removeItem: () => null,
    saveList: () => null,
}

export const ShoppingListContext = createContext<ShoppingListContextType>(initialValuesDefaultShoppingList)


export const useShoppingListContext = (): ShoppingListContextType => {
    return useContext(ShoppingListContext)
}