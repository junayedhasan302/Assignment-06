import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#0d0f14] px-4 text-center">
      <div>
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#ccff00]">
          404
        </p>

        <h1 className="display-font text-5xl uppercase text-white sm:text-7xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9ca3af]">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#ddff4a]"
        >
          <ArrowLeft size={17} />
          Back to workouts
        </Link>
      </div>
    </section>
  );
}