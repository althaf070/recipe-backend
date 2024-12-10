const testmonials = require('../models/testmoialSchema')

exports.addTestimonialController = async(req,res)=> {
    const {name,email,message} = req.body

    try {
        const newMessage = new testmonials({name,email,message})
        console.log(message);
        
        await newMessage.save()
        res.status(200).json(newMessage)
    } catch (error) {
        res.status(401).json(error)
        console.log(error);
    }
}