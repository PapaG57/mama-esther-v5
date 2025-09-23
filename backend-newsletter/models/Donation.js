import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  nomDonateur: { type: String, required: true },
  montant: { type: Number, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
