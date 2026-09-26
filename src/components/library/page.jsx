"use client";

import { useState } from "react";
import LibraryCard from "@/components/library-card/page";
import { ArrowDownUp } from "lucide-react";
export default function Library({ workouts }) {
  const [sortBy, setSortBy] = useState("id");

  let visibleWorkouts = [...workouts];

  visibleWorkouts.sort((firstWorkout, secondWorkout) => {
    if (sortBy === "calories") {
      return secondWorkout.caloriesBurned - firstWorkout.caloriesBurned;
    }

    if (sortBy === "rating") {
      return secondWorkout.rating - firstWorkout.rating;
    }

    if (sortBy === "duration") {
      return firstWorkout.duration - secondWorkout.duration;
    }

    return firstWorkout.id - secondWorkout.id;
  });

  return (
    <section
      id="library"
      className="scroll-mt-24 bg-[#0d0f14] px-4 pb-16 pt-5 sm:px-6 lg:px-0 lg:pb-20"
    >
      <div className="container-fitlog">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="display-font text-4xl uppercase text-white sm:text-5xl">
              The Library
            </h2>

            <p className="mt-2 text-sm text-[#9ca3af]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="flex w-full justify-start sm:w-auto">
            <label className="flex items-center gap-2 rounded-lg border border-[#343943] bg-[#151820] px-3 py-2.5">
              <ArrowDownUp
                size={15}
                className="text-[#ccff00]"
              />

              <span className="text-xs text-[#9ca3af]">
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="bg-transparent text-xs font-bold text-white outline-none"
              >
                <option value="id" className="bg-[#151820]">
                  Default
                </option>

                <option value="duration" className="bg-[#151820]">
                  Duration
                </option>

                <option value="calories" className="bg-[#151820]">
                  Calories
                </option>

                <option value="rating" className="bg-[#151820]">
                  Rating
                </option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleWorkouts.map((workout) => (
            <LibraryCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

        {visibleWorkouts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#343943] py-16 text-center">
            <p className="text-sm font-bold text-white">
              NO WORKOUTS FOUND
            </p>

            <p className="mt-2 text-xs text-[#9ca3af]">
              No workouts are available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

