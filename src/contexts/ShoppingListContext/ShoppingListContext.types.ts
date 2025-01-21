export interface Item {
    name: string
    quantity: number
}

export interface SavedList {
    name: string
    items: Item[]
}

export interface ShoppingListContextType {
    items: Item[]
    savedLists: SavedList[]
    addItem: (name: string, quantity: number) => void
    removeItem: (index: number) => void
    saveList: (nameList: string) => void
}

