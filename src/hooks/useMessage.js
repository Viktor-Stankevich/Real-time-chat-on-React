import { useContext } from "react"
import { MessageContext } from "../hoc/MessageProvider"

export const useMessage = () => {
    return useContext(MessageContext)
}