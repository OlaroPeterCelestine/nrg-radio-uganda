import Image from 'next/image'
import Link from 'next/link'

export default function VoupSection() {
  return (
    <section className="max-w-7xl mx-auto mt-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
          <h2 className="text-4xl font-black uppercase text-outline-red">Voup</h2>
          <Link
            href="/shop"
            className="bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
          >
            Fresh Voup →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden group flex flex-col text-center p-4 transition-all hover:border-red-500 hover:-translate-y-1">
            <Image
              src="https://playtz-1iiy.vercel.app/HUT.png"
              alt="Black bucket hat with PLAY logo"
              className="mx-auto h-64 object-contain group-hover:scale-105 transition-transform"
              width={256}
              height={256}
            />
            <h3 className="text-xl font-bold mt-4">Bucket hats</h3>
            <p className="text-gray-400">Ushs 5000</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden group flex flex-col text-center p-4 transition-all hover:border-red-500 hover:-translate-y-1">
            <Image
              src="https://playtz-1iiy.vercel.app/BOTTLEE.png"
              alt="White water bottle with PLAY logo"
              className="mx-auto h-64 object-contain group-hover:scale-105 transition-transform"
              width={256}
              height={256}
            />
            <h3 className="text-xl font-bold mt-4">Bottles</h3>
            <p className="text-gray-400">Ushs 5000</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden group flex flex-col text-center p-4 transition-all hover:border-red-500 hover:-translate-y-1">
            <Image
              src="https://playtz-1iiy.vercel.app/BOTTLEE.png"
              alt="Black t-shirt with PLAY logo"
              className="mx-auto h-64 object-contain group-hover:scale-105 transition-transform"
              width={256}
              height={256}
            />
            <h3 className="text-xl font-bold mt-4">Tees</h3>
            <p className="text-gray-400">Ushs 5000</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-xl shadow-md overflow-hidden group flex flex-col text-center p-4 transition-all hover:border-red-500 hover:-translate-y-1">
            <Image
              src="https://playtz-1iiy.vercel.app/BANGLE.png"
              alt="Red and black bangles with PLAY logo"
              className="mx-auto h-64 object-contain group-hover:scale-105 transition-transform"
              width={256}
              height={256}
            />
            <h3 className="text-xl font-bold mt-4">Bangles</h3>
            <p className="text-gray-400">Ushs 5000</p>
          </div>
        </div>
      </div>
    </section>
  )
}
