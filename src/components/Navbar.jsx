import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold">Luxury To-Do</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;