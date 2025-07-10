import ThemedComponent from "./ThemedComponent";

function ComponentB() {
    return (
        <div style={{ border: '2px solid black', padding: '10px', justifyItems: 'center' }}>
            <h2>Component B</h2>
            <ThemedComponent />
        </div>
    )
}

export default ComponentB;
