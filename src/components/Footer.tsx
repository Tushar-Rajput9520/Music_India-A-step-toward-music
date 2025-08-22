import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/Tushar-Rajput9520" className="hover:text-white transition-colors duration-300" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tushar-singh-068426257/" className="hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/tushar_rajput_._._/" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Greater Noida, India</p>
          <p>Gr Noida 101001</p>
          <p>Email: tusharsingh@gmail.com</p>
          <p>Phone: 9520554564</p>
        </div>
      </div>

      <p className="text-center text-xs pt-8">
        © 2025 Music School. Made with ❤️ by Tushar Singh. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
