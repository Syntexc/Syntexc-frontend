import mongoose, { Schema } from "mongoose";

const InquirySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a lastName"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide mobile no"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  }, 
});

const Inquiry =
  mongoose?.models?.inquires || mongoose.model("inquires", InquirySchema);
export default Inquiry;
