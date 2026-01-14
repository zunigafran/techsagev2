import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="page-container gap-4 !h-auto">
        {/* Title skeleton */}
        <div>
          <Skeleton className="h-12 w-48 py-8" />
        </div>

        {/* Projects grid skeleton */}
        <div className="proj-container container">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              className="relative aspect-square flex flex-col overflow-hidden"
            >
              {/* Image skeleton */}
              <Skeleton className="absolute inset-0 z-0 w-full h-full" />
              
              {/* Content skeleton */}
              <CardContent className="mt-auto flex flex-col gap-2 text-start z-10 relative bg-card p-4 h-2/3 translate-y-1/3 opacity-95 md:h-1/3">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full hidden md:block" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="text-center text-secondary font-semibold bg-ring py-2 px-2 lg:px-32 flex flex-row justify-between mt-auto">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  )
}
