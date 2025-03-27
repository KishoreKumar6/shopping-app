
function CheckOutPage() {

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form className="space-x-4">
                <input type="text"
                    placeholder="Enter full Name"
                    className="border border-gray-300 p-2 w-full rounded"
                />

                <input type="email"
                    placeholder="Enter your Email"
                    className="border border-gray-300 p-2 mt-6 w-full rounded"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">
                    Place Order
                </button>
            </form>
        </div>
    )

}

export default CheckOutPage