import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";

import { useToast } from "../ui/use-toast";

const initialFormData = {
  status: "",
};

function AdminOrderDetailsView() {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();



  function handleUpdateStatus(event) {
    event.preventDefault();
    const { status } = formData;

 
  }

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>233243</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label></Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>$324324</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label></Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>paypal</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3`}
              >
                confirmed
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
             
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>{user.userName}</span>
              
            </div>
          </div>
        </div>

        <div>
          <CommonForm
            formControls={[
              {
                label: "Order Status",
                name: "status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "inProcess", label: "In Process" },
                  { id: "inShipping", label: "In Shipping" },
                  { id: "delivered", label: "Delivered" },
                  { id: "rejected", label: "Rejected" },
                ],
              },
            ]}
            formData={formData}
            setFormData={setFormData}
            buttonText={"Update Order Status"}
            onSubmit={handleUpdateStatus}
          />
        </div>
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
