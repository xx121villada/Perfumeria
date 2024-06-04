import { createContext, useState } from "react";
export const dataContext = createContext();

const DataProvider = ({children}) =>{
    const [librosDelCarrito, setLibrosDelCarrito] = useState([])
    const [cantidadElementos, setCantidadElementos] = useState(0)

    return (
        //valores que esten dentro se van a repartir
        <dataContext.Provider value={{librosDelCarrito, setLibrosDelCarrito,cantidadElementos,setCantidadElementos}}></dataContext.Provider>
    )

}

export default DataProvider;