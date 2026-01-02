'use client'

import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="text-teal-400 hover:text-teal-600 hover:underline underline-center"
    >
      ← Go Back to Previous Page
    </button>
  );
}

