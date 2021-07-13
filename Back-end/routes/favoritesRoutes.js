const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const { BadRequestError } = require("../expressError");

router.post("/:gameId/add", async function(req,res,next){
    const {gameId} = req.params;
    const {username} = req.body;
    try {
      const fave = await User.addFavorite(username, gameId);
      if(!fave) throw new BadRequestError("Duplicates not allowed")
      return res.json({success: "favorited"})
    } catch (e) {
      return next(e);
    }
  });

router.post("/:gameId/delete", async function(req, res, next){
    const {gameId} = req.params;
    const {username} = req.body;
    try {
      const fave = await User.removeFavorite(username, gameId);
      if(!fave) throw new BadRequestError("Game not found in favorites")
      return res.json({success: "favorite removed"})
    } catch (e) {
      return next(e);
    }
})

  module.exports = router;