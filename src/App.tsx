import './App.css'
import ToggleDark from './ToggleDark';

function App() {
    return (

        <div className="min-h-screen dark:bg-gray-800 bg-sky-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-md p-6 space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-sky-200">Dark Mode</h1>
                    <p className="text-gray-800 dark:text-sky-200">
                        This is an example of implementing dark mode using Tailwind CSS
                    </p>
                </div>
                <div className="flex justify-center">
                    <ToggleDark />
                </div>
            </div>
        </div>
    )
}

export default App;
