const BillingDetails = ({ totalPrice }) => {
    return (
        <div className="w-1/4 border-2 h-[200px] p-3">
            <div>Bill Details</div>
            <div>
                <div className="flex justify-between my-5">
                    <span>Item Total : </span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between my-5">
                    <span>GST and Restaurant Charges:</span>
                    <span>₹{Math.round(0.18 * totalPrice)}</span>
                </div>
                <div className="flex justify-between cursor-pointer text-white bg-green-500  my-5 p-2 rounded-xl">
                    <span className="block max-w-1/2">To Pay</span>
                    <span className="block max-w-1/2">₹{Math.round(totalPrice + (0.18*totalPrice))}</span>
                </div>
            </div>
        </div>
    )
}

export default BillingDetails
