import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { useDispatch, useSelector } from "react-redux";
import ShoppingOrderDetailsView from "./order-details";
import { Badge } from "../ui/badge";

function ShoppingOrders() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orderList, orderDetails } = useSelector((state) => state.shopOrder);



 

  useEffect(() => {
    if (orderDetails !== null) setOpenDetailsDialog(true);
  }, [orderDetails]);

  console.log(orderDetails, "orderDetails");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
                  <TableRow>
                    <TableCell>2321</TableCell>
                    <TableCell>122321</TableCell>
                    <TableCell>
                      <Badge
                        className={`py-1 px-3 bg-green-500`
                           }
                      >
                        confirmed
                      </Badge>
                    </TableCell>
                    <TableCell>$213213</TableCell>
                    <TableCell>
                      <Dialog
                        open={openDetailsDialog}
                        onOpenChange={
                          setOpenDetailsDialog
                        
                        }
                      >
                        <Button
                          onClick={() =>
                            setOpenDetailsDialog(true)
                          }
                        >
                          View Details
                        </Button>
                        <ShoppingOrderDetailsView  />
                      </Dialog>
                    </TableCell>
                  </TableRow>
               
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ShoppingOrders;
