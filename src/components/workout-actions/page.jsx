"use client";

import { Bookmark, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/page";

export default function WorkoutActions({ workout }) {
  const { addToPlan, saveWorkout, plan } = useFitLog();

  const alreadyAdded = plan.some(
    (planWorkout) => planWorkout.id === workout.id
  );

  const planIsFull = plan.length >= 5 && !alreadyAdded;

  function handleAddToPlan() {
    const result = addToPlan(workout);

    if (result.ok) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  function handleSaveWorkout() {
    const result = saveWorkout(workout);

    if (result.ok) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        disabled={alreadyAdded || planIsFull}
        onClick={handleAddToPlan}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-extrabold text-black transition hover:bg-[#ddff4a] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={18} />

        {alreadyAdded
          ? "Already in today's plan"
          : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSaveWorkout}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#343943] px-5 py-3 text-sm font-bold text-[#e5e7eb] transition hover:border-[#ccff00] hover:text-white"
      >
        <Bookmark size={17} />
        Save for later
      </button>
    </div>
  );
}

