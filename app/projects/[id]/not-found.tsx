import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto px-4 py-16 text-center h-screen content-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-lg mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-teal-400">
        ← Back to Projects
      </Link>
    </div>
  );
}