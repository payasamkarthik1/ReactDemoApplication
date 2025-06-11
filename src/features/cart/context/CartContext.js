import { createContext, useContext, useReducer } from "react"

const CartContextData = createContext()

const initState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const cartReducer = (state, action) => {
    console.log("actionData", action.products)
    switch (action.type) {
        case 'ADD_CART':
            console.log("state", ...state.cart)
            const newCart = [...state.cart, action.products]
            console.log("newCart", newCart)
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { ...state, cart: newCart }
        default:
            return { ...state }
    }
}

export const useCartContext = () => useContext(CartContextData);
export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initState);


    return < CartContextData.Provider value={{ state, dispatch }} >
        {children}
    </CartContextData.Provider >
}
