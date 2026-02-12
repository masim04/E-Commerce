import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartModal = ({ onClose }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 && <p className="text-gray-500">Cart is empty</p>}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm">Rs {item.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Total */}
        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rs {totalPrice}</span>
            </div>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-center text-sm text-gray-500 hover:underline"
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default CartModal;
