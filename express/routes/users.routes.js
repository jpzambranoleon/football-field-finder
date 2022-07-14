const User = require("../models/user.model");
const router = require("express").Router();
const bycrypt = require("bcryptjs");

// update user
router.put("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bycrypt.genSalt(10);
                req.body.password = await bycrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body});
            res.status(200).json("Acount has been updated")
        } catch (err) {
           return res.status.apply(500).json(err); 
        }
    } else {
        return res.status(403).json("You can update only your account!");
    }
})
// delete user
// get a user

module.exports = router;