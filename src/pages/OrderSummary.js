import { useLocation, useNavigate } from "react-router-dom";

function OrderSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.customer || !state.cart) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl font-semibold text-red-600">
          Invalid order data.
        </p>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { customer, cart } = state;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧾 Order Summary</h1>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Address:</strong> {customer.address}
        </p>
        <p>
          <strong>Payment Method:</strong> {customer.payment}
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Cart Details</h2>
        <ul className="space-y-2">
          {cart.map((item, idx) => (
            <li key={idx} className="border-b pb-2">
              {item.quantity} × {item.title} @ ₹{item.price} = ₹
              {item.quantity * item.price}
            </li>
          ))}
        </ul>
        <p className="text-right mt-4 text-lg font-bold">Total: ₹{total}</p>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
