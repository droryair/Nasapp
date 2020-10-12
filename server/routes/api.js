const express = require('express')
const Favorite = require('../model/Favorite-model')
const router = express.Router()

router.get(`/favorites`, async function (req, res) {
    if (req.query.id) {
        const id = req.query.id
        const results = await Favorite.findById( id )
        res.send([results])
    } else {
        const results = await Favorite.find({})
        res.send(results)
    }
})


router.post('/favorite', async function (req, res) {
    const favorite = req.body
    const title = favorite.title
    const img = favorite.img
    const explanation = favorite.explanation
    const f = new Favorite({
        title,
        img,
        explanation
    })
    await f.save()
    res.send(f)

})

router.delete(`/favorite`, async function (req, res) {
    const id = req.query.id
    await Favorite.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.send('deleted')
        }
    })
})


module.exports = router