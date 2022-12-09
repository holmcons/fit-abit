import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>FitABit exercises</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Exercise</Link>
        </div>
    </nav>
    );
}
 
export default Navbar;