import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme
    const [userPreferences, setUserPreferences] = useState({}); // Store user preferences

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme, userPreferences, setUserPreferences }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};