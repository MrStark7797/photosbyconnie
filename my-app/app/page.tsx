import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <section className="relative isolate flex h-[50vh] w-full items-center justify-center overflow-hidden">
        <Image
          src="/connie.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-black/30"
        />
        <div className="relative z-20 px-6 text-center text-white">
          <h1 className="text-4xl font-medium tracking-wide underline decoration-2 underline-offset-8 sm:text-6xl">
            Connie L-I
          </h1>
          <p className="mt-6 text-lg sm:text-xl">
            Southampton Based Photography
          </p>
        </div>
      </section>
      {/* Nightlife: title on the left, photo on the right */}
      <section
        aria-labelledby="nightlife-title"
        className="grid w-full grid-cols-[60%_40%] bg-lightgrey"
      >
        <div className="flex items-center justify-center px-3 py-8">
          <h2
            id="nightlife-title"
            className="text-center text-brown font-light uppercase tracking-wide text-brown underline underline-offset-4 sm:text-3xl"
          >
            Nightlife Photos
          </h2>
        </div>

        <Link
          href="/galleries/nightlife"
          aria-label="View nightlife photos"
          className="group relative block h-40 overflow-hidden sm:h-64"
        >
          <Image loading="eager"
            src="/nightlife.jpg"
            alt="Nightlife photography"
            fill
            sizes="50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/20"
          />

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-white px-3 py-1 text-lg font-light uppercase tracking-widest text-white">
            View
          </span>
        </Link>
      </section>
      <section
        aria-labelledby="events-title"
        className="grid w-full grid-cols-[40%_60%] bg-green"
      >
        <Link
          href="/galleries/events"
          aria-label="View event photos"
          className="group relative block h-40 overflow-hidden sm:h-64"
        >
          <Image loading="eager"
            src="/event.jpg"
            alt="Event photography"
            fill
            sizes="50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/20"
          />

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-white px-3 py-1 text-lg font-light uppercase tracking-widest text-white">
            View
          </span>
        </Link>

        <div className="flex items-center justify-center px-3 py-8">
          <h2
            id="events-title"
            className="text-center text-lightgrey font-light uppercase tracking-wide text-lightgrey underline underline-offset-4 sm:text-3xl"
          >
            Event Photos
          </h2>
        </div>
      </section>
    </main>
  );
}