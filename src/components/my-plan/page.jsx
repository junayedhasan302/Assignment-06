"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDownUp } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/page";
import PlanCard from "@/components/plan-card/page";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markDone,
    ready,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort(
    (firstWorkout, secondWorkout) => {
      if (sortBy === "calories") {
        return (
          secondWorkout.caloriesBurned -
          firstWorkout.caloriesBurned
        );
      }

      if (sortBy === "rating") {
        return secondWorkout.rating - firstWorkout.rating;
      }

      return firstWorkout.duration - secondWorkout.duration;
    }
  );

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  function handleRemove(workout) {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
      toast.success("Removed from today's plan");
    } else {
      removeSaved(workout.id);
      toast.success("Removed from saved");
    }
  }

  function handleDone(workout) {
    markDone(workout.id);

    if (workout.done) {
      toast.success("Workout marked as active");
    } else {
      toast.success("Workout marked as done");
    }
  }

  return (
    <section className="min-h-screen bg-[#0d0f14] px-4 py-8 text-white sm:px-6 lg:px-0 lg:py-14">
      <div className="container-fitlog">
        {/* Header */}
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[#ccff00]">
            YOUR LOG
          </p>

          <h1 className="display-font mt-3 text-5xl uppercase sm:text-6xl">
            My Plan
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#9ca3af]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            label="Exercises"
            value={plan.length}
            valueClassName="text-[#CCFF00]"
          />

          <MetricCard
            label="Minutes"
            value={totalMinutes}
          />

          <MetricCard
            label="Calories"
            value={totalCalories}
          />
        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-4 border-b border-[#292e38] pb-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-full px-4 py-2 text-xs font-bold ${
                activeTab === "plan"
                  ? "bg-[#ccff00] text-black"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              Today's Plan ({plan.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-full px-4 py-2 text-xs font-bold ${
                activeTab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              Saved ({saved.length})
            </button>
          </div>

          {/* Sort By */}
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
              <option
                value="duration"
                className="bg-[#151820]"
              >
                Duration
              </option>

              <option
                value="calories"
                className="bg-[#151820]"
              >
                Calories
              </option>

              <option
                value="rating"
                className="bg-[#151820]"
              >
                Rating
              </option>
            </select>
          </label>
        </div>

        {/* Content */}
        {!ready ? (
          <div className="flex min-h-60 items-center justify-center text-sm text-[#9ca3af]">
            Loading workouts...
          </div>
        ) : sortedList.length === 0 ? (
          <EmptyState activeTab={activeTab} />
        ) : (
          <div className="mt-6 space-y-4">
            {sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                isPlan={activeTab === "plan"}
                onRemove={() => handleRemove(workout)}
                onDone={() => handleDone(workout)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  valueClassName = "text-white",
}) {
  return (
    <div className="rounded-xl border border-[#2b303a] bg-[#151820] p-5">
      <p className="text-[11px] font-bold tracking-wider text-[#7f8794]">
        {label}
      </p>

      <p
        className={`mt-2 text-3xl font-extrabold ${valueClassName}`}
      >
        {value}
      </p>
    </div>
  );
}

function EmptyState({ activeTab }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-[#343943] px-5 py-16 text-center">
      <p className="display-font text-3xl uppercase text-white">
        Nothing here yet
      </p>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9ca3af]">
        {activeTab === "plan"
          ? "Save a workout from the library and it will appear here."
          : "Browse the library and add a lift to get today moving."}
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-extrabold text-black hover:bg-[#ddff4a]"
      >
        Go to workouts
      </Link>
    </div>
  );
}

