import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ border: '2px solid black', padding: '10px', justifyItems: 'center' }}>
            <h2>Themed Component</h2>
            <p>The current theme is: {theme}</p>
        </div>
    )
}

export default ThemedComponent;
