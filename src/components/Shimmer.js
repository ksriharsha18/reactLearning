import ShimmerResCard from "./ShimmerResCard"

export default function Shimmer() {
    return(
        <section>
            <div className="container max-w-c mx-auto">
                <div className="body">
                    <div className="restaurant-container flex flex-wrap text-center justify-start">
                        {/* RestaurentTiles */}
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                        <ShimmerResCard />
                    </div>
                </div>
            </div>
        </section>
    )
}