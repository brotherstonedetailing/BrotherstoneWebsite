"use client";
import Image from "next/image";
import Link from "next/link";
import './globals.css';
import { Sansation } from 'next/font/google'; 

const sansation = Sansation({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
}); 

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id = "hero" className="relative w-full h-[100vh]">
        <Image
          src="/hero.jpg"
          fill
          className="object-cover"
          alt="Pantanal Partnership hero image"
          priority
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

        <div className="absolute inset-0 squeezetainer flex items-center justify-center">
          <div className="flex flex-col gap-4 lg:w-[50%] font-thin" style={{ fontFamily: sansation.style.fontFamily }}>
            <h1 className={sansation.className + ' text-[var(--text)] text-2xl lg:text-6xl font-bold tracking-wider'}>
              BROTHERSTONE
            </h1>
            <p className="text-[var(--text)] text-sm lg:text-2xl">
              Redefining car detailing in Katy TX. 
            </p>
            <div className="flex gap-4 text-base md:text-xl items-center">
              <Link
                href="/donate"
                className="bg-[var(--primary)] hover:opacity-80 text-[var(--background)] px-5 py-2 rounded-md transition"
              >
                Get a Quote
              </Link>
              <Link
                href="/currentProjects"
                className="underline text-[var(--text)] hover:opacity-80 transition"
              >
                See pricing plans
              </Link>
            </div>
          </div>
          <div className="hidden md:block bg-center bg-[url('/logo.png')] bg-contain bg-no-repeat aspect-video w-[50%]"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="squeezetainer py-[10vh] bg-[var(--background)] text-[var(--text)] font-thin" style={{ fontFamily: sansation.style.fontFamily }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[var(--primary)] text-sm">WHO ARE WE</span>
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
                className="inline-block text-[var(--background)] bg-[var(--primary)] px-5 py-3 rounded-lg hover:opacity-80 transition"
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
      <section id="pricing" className="bg-[var(--background2)] py-[10vh] font-thin" style={{ fontFamily: sansation.style.fontFamily }}>
        <div className="squeezetainer">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--text)]">
              Pricing Plans
            </h2>
            <p className="text-[var(--secondary)] mt-3">
              Professional mobile detailing in Katy, Texas — right at your driveway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-[var(--background)] rounded-2xl shadow-md p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Basic Detail</h3>
              <p className="text-4xl font-bold text-[var(--primary)] mb-4">$60</p>
              <p className="text-[var(--secondary)] mb-6">
                Exterior hand wash, wheel clean, tire shine, and quick interior wipe down.
              </p>
              <Link
                href="/book"
                className="mt-auto text-center bg-[var(--primary)] hover:opacity-80 text-[var(--background)] py-3 rounded-lg transition"
              >
                Book Now
              </Link>
            </div>

            {/* CARD 2 */}
            <div className="bg-[var(--background)] rounded-2xl shadow-lg p-8 flex flex-col border-2 border-[var(--primary)] scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Full Detail</h3>
              <p className="text-4xl font-bold text-[var(--primary)] mb-4">$120</p>
              <p className="text-[var(--secondary)] mb-6">
                Complete interior deep clean plus exterior wash, wax, and tire treatment.
              </p>
              <Link
                href="/book"
                className="mt-auto text-center bg-[var(--primary)] hover:opacity-80 text-[var(--background)] py-3 rounded-lg transition"
              >
                Book Now
              </Link>
            </div>

            {/* CARD 3 */}
            <div className="bg-[var(--background)] rounded-2xl shadow-md p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Premium Detail</h3>
              <p className="text-4xl font-bold text-[var(--primary)] mb-4">$200</p>
              <p className="text-[var(--secondary)] mb-6">
                Full detail plus paint sealant, deep carpet extraction, and premium finish.
              </p>
              <Link
                href="/book"
                className="mt-auto text-center bg-[var(--primary)] hover:opacity-80 text-[var(--background)] py-3 rounded-lg transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* TESTIMONIALS */}
<section id="testimonials" className="bg-[var(--background)] py-[10vh] font-thin" style={{ fontFamily: sansation.style.fontFamily }}>
  <div className="squeezetainer">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--text)]">
        What Our Clients Say
      </h2>
      <p className="text-[var(--secondary)] mt-3">
        Real feedback from our happy customers in Katy, Texas.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* TESTIMONIAL 1 */}
      <div className="bg-[var(--background2)] rounded-2xl shadow-md p-8 flex flex-col">
        <p className="text-[var(--text)] mb-6">
          “Brotherstone did an amazing job on my car! The attention to detail was outstanding, and my car looks brand new.”
        </p>
        <div className="mt-auto">
          <span className="font-semibold text-[var(--primary)]">– Jason M.</span>
          <p className="text-[var(--secondary)] text-sm">Katy, TX</p>
        </div>
      </div>

      {/* TESTIMONIAL 2 */}
      <div className="bg-[var(--background2)] rounded-2xl shadow-md p-8 flex flex-col">
        <p className="text-[var(--text)] mb-6">
          “Fast, reliable, and professional. I highly recommend Brotherstone for anyone who wants their car looking perfect.”
        </p>
        <div className="mt-auto">
          <span className="font-semibold text-[var(--primary)]">– Sarah L.</span>
          <p className="text-[var(--secondary)] text-sm">Katy, TX</p>
        </div>
      </div>

      {/* TESTIMONIAL 3 */}
      <div className="bg-[var(--background2)] rounded-2xl shadow-md p-8 flex flex-col">
        <p className="text-[var(--text)] mb-6">
          “The team was punctual, friendly, and my car has never looked better. Excellent service!”
        </p>
        <div className="mt-auto">
          <span className="font-semibold text-[var(--primary)]">– Mike R.</span>
          <p className="text-[var(--secondary)] text-sm">Katy, TX</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}