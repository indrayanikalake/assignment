import { createContext, useContext, useState } from "react";


const Context = createContext();

const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([]);

    return (
        <Context.Provider value={{users, setUsers}}>
            {children}
        </Context.Provider>
    )

}

 export const UserState = () =>{
    return useContext(Context)
}

export {Context, UserProvider}