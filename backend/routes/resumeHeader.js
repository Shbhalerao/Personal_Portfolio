const express = require('express');
const {createTitle, getTitles, 
    getTitleById, deleteTitle, 
    updateTitle} = require('../controllers/resumeController')
const router = express.Router();


//Get all titles
router.get('/', getTitles);

//Get title by id
router.get('/:id', getTitleById);

//post title in resume. 
router.post('/', createTitle);

//delete title in resume. 
router.delete('/:id', deleteTitle);

//update title in resume. 
router.patch('/:id', updateTitle);


module.exports = router;