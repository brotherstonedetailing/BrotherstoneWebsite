import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-gold-500 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl py-16 px-6">
        
        {/* Header / Business Name */}
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          Brotherstone Mobile Detailing
        </h1>

        {/* Tagline / Optional */}
        <p className="text-lg mb-12 text-gold-300">
          Shine Your Ride, Half the Time
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full">
          <div className="p-6 bg-black border border-yellow-400 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Interior Detail</h2>
            <p className="text-lg">$180+</p>
          </div>
          <div className="p-6 bg-black border border-yellow-400 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Exterior Detail</h2>
            <p className="text-lg">$110+</p>
          </div>
          <div className="p-6 bg-black border border-yellow-400 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Full Detail</h2>
            <p className="text-lg">$250+</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="tel:8329208069"
            className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Call: 832-920-8069
          </a>
          <a
            href="mailto:brotherstonedetailing@gmail.com"
            className="px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-500 transition"
          >
            Email: brotherstonedetailing@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}