import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    return (
        <div>
            <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
                {children}
            </AuthContext.Provider>
        </div>
    )

}
