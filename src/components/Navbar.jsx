function Navbar() {
  return (
    <nav className="container flex justify-between items-center py-6">
      <h1 className="text-3xl font-bold gradient-text">
        nova flow
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li>
          <a href="#features" className="hover:text-white">
            Features
          </a>
        </li>

        <li>
          <a href="#reviews" className="hover:text-white">
            Reviews
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <button className="btn-primary">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
