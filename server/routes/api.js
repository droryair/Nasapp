const express = require('express')
const Favorite = require('../model/Favorite-model')
const router = express.Router()

router.get(`/favorites`, async function (req, res) {

    if (req.query.id) {
        const id = req.query.id
        console.log('id',id)
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

router.delete(`/favorite/:id`, async function (req, res) {
    const id = req.params.id
    console.log(id)
    await Favorite.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.send('deleted')
        }
    })
})



//Dummy data,only run once!
// const favorites=[
//     { id:'d0',title: 'moon0', img: "some image0" },
//     { id:'d1',title: 'moon1', img: "some image1" },
//     { id:'d2',title: 'moon2', img: "some image2" },
//     { id:'d3',title: 'moon3', img: "some image3" },


//   ]

//   favorites.forEach(t=>{
//     const fv = new Favorite({
//         title:f.title,
//         img:f.img,
//     })
//     fv.save()
//   })
//
module.exports = router