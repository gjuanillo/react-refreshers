import './App.css'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-md max-w-sm w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Hello, React + Tailwind!</h1>
                <p className="text-gray-600 mb-4">
                    This is a basic component styled with Tailwind CSS.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default App;
