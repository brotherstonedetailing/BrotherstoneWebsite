"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[100vh]">
        <Image
          src="/hero.jpg"
          fill
          className="object-cover"
          alt="Pantanal Partnership hero image"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="absolute inset-0 squeezetainer flex items-center">
          <div className="flex flex-col gap-4 lg:w-[50%]">
            <h1 className="text-white text-2xl lg:text-6xl font-semibold">
              Brotherstone
            </h1>
            <p className="text-white text-sm lg:text-2xl">
              Redefining car detailing in Katy TX. 
            </p>
            <div className="flex gap-4 text-base md:text-xl items-center">
              <Link
                href="/donate"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition"
              >
                Get a Quote
              </Link>
              <Link
                href="/currentProjects"
                className="underline text-white hover:opacity-80 transition"
              >
                See pricing plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="squeezetainer py-[10vh] bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-blue-500">WHO ARE WE</span>
              <h2 className="text-3xl lg:text-4xl font-semibold">
                About Us
              </h2>
            </div>

            <p className="text-lg lg:text-xl">
              We’re a locally owned mobile detailing company proudly serving Katy, Texas. 
              Run by two brothers with a passion for clean cars and quality work, we bring
              professional detailing straight to your driveway. Our focus is simple:
              reliable service, honest pricing, and results that make your vehicle shine.
            </p>

            <div>
              <Link
                href="/aboutUs"
                className="inline-block text-white bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                More about us
              </Link>
            </div>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/logo.png"
              fill
              className="object-contain"
              alt="About Pantanal Partnership"
            />
          </div>
        </div>
      </section>

{/* PRICING PLANS */}
<section className="bg-gray-50 py-[10vh]">
  <div className="squeezetainer">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-semibold text-black">
        Pricing Plans
      </h2>
      <p className="text-gray-600 mt-3">
        Professional mobile detailing in Katy, Texas — right at your driveway.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">Basic Detail</h3>
        <p className="text-4xl font-bold text-blue-500 mb-4">$60</p>
        <p className="text-gray-600 mb-6">
          Exterior hand wash, wheel clean, tire shine, and quick interior wipe
          down.
        </p>
        <Link
          href="/book"
          className="mt-auto text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
        >
          Book Now
        </Link>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-2 border-blue-500 scale-[1.02]">
        <h3 className="text-xl font-semibold mb-2">Full Detail</h3>
        <p className="text-4xl font-bold text-blue-500 mb-4">$120</p>
        <p className="text-gray-600 mb-6">
          Complete interior deep clean plus exterior wash, wax, and tire
          treatment.
        </p>
        <Link
          href="/book"
          className="mt-auto text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
        >
          Book Now
        </Link>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">Premium Detail</h3>
        <p className="text-4xl font-bold text-blue-500 mb-4">$200</p>
        <p className="text-gray-600 mb-6">
          Full detail plus paint sealant, deep carpet extraction, and premium
          finish.
        </p>
        <Link
          href="/book"
          className="mt-auto text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
}