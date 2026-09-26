import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import banner from "@/assets/banner.png";
import Library from "@/components/library/page";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";
// ISSUE
// const API_URL = "https://api.abcz.workers.dev/api/fitlog";

async function getWorkouts() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load workouts");
  }

  return response.json();
}

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <>
      <section className="px-4 py-7 sm:px-6 lg:px-0 lg:py-14">
        <div className="container-fitlog overflow-hidden rounded-2xl bg-[#20242e]">
          <div className="grid items-center gap-8 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-14">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-[#ccff00]">
                WORKOUT LIBRARY
              </p>

              <h1 className="display-font mt-4 max-w-3xl text-4xl leading-[.95] text-white sm:text-5xl lg:text-7xl">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#9ca3af] sm:text-base">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <Link
                href="#library"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-extrabold text-black transition hover:bg-[#ddff4a]"
              >
                BROWSE WORKOUTS
                <ArrowDown size={16} />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={banner}
                alt="FitLog workout banner"
                priority
                className="h-auto w-full max-w-[470px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Library workouts={workouts} />
    </>
  );
}