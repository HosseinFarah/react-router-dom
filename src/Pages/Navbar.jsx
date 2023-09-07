import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
             <Link to="/" className="navbar-item">Home</Link>|
              <Link to="/about" className="navbar-item">About</Link>|
             <Link to="/contact" className="navbar-item">Contact Me</Link>|
             <Link to="/profile" className="navbar-item">Profile</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
