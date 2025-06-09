import './App.css'

function Welcome(name: string): string {
    return "Welcome, " + name + "!";
}

function GreetInTime(hours: number): string {
    if (hours < 12) {
        return "Good morning";
    } else if (hours < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

function AlertMessage(message: string) {
    return <div style={{
        "color": "red"
    }}>{message}</div>;
}

function ShowAlert(condition: boolean, message: string) {
    if (condition) {
        return AlertMessage(message);
    }
    return null;
}

function App() {
    const now = new Date();
    const hours = now.getHours();
    return (
        <>
            <h1>{Welcome("Bob")}</h1>
            <h2>{GreetInTime(hours)}</h2>
            {ShowAlert(true, "Very Important Message")}
        </>
    )
}

export default App
