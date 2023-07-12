import ShimmerResCard from "./ShimmerResCard"

export default function Shimmer() {
    return(
        <section>
            <div className="container">
                <div className="body">
                    <div className="restaurant-container">
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