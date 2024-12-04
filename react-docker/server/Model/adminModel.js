import mongoose from "mongoose";

const AdminDecorationSchema = new mongoose.Schema({
    flower: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
})
const AdminDecoration = mongoose.model('AdminDecoration', AdminDecorationSchema);
export default AdminDecoration;