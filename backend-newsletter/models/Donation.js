import { Schema, model } from "mongoose";

const donationSchema = new Schema({
  nomDonateur: {
    type: String,
    required: true,
    trim: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    required: true, // tu peux mettre false si tu veux le rendre facultatif
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("Donation", donationSchema);
