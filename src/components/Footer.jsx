function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 py-10 mt-10"
    >
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold gradient-text">
            AI Note
          </h2>

          <p className="text-gray-400 mt-2">
            Smart notes powered by AI.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Features
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>

          <a href="#" className="hover:text-blue-400">
            Privacy
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 AI Note. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
