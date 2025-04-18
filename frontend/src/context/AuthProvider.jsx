import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext()
export default function AuthProvider({children}) {
    const initialAuthUsers = localStorage.getItem("Users");
    const [authUser, setUser] = useState(
        initialAuthUsers? JSON.parse(initialAuthUsers) : undefined    
    )
    return(
        <AuthContext.Provider value={[authUser, setUser]}>
            {children}
              </AuthContext.Provider>
    )

}
export const useAuth=()=> useContext(AuthContext);