import Image from 'next/image'
import Link from 'next/link'

export default function EventsSection() {
  return (
    <section className="max-w-7xl mx-auto mt-28">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
          <h2 className="text-4xl font-black uppercase text-outline-red">Events</h2>
          <Link
            href="/events"
            className="bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
          >
            Trending Events →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Event Card 1 */}
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:border-red-500 hover:-translate-y-1 transition-all">
            <div className="relative">
              <Image
                className="w-full h-48 object-cover"
                src="https://mmo.aiircdn.com/1449/689d9a4cd8ac6.jpg"
                alt="Funny Bunny Comedy Club poster"
                width={400}
                height={192}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs font-semibold text-gray-400 mb-2">
                <i className="fa-solid fa-list-ul mr-1"></i> Comedy And Entertainment
              </p>
              <h3 className="text-lg font-bold text-white mb-2">Funny Bunny Comedy Club July Edition</h3>
              <div className="text-sm text-gray-300 mb-4 flex items-center">
                <i className="fa-regular fa-calendar mr-2"></i> 31st Jul 2025 19:30 • Wombo Restaurant
              </div>
              <div className="mb-4">
                <span className="border border-gray-600 rounded-full px-3 py-1 text-sm font-medium text-gray-300">
                  UGX 20,000 <i className="fa-solid fa-circle-question text-xs"></i>
                </span>
              </div>
              <div className="mt-auto border-t border-gray-600 pt-3 flex items-center text-xs text-gray-400 font-medium">
                <div className="flex items-center mr-4">
                  <i className="fa-solid fa-chart-simple mr-1"></i> 10,841
                </div>
                <div className="flex items-center mr-auto">
                  <i className="fa-regular fa-eye mr-1"></i> 85
                </div>
                <button className="hover:text-white">
                  <i className="fa-solid fa-share-nodes mr-1"></i> Share
                </button>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:border-red-500 hover:-translate-y-1 transition-all">
            <div className="relative">
              <Image
                className="w-full h-48 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_JB70tDYmLQyH5u_MT96_5THwY2j5BkIGA&s"
                alt="Master Ntakky art exhibition poster"
                width={400}
                height={192}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs font-semibold text-gray-400 mb-2">
                <i className="fa-solid fa-list-ul mr-1"></i> Arts And Culture
              </p>
              <h3 className="text-lg font-bold text-white mb-2">MASTER NTAKKY: SOLO ART EXHIBITION Titled "Ij...</h3>
              <div className="text-sm text-gray-300 mb-4 flex items-center">
                <i className="fa-regular fa-calendar mr-2"></i> 1st Aug 2025 15:00 • Nommo Gallery
              </div>
              <div className="mb-4">
                <span className="border border-gray-600 rounded-full px-3 py-1 text-sm font-medium text-gray-300">
                  UGX 100,000 <i className="fa-solid fa-circle-question text-xs"></i>
                </span>
              </div>
              <div className="mt-auto border-t border-gray-600 pt-3 flex items-center text-xs text-gray-400 font-medium">
                <div className="flex items-center mr-4">
                  <i className="fa-solid fa-chart-simple mr-1"></i> 8,873
                </div>
                <div className="flex items-center mr-auto">
                  <i className="fa-regular fa-eye mr-1"></i> 77
                </div>
                <button className="hover:text-white">
                  <i className="fa-solid fa-share-nodes mr-1"></i> Share
                </button>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:border-red-500 hover:-translate-y-1 transition-all">
            <div className="relative">
              <Image
                className="w-full h-48 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRoohPYJEZAxEX-p21M5meZJ_6KIpcP8hZQ&s"
                alt="Cotilda Inapo stand up comedy poster"
                width={400}
                height={192}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs font-semibold text-gray-400 mb-2">
                <i className="fa-solid fa-list-ul mr-1"></i> Comedy And Entertainment
              </p>
              <h3 className="text-lg font-bold text-white mb-2">Cotilda Inapo; Funny But True Stand Up Comedy S...</h3>
              <div className="text-sm text-gray-300 mb-4 flex items-center">
                <i className="fa-regular fa-calendar mr-2"></i> 1st Aug 2025 19:00 • Uganda National Theatre
              </div>
              <div className="mb-4">
                <span className="border border-gray-600 rounded-full px-3 py-1 text-sm font-medium text-gray-300">
                  UGX 30,000 <i className="fa-solid fa-circle-question text-xs"></i>
                </span>
              </div>
              <div className="mt-auto border-t border-gray-600 pt-3 flex items-center text-xs text-gray-400 font-medium">
                <div className="flex items-center mr-4">
                  <i className="fa-solid fa-chart-simple mr-1"></i> 17,759
                </div>
                <div className="flex items-center mr-auto">
                  <i className="fa-regular fa-eye mr-1"></i> 80
                </div>
                <button className="hover:text-white">
                  <i className="fa-solid fa-share-nodes mr-1"></i> Share
                </button>
              </div>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:border-red-500 hover:-translate-y-1 transition-all">
            <div className="relative">
              <Image
                className="w-full h-48 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyI8d8dPwcHnRXSQCKWKWjJFYizm-Jw2-A5g&s"
                alt="Chozen Blood concert poster"
                width={400}
                height={192}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs font-semibold text-gray-400 mb-2">
                <i className="fa-solid fa-list-ul mr-1"></i> Music And Concerts
              </p>
              <h3 className="text-lg font-bold text-white mb-2">Chozen Blood Live in Jubilation Concert</h3>
              <div className="text-sm text-gray-300 mb-4 flex items-center">
                <i className="fa-regular fa-calendar mr-2"></i> 1st Aug 2025 18:00 • Kampala Serena Hotel
              </div>
              <div className="mb-4">
                <span className="border border-gray-600 rounded-full px-3 py-1 text-sm font-medium text-gray-300">
                  UGX 100,000 <i className="fa-solid fa-circle-question text-xs"></i>
                </span>
              </div>
              <div className="mt-auto border-t border-gray-700 pt-3 flex items-center text-xs text-gray-400 font-medium">
                <div className="flex items-center mr-4">
                  <i className="fa-solid fa-chart-simple mr-1"></i> 16,049
                </div>
                <div className="flex items-center mr-auto">
                  <i className="fa-regular fa-eye mr-1"></i> 59
                </div>
                <button className="hover:text-white">
                  <i className="fa-solid fa-share-nodes mr-1"></i> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
