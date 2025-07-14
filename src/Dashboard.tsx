import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/")
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h2 className="text-3xl font-bold text-blue-600">Welcome to Dashboard</h2>
            <button onClick={handleLogout} className="text-white mt-4 text-lg rounded bg-gray-600 p-4">Logout</button>
        </div>
    )
}
export default Dashboard;
