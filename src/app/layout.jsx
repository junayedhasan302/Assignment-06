import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import FitProvider from "@/context/page";
import ToastProvider from "@/components/toast-provider/page";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense workout library and daily training log.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastProvider />
        </FitProvider>
      </body>
    </html>
  );
}

