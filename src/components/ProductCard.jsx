const ProductCard = ({ product, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(product)}
      className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">Rs {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
