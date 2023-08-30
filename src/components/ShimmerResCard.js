export default ShimmerResCard = () => {
    return (
        <div className="shimmer-res-card max-w-1/4 w-[290px] h-[250px] my-5 mx-10 p-1.5 border bg-gray-300">
            <div className="img w-full h-[165px] bg-gray-400 my-1.5"></div>
            <h3></h3>
            <div className="shimmer-cuisine w-full h-[12px] my-1 bg-gray-400"></div>
            <div className="hotelFeedback flex items-center justify-between">
                <h5 className="shimmer-rating w-1/4 h-[12px] my-1 bg-gray-400"></h5>
                <h5 className="w-1/4 h-[12px] my-1 bg-gray-400"></h5>
            </div>
        </div>
    )
}