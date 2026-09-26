import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/workout-actions/page";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";
// const API_URL = "https://api.abcz.workers.dev/api/fitlog";

async function getWorkout(workoutId) {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load workout");
  }

  const workouts = await response.json();
  return workouts.find((workout) => workout.id === Number(workoutId));
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  
  if (!workout) {
    notFound();
  }

  const workoutDetails = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <section className="min-h-screen bg-[#0d0f14] px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-0 lg:py-14">
      <div className="container-fitlog grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-2xl border border-[#2b303a] bg-[#151820]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="h-full min-h-[330px] w-full object-cover sm:min-h-[500px]"
          />
        </div>

        <div>
          <h1 className="display-font text-4xl uppercase leading-none sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#9ca3af] sm:text-base">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-[#2b303a] bg-[#151820]">
            {workoutDetails.map(([label, value], index) => (
              <div
                key={label}
                className={`flex items-center justify-between gap-5 px-4 py-3.5 ${
                  index !== workoutDetails.length - 1
                    ? "border-b border-[#2b303a]"
                    : ""
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f8794]">
                  {label}
                </span>

                <span className="text-right text-sm font-medium text-[#e5e7eb]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-extrabold uppercase tracking-wider">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, index) => (
                <li
                  key={`${workout.id}-${index}`}
                  className="flex gap-3 text-sm leading-6 text-[#d1d5db]"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#20242e] text-xs font-bold text-[#ccff00]">
                    {index + 1}
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
}