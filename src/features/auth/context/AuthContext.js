import { createContext, useContext, useState } from "react"


const UseContextData = createContext()
export const useAuthContext = () => useContext(UseContextData);
export const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [role, setRole] = useState(0)
    const [userData, setUserData] = useState(null)

    return < UseContextData.Provider value={{ role, setRole, login, setLogin, userData, setUserData }} >
        {children}
    </UseContextData.Provider >
}
