const mongoose = require("mongoose");
const { Schema } = mongoose;

const CampaignSchema = new Schema({
  campaignName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  clicks: {
    type: String,
    default: "0",
  },
  location: {
    type: String,
    required: true,
  },
  campaignStatus: {
    type: String,
    default: "Live",
  },
  budget: {
    type: Number,
  },
  description: {
    type: String,
    default:
      "We are the best bakery around you.please like the page to get exciting offers and discount.",
  },
});

module.exports = mongoose.model("campaign", CampaignSchema);
