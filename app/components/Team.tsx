export default function Team() {
    return (
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jordan" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="mt-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="text-green-500"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-instagram"></i></a>
                </div>
                <h3 className="text-xl font-semibold">Jordan</h3>
                <p className="text-gray-500">Team Lead</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Annie" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="mt-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="text-green-500"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-instagram"></i></a>
                </div>
                <h3 className="text-xl font-semibold">Annie</h3>
                <p className="text-gray-500">Logistics Coordinator</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Ronnie" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="mt-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="text-green-500"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-instagram"></i></a>
                </div>
                <h3 className="text-xl font-semibold">Ronnie</h3>
                <p className="text-gray-500">Dispatcher</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="Marina" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="mt-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="text-green-500"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-green-500"><i className="fab fa-instagram"></i></a>
                </div>
                <h3 className="text-xl font-semibold">Marina</h3>
                <p className="text-gray-500">Sales Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  