const express = require("express");
const router = express.Router();
const campaignController = require("../controllers/campaignControllers");

router.get("/getCampaigns", campaignController.getCampaigns);

router.post("/createCampaign", campaignController.createCampaign);

router.put("/updateCampaign/:id", campaignController.updateCampaign);

router.delete("/deleteCampaign/:id", campaignController.deleteCampaign);

module.exports = router;
