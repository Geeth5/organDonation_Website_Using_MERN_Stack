const { request } = require('express')
const express = require('express')
const router = express.Router()
const Organs = require('./../models/organs.js')

//GETTING ALL ORGANS VIEWED
router.get('/', (req, res) => {
    Organs.find().sort({createdOnDate: 'desc'})
        .then(organs => res.json(organs))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//ADDING NEW ORGAN
router.post('/add', (req, res) => {
    const newOrgan = Organs({
        name: req.body.name,
        description: req.body.description,
        organ: req.body.organ
    })
    newOrgan.save()
        .then( () => res.json("New Organ posted successfully!"))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//FINDING ORGANS THROUGH ID
router.get('/:id', (req, res) => {
    Organs.findById(req.params.id)
        .then(organ => res.json(organ))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//UPDATING BY ID
router.put('/update/:id', (req, res) => {
    Organs.findById(req.params.id)
        .then(uporgan => {
            uporgan.name = req.body.name,
            uporgan.description = req.body.description,
            uporgan.organ = req.body.organ

            uporgan.save()
            .then( () => res.json("Organ Details updated successfully!"))
            .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//DELETING BY ID
router.delete('/:id', (req, res) => {
    Organs.findByIdAndDelete(req.params.id)
        .then( () => res.json("Organ posted was deleted successfully !"))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

module.exports = router