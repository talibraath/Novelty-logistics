export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Condition</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs & Help</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>230 OCEAN PKWY APT C5<br />BROOKLYN, NY 11218</p>
          <p>(347) 544-9476</p>
          <p>ronniedispatch20@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 gap-2">
          
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p>Please suggest any improvements for our service.</p>
          <form className="mt-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 w-full rounded-lg text-gray-900"
            />
            <button 
              type="submit" 
              className="bg-green-500 text-white p-2 mt-2 w-full rounded-lg hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-400 text-sm">
        © NoveltyLogistics, All Right Reserved.
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Cookies</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Help</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">FAQs</a>
        </div>
      </div>
    </footer>
  );
}
