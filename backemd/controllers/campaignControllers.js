const Campaign = require("../models/Campaign");

exports.getCampaigns = (req, res, next) => {
  try {
    console.log("Inside API call");
    Campaign.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("Internal server error");
  }
};

exports.createCampaign = (req, res, next) => {
  try {
    console.log("inside create function");
    const { campaignName, start, end, location, budget, description } = req.body;
    let date = Date();
    let arr = date.split(" ");
    date = arr[2] + " " + arr[1];

    const newCampaign = new Campaign({
      date: date,
      campaignName: campaignName,
      start: start,
      end: end,
      clicks: "30",
      location: location,
      budget: Number(budget),
      description: description,
    });
    newCampaign
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("Internal server error");
  }
};

exports.updateCampaign = (req, res, next) => {
  try {
    Note.findById(req.params.id)
      .then((result) => {
        if (!result) {
          return res.send("Not found");
        }
        if (result.userId.toString() !== req.body.user.id.toString()) {
          return res.send("Access denied");
        }
        let newNote = result;
        const { title, description, tag } = req.body;
        if (title) {
          newNote.title = title;
        }
        if (description) {
          newNote.description = description;
        }
        if (tag) {
          newNote.tag = tag;
        }
        Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
          .then((updatedNote) => {
            console.log("Note updated sucessfully");
            res.json(updatedNote);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("Internal server error");
  }
};

exports.deleteCampaign = (req, res, next) => {
  try {
    Note.findById(req.params.id)
      .then((result) => {
        if (!result) {
          return res.send("Not found");
        }
        if (result.userId.toString() !== req.body.user.id.toString()) {
          return res.send("Access denied");
        }
        Note.findByIdAndDelete(req.params.id)
          .then((deletedNote) => {
            console.log("Note deleted sucessfully");
            res.json(deletedNote);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("Internal server error");
  }
};
