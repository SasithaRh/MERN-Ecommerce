import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Pencil, Trash2 } from "lucide-react";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const isOnSale = product?.salePrice > 0;

  return (
    <Card className="w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden hover:scale-[1.02]">
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[250px] object-cover"
        />

        {/* Sale badge */}
        {isOnSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            SALE
          </span>
        )}
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-semibold truncate mb-1 text-gray-800 dark:text-gray-100">
          {product?.title}
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-md font-medium ${
              isOnSale ? "line-through text-gray-400" : "text-primary"
            }`}
          >
            ${product?.price}
          </span>
          {isOnSale && (
            <span className="text-lg font-bold text-red-500">
              ${product?.salePrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 border-t">
        <Button
          onClick={() => {
            setOpenCreateProductsDialog(true);
            setCurrentEditedId(product?._id);
            setFormData(product);
          }}
          variant="outline"
          className="flex items-center gap-1"
        >
          <Pencil size={16} /> Edit
        </Button>

        <Button
          onClick={() => handleDelete(product?._id)}
          variant="destructive"
          className="flex items-center gap-1"
        >
          <Trash2 size={16} /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AdminProductTile;
