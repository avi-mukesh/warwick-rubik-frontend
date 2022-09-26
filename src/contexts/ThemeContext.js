import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
})

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme", false)

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev)
    }

    const bgColor = isDarkTheme ? "dark" : "light"
    const textColor = isDarkTheme ? "light" : "dark"

    return (
        <ThemeContext.Provider
            value={{ isDarkTheme, toggleTheme, bgColor, textColor }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
