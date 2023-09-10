function navBarApp() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">My Website</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navBarApp;
