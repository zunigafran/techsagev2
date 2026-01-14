import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      {/* SideNav skeleton */}
      <div className="fixed inset-y-0 left-0 z-50 hidden w-20 md:flex">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 z-40 h-16 md:left-20">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex flex-col min-h-screen m-4 gap-12 lg:m-24">
        {/* Hero skeleton */}
        <div className="relative py-32">
          <Skeleton className="h-20 w-64 mb-4 md:h-32 md:w-96" />
          <Skeleton className="h-8 w-80 md:h-12 md:w-[500px]" />
        </div>

        <div className="text-center justify-items-center pt-12 gap-12">
          {/* Nav skeleton */}
          <div className="flex gap-4 justify-center mb-12">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>

          {/* Expertise skeleton */}
          <div className="mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-8" />
            <div className="container">
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
            </div>
          </div>

          {/* Projects skeleton */}
          <div className="mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-8" />
            <div className="proj-container container">
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
              <Skeleton className="aspect-square" />
            </div>
          </div>

          {/* Resume skeleton */}
          <div className="mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-8" />
            <div className="space-y-4 max-w-4xl mx-auto">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>

          {/* Footer skeleton */}
          <div className="flex justify-between items-center p-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      </div>
    </>
  )
}
