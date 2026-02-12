import { useSelector } from "react-redux";

const Navbar = ({ onCartOpen }) => {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold">E-Commerce App</h1>

      <button
        onClick={onCartOpen}
        className="relative bg-gray-900 text-white px-4 py-2 rounded"
      >
        Cart
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
            {totalQty}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
