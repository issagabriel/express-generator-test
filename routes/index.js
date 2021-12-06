var express = require('express');
var router = express.Router();
const Pet = require('../models/Pet')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is showing up');
});

// add a new pet to the database
router.post('/add-pet', function (req, res, next) {
  console.log('The new pet:', req.body)

  const petToCreate= new Pet({
    name: req.body.name,
    age: req.body.age,
    likesVet: req.body.likesVet,
    animal: req.body.pet
  })

  Pet.create(petToCreate).then(results=>{
    console.log('these are the results', results)
    res.json(results)
  })
  .catch((err) => {
    console.log('something went wrong', err)
    res.json(err)
  })
})

module.exports = router;
