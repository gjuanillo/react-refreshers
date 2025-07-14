import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import AboutRoute from './AboutRoute';
import ContactRoute from './ContactRoute';
import Team from './Team';
import NotFound from './NotFound';
import CurrentLocation from './CurrentLocation';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <div className='min-h-screen bg-gray-200'>
                <nav className='bg-blue-600 p-4'>
                    <ul className='flex justify-end space-x-6'>
                        <li><Link className='text-white hover:text-yellow-400 
                            font-medium transition duration-300' to='/'>Home</Link></li>
                        <li><Link className='text-white hover:text-yellow-400 
                            font-medium transition duration-300'  to='/about'>About</Link></li>
                        <li><Link className='text-white hover:text-yellow-400 
                            font-medium transition duration-300' to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
                <CurrentLocation />
                <div className='container mx-auto py-8'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutRoute />}>
                            <Route path="team" element={<Team />} />
                        </Route>
                        <Route path="/contact" element={<ContactRoute />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;
