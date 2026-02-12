import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[90%] max-w-lg p-6">
        <img
          src={product.image}
          className="h-56 w-full object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-2">
          Rs {product.price}
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Close
          </button>
          <button
            onClick={() => {
              dispatch(addToCart(product));
              onClose();
            }}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
