import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, Trash2 } from "lucide-react";

export default function PlanCard({ workout, isPlan, onRemove, onDone }) {
  return (
    <article
      className={`rounded-2xl border bg-[#151820] p-3 sm:p-4 ${
        workout.done ? "border-[#ccff00]/50" : "border-[#2b303a]"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src={workout.image}
          alt={workout.name}
          width={180}
          height={140}
          className="h-44 w-full rounded-xl object-cover sm:h-28 sm:w-40"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#20242e] px-2.5 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          <h2
            className={`mt-2 text-lg font-extrabold uppercase ${
              workout.done ? "text-[#ccff00]" : "text-white"
            }`}
          >
            {workout.name}
          </h2>

          <p className="mt-1 text-xs text-[#9ca3af]">{workout.equipment}</p>

          <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-[#9ca3af]">
            <span className="flex items-center gap-1">
              <Clock3 size={14} className="text-[#ccff00]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={14} className="text-[#ccff00]" fill="#ccff00" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={14} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
          <Link
            href={`/exercise/${workout.id}`}
            className="rounded-lg border border-[#343943] px-3 py-2 text-xs font-bold text-[#d1d5db] hover:border-[#ccff00] hover:text-white"
          >
            View Details
          </Link>

          {isPlan && (
            <button
              type="button"
              onClick={onDone}
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold ${
                workout.done
                  ? "bg-[#20242e] text-[#ccff00]"
                  : "bg-[#ccff00] text-black"
              }`}
            >
              <Check size={14} />
              {workout.done ? "Done" : "Mark as Done"}
            </button>
          )}

          <button
            type="button"
            onClick={onRemove}
            aria-label="Remove workout"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[#343943] text-[#9ca3af] hover:border-red-400 hover:text-red-400"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
