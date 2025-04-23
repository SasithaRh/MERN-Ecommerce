import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg border border-border transition-transform hover:scale-[1.02] hover:shadow-xl rounded-xl overflow-hidden">
    <div onClick={() => handleGetProductDetails(product?._id)} className="cursor-pointer">
      <div className="relative group">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[280px] object-cover rounded-t-xl transition-all group-hover:brightness-90"
        />

        {/* Badges */}
        {product?.totalStock === 0 ? (
          <Badge className="absolute top-3 left-3 bg-red-600 text-white shadow-md">Out Of Stock</Badge>
        ) : product?.totalStock < 10 ? (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-white shadow-md">{`Only ${product?.totalStock} left`}</Badge>
        ) : product?.salePrice > 0 ? (
          <Badge className="absolute top-3 left-3 bg-pink-600 text-white shadow-md">Sale</Badge>
        ) : null}
      </div>

      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">{product?.title}</h2>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{categoryOptionsMap[product?.category]}</span>
          <span>{brandOptionsMap[product?.brand]}</span>
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`${
              product?.salePrice > 0 ? "line-through text-gray-400" : "text-primary"
            } text-lg font-semibold`}
          >
            ${product?.price}
          </span>
          {product?.salePrice > 0 && (
            <span className="text-lg font-bold text-rose-600">${product?.salePrice}</span>
          )}
        </div>
      </CardContent>
    </div>

    <CardFooter className="p-4 pt-0">
      {product?.totalStock === 0 ? (
        <Button className="w-full opacity-60 cursor-not-allowed" disabled>
          Out Of Stock
        </Button>
      ) : (
        <Button
          onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
        >
          Add to Cart
        </Button>
      )}
    </CardFooter>
  </Card>
  );
}

export default ShoppingProductTile;
