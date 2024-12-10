const express = require('express');
const recipeController = require('../controller/recipecotroller')
const testimonialController=require("../controller/testmonialController")
const userController=require("../controller/userController");
const jwtMiddileware = require('../middleware/jwtmiddleware');

const router = new express.Router();
router.post('/addtestmonial',testimonialController.addTestimonialController)

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)

router.get('/allrecipies',recipeController.getAllCipeController)
router.get('/recipies/:id/view',jwtMiddileware,recipeController.getRecipe)
router.get('/relatedrecipies',jwtMiddileware,recipeController.getRecipe)

router.post('/add-recipe',recipeController.addRecipeController)

module.exports = router