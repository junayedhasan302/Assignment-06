export default function Loading() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center bg-[#0d0f14]">
      <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#303641] border-t-[#ccff00]" />
        Loading workouts...
      </div>
    </div>
  );
}