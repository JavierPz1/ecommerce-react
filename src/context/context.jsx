import { createContext, useContext, useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(product, cantidad) {

        let newProduct = {
            ...product,
            cantidad,
        };

        if (carrito.some(el => el.id === product.id)) {

            const newCarrito = carrito.map(element => {
                if (element.id === product.id && element.cantidad < product.stock) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad
                    }
                } else {
                    return element;
                };
            })
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, newProduct]);

        };
        Toastify({
            text: "Producto agregado",
            duration: 1500,
            stopOnFocus: false,
            offset: { x: 10, y: 30 },
            style: {
                color: "black",
                background: "linear-gradient(to top,rgb(255, 255, 158),rgb(255, 255, 0))",
            },
        }).showToast();
    };



    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </AppContext.Provider>
    )
}