const Footer = () => {
  return (
    <footer className="bg-red-400 p-4 text-center text-white">
      <p>&copy; This is our new webiste .Please support us.</p>
      <div className="flex justify-center mt-2 space-x-4">
        <a href="#" className="hover:text-gray-300">Facebook</a>
        <a href="#" className="hover:text-gray-300">Youtube</a>
        <a href="#" className="hover:text-gray-300">Twitter</a>
      </div>
    </footer>
  );
};
export default Footer;
