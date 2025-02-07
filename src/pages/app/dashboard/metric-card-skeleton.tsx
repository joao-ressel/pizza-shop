import { Skeleton } from "@/components/ui/skeleton";

export function MetricsCardSkeleton() {
    return (
        <>
        <Skeleton className="h-7 w-36"/>
        <Skeleton className="h-4 w-34"/>
        </>
    )
}