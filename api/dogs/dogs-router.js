const Dog = require('./dogs-model')
const router = require('express').Router() //router from router.get

// const express = require('express') // two line version
// const router = express.Router()

router.get('/', (req, res) => { //router from router.get
    Dog.find()
      .then(dogs => {
        res.status(200).json(dogs);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the dogs',
        });
      });
  });

module.exports = router 