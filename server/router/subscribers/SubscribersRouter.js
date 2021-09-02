const router = require('express').Router();
const Subscribers = require('../../schema/subscribers/subscribers');

router.route('/subscriber').post(async (req, res)=>{
    const Subscriber = new Subscribers({
        email : req.body.email,
        date: req.body.date
    }).save();
    res.json({success: true});
});

module.exports = router;