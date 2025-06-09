import './App.css'

function App() {
    const pi = Math.PI;
    let name = "Guest";
    const buttonLabel = "Proceed";
    const buttonLabel2 = "Surprise Me";
    const image = "https://placehold.co/400x200/png";
    const isLoggedin = true;
    const coupon = Math.floor(Math.random() * 90000000) + 10000000;
    // Ternary operator
    const loginStatus = isLoggedin ? "You are logged in" : "You are not logged in";
    const orders = ["pasta"];
    const showOrders = <p>Current orders: {orders.length}</p>
    if (isLoggedin) {
        name = "John Doe"
        return (
            <>
                <h1>Welcome, {name}</h1>
                <h2>{loginStatus}</h2>
                <img src={image} alt="placeholder image" />
                <br />
                {pi}
                <br />
                {/* And Logic */}
                {orders.length > 0 && showOrders}
                <button style={{ backgroundColor: 'green', color: 'white', margin: '10px' }}>
                    {buttonLabel}
                </button>

                <button onClick={() => alert(`Here's a Pizza Coupon! ` + coupon)}
                    style={{ backgroundColor: 'blue', color: 'white', margin: '10px' }}>
                    {buttonLabel2}
                </button>
            </>
        )
    } else {
        return (
            <>
                <h1>Welcome, {name}</h1>
                <h2>{loginStatus}</h2>
                <h2>Please Log in</h2>
            </>
        )
    }
}

export default App
