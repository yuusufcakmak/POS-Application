const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: true },
    paymentMode: { type: String, require: true },
    cartItem: { type: Array, require: true },
    subTotal: { type: Number, require: true },
    tax: { typee: Number, require: true },
    totalAmount: { typee: Number, require: true },
  },
  { timestamps: true }
);

const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
