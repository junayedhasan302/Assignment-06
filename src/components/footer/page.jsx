import Image from "next/image";
import footerLogo from "@/assets/footer-logo.png";
export default function Footer() {
  return (
    <footer className="border-t border-[#292e38] bg-[#0c0d10]">
      <div className="container-fitlog flex flex-col items-center justify-between gap-3 py-7 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            alt="FitLog footer logo"
            width={26}
            height={26}
          />

          <span className="text-sm font-extrabold text-white">FITLOG</span>
        </div>

        <p className="text-xs text-[#6b7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}