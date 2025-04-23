import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { SlidersHorizontal } from "lucide-react"; // Optional: Icon for header

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-border w-full max-w-xs">
      <div className="p-5 border-b border-border flex items-center gap-2">
        <SlidersHorizontal className="w-5 h-5 text-cyan-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Filters</h2>
      </div>

      <div className="p-5 space-y-6">
        {Object.keys(filterOptions).map((keyItem, idx) => (
          <Fragment key={keyItem}>
            <div>
              <div className="flex items-center gap-2 mb-3">

                <h2 className=" text-lg font-semibold text-cyan-500 dark:text-gray-300 tracking-wide">
                  {keyItem}
                </h2>
              </div>
              <div className="grid gap-3">
                {filterOptions[keyItem].map((option) => (
                  <Label
                    key={option.id}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-all"
                  >
                    <Checkbox
                      checked={
                        filters && Object.keys(filters).length > 0 &&
                        filters[keyItem] && filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            {idx !== Object.keys(filterOptions).length - 1 && <Separator className="mt-4" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
