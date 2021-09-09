import AppStateContext from "../contexts/AppStateContext";
import {useCallback, useState} from "react";
import Prototypes from "../components/Prototypes";

const AppStateProvider = ({children}) => {
    const [orders, setOrders] = useState(Prototypes)
    const [prototypes, setPrototypes] = useState([])

    const addToOrder = useCallback((id) => {
    }, [])
    const remove = useCallback((id) => {
    }, [])
    const removeAll = useCallback((id) => {
    }, [])

    return (
        <AppStateContext.Provider value={{
            prototypes,
            orders,
            addToOrder,
            remove,
            removeAll
        }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateProvider