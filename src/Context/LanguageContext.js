import React from "react";
import { useState } from "react";

export const LanguageContext = React.createContext();


const LanguageProvider = ({ children }) => {
    
    const [lang,setLang] = useState("EN")

    return (
        <LanguageContext.Provider value={{ lang,setLang }} >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;