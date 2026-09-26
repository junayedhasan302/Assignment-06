"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/page";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { planCount, saveCount } = useFitLog();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#292e38] bg-[#0c0d10]/95 backdrop-blur">
      <div className="container-fitlog flex min-h-[72px] items-center justify-between gap-5">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Image src={logo} alt="FitLog logo" width={30} height={30} />
          <span className="text-lg font-extrabold tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        <nav className="hidden md:block">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                pathname === "/"
                  ? "bg-[#1a2312] text-[#ccff00]"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                pathname.startsWith("/my-plan")
                  ? "bg-[#1a2312] text-[#ccff00]"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/my-plan"
            className="rounded-full border border-[#3b414c] px-3 py-1.5 text-xs font-bold text-[#d1d5db] transition hover:border-[#ccff00]"
          >
            Saved <span className="ml-1 text-[#ccff00]">{saveCount}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition hover:bg-[#ddff4a]"
          >
            Plan <span className="ml-1">{planCount}</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-lg border border-[#343943] p-2 text-white md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#292e38] bg-[#0c0d10] px-4 py-4 md:hidden">
          <div className="container-fitlog flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-bold ${
                pathname === "/"
                  ? "bg-[#1a2312] text-[#ccff00]"
                  : "text-[#d1d5db]"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-bold ${
                pathname.startsWith("/my-plan")
                  ? "bg-[#1a2312] text-[#ccff00]"
                  : "text-[#d1d5db]"
              }`}
            >
              My Plan
            </Link>

            <div className="mt-2 flex gap-2 border-t border-[#292e38] pt-4">
              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex-1 rounded-lg border border-[#343943] px-3 py-2 text-center text-xs font-bold text-[#d1d5db]"
              >
                Saved {saveCount}
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex-1 rounded-lg bg-[#ccff00] px-3 py-2 text-center text-xs font-bold text-black"
              >
                Plan {planCount}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}