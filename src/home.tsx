import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleLogin = () => {
        //to previous page: navigate(-1);
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h2 className="text-3xl font-bold text-blue-600">Home Page</h2>
            <p className="text-gray-700 mt-4 text-lg">Welcome to the Home Page! Explore this site to learn more</p>
            <button onClick={handleLogin} className="text-white mt-4 text-lg rounded bg-gray-600 p-4">Login</button>
        </div>
    )
}
export default Home;
