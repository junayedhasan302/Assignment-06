import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function LibraryCard({ workout }) {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-[#2b303a] bg-[#20242e] transition hover:-translate-y-1 hover:border-[#ccff00]"
    >
      <div className="overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={360}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[10px] font-extrabold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-3 min-h-11 text-base font-extrabold uppercase leading-5 text-white">
          {workout.name}
        </h3>

        <p className="mt-1 truncate text-xs text-[#9ca3af]">
          {workout.equipment}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-[#343943] pt-3 text-[11px] text-[#9ca3af]">
          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14}/>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}