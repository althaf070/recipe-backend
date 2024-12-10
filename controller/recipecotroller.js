const recipies = require('../models/recipeScema')

exports.getAllCipeController=async(req,res)=> {
    console.log("inside controller");
  
    try {
        const allRecipies = await recipies.find()
        res.status(200).json(allRecipies)
    } catch (error) {
       res.status(401).json(error)
        
    }
    
}
exports.getRecipe=async(req,res)=> {
    const {id} = req.params
    try {
        const viewRecipes = await recipies.findById(id)
        res.status(200).json(viewRecipes)
    } catch (error) {
        res.status(401).json(err)
    }
}

exports.getAllRelatedRecipies=async(req,res)=> {
    const searchCuisines = req.query.searchCuisines
    const query={
        cuisine:{
            $regex:searchCuisines,$options:"i"
        }
    }
    try {
        const allRelatedRecipies = await recipies.find(query)
        res.status(200).json(allRelatedRecipies)
    } catch (error) {
       res.status(401).json(error)
        
    }
}

exports.addRecipeController=async (req,res) => {
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType}=req.body
    try {
        const existingRecipe = await recipies.findOne({name})
        if(existingRecipe){
            return res.status(200).json("Recipe already exists")
        }else {
            const newRecipe = new recipies({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res,status(401).json(err)
    }
}