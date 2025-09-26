import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white flex flex-col min-h-[30vh] mt-12">
      <div className="container mx-auto px-6 flex-grow pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider">
              <span className="text-red-500">106.5</span>{' '}
              <span className="text-white">NRGRADIO</span>
            </h2>
            <p className="text-sm text-gray-400">The Number one name in music</p>
            <p className="text-gray-300 leading-relaxed text-xs">
              Live from Nakasero, Kampala — 106.5 NRGRADIO brings you the hottest music, real talk, and city vibes. From
              events to airwaves, we keep Kampala moving.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">OFFICE</h3>
            <div className="text-gray-300 text-xs space-y-1">
              <p>Uganda</p>
              <p>Clement Hill Road</p>
              <p>Kampala.</p>
            </div>
            <a
              href="mailto:info@106.5nrgradio.ug"
              className="text-red-600 underline decoration-red-600 underline-offset-4 hover:text-red-500 transition-smooth text-sm"
            >
              info@106.5nrgradio.ug
            </a>
            <p className="text-xl font-bold tracking-wider pt-2">+256 771 751454</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/gallery" className="hover:text-red-500 transition-smooth">
                  Event Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-smooth">
                  Music Submission
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-smooth">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-500 transition-smooth">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">HYPE-MAIL</h3>
            <div className="bg-black p-4 text-center rounded-lg shadow-lg">
              <h4 className="font-playfair text-2xl mb-4">Don't miss the party!</h4>
              <form>
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-gray-800 text-white p-3 mb-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth placeholder-gray-500 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold py-3 tracking-widest border border-red-600 rounded-md hover:bg-red-500 transition-smooth text-xs"
                >
                  JOIN THE VIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-xs mr-auto mb-2 sm:mb-0">
            106.5 NRGRADIO © 2025. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 text-white">
            <a
              href="#"
              className="text-blue-600 hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="#"
              className="text-sky-400 hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-red-600 hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a
              href="#"
              className="text-purple-600 hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
