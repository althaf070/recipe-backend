const jwt= require('jsonwebtoken')
const jwtMiddileware= (req, res, next)=>{
console.log("inside jwtMiddileware");
try{
const token=req.headers["authorization"].split(" ")[1]
if (token) {
const jwtResponse=jwt.verify (token, process.env.jwt_password)
// console.log(jwtResponse);
req.payload=jwtResponse.userId
next()
}else{
res.status(401).json("please provide token")
} I
}catch{
res.status(403).json("please login")
}
}
module.exports =jwtMiddileware