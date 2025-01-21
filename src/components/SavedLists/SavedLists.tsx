import { useShoppingListContext } from "../../contexts"
import { SavedListProps } from "./SavedLists.types"

export const SavedLists = ({ onClose } : SavedListProps) => {
    const { savedLists } = useShoppingListContext()

    const handleSendWhatsappData = (listName: string) => {
        const message = `Lista de compras - ${listName}\n\n` + 
        savedLists.find(list => list.name === listName)?.items.map((item => `Item: ${item.name} - Quantidade: ${item.quantity}`)).join("\n")

        const whatsAppUrl = `https://api.whatsapp.com/send?phone=+5532998573527&text=${encodeURIComponent(message)}`

        window.open(whatsAppUrl, '_blank')
    }
    return (
        <div>
            <h2>Listas Salvas</h2>
            <ul>
                {savedLists.map((savedList, index) => (
                    <li key={index}>
                        <strong>{savedList.name}</strong>
                        <ul>
                            {savedList.items.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} - {item.quantity}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleSendWhatsappData(savedList.name)}>Enviar para o Whatsapp</button>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>Fechar</button>
        </div>
    )
}