import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Welcome
        </h1>

        <p className="mt-4 text-lg opacity-80">
          This is a clean starting page. Replace this content with your app.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium transition hover:bg-white/20">
            Get started
          </button>

          <button className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
}
