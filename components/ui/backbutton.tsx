'use client'

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="text-xl text-left font-normal col-span-2 pb-4 md:pb-0 hover:text-teal-600 hover:underline underline-center w-fit h-fit"
    >
      ← Back
    </button>
  );
}