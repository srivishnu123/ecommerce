import "./Navbar.css"
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">Jagerry</div>
        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          
          <li><a href="/about">About</a></li>
        </ul>
        <div className="right-section">
          <a href="/login"><button className="login-btn">Login</button></a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  