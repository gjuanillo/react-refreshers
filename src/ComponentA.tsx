import ComponentB from "./ComponentB";

function ComponentA() {
    return (
        <div style={{ border: '2px solid black', padding: '10px', justifyItems: 'center' }}>
            <h2>Component A</h2>
            <ComponentB />
        </div>
    )
}

export default ComponentA;
