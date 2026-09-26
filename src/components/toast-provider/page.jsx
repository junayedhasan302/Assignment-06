"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#20242e",
          color: "#ffffff",
          border: "1px solid #343943",
        },
      }}
    />
  );
}