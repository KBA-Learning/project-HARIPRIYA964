import { Router } from "express";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import path from 'path';
import multer from "multer";
import Decoration from "../Model/adminModel.js";
import AdminDecoration from "../Model/adminModel.js";
import { Reservation } from "../Model/userModel.js";


 
dotenv.config();
const secretkey = process.env.Secretkey
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const adminRouter = Router();
adminRouter.use("/Images",
    express.static(path.join(__dirname, "public/Images"))
);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
    },
  });

const upload = multer({ storage }); 

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: false },
    contact: {
      type: String,
      validate: {
          validator: function (v) { return /\d{10}/.test(v); },
          message: props => `${props.value} is not a valid contact number!`
      }
  },
    email:{type: String, required: true,   match: [/.+\@.+\..+/, 'Please fill a valid email address']},
    userType: String
  
  });
  const User = mongoose.model("User", userSchema);

const imageSchema = new mongoose.Schema({
    destination:String,
    imageUrl:{type:String, require:true}
 })
 const Image = mongoose.model("Image",imageSchema);
 



// User registration
adminRouter.post("/signup", async (req, res) => {
  try {
    // const {} = userDetails
    const {firstname,lastname, username, email, password,contact } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    const found = await User.findOne({userType:'admin'})
   
    let userType = 'user'
    if(!found){
     userType='admin'
    }
    const result = await User.findOne({username:username})
    if(result){
      return res.status(400).json({message:"User already exists"})
    }
    else{
      const user = new User({
        firstname,
       lastname,
      username,
      email,
      password:newPassword,
      contact,
      userType 

      })
      await user.save()
      res.status(200).json({message:"resgisted successfully"})
    }
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// User login
adminRouter.post("/login", async (req, res) => {
  try{
const body = req.body
    const{username,password}=body
    console.log(body)
    const existingUser = await User.findOne({username:username})
    console.log(existingUser.userType)
    if(!existingUser){
        res.status(400).json({message:"Invalid username or password"})
    }
    else{
        const isValidPassword = await bcrypt.compare(password,existingUser.password)
        if(isValidPassword){
            const token = jwt.sign({username:existingUser.username,userType:existingUser.userType},secretkey,{expiresIn:'1h'})
            console.log(token)
            res.cookie('Authtoken',token,{
                httpOnly:true,
            })
            console.log(token);            
            res.status(200).json(existingUser.userType)
            

        }
        else{
            res.status(400).json({message:"Invalid username or password"})
        }
    }
}
catch(error){
    res.status(500).json(error)
}

})

adminRouter.post('/addImage',upload.single('file'),async(req,res)=>{
    try{
        const {destination} =req.body
        const existingImage = await Image.findOne({destination:destination}) 
        if(existingImage){
            res.status(400).json({message:"Image already exists"})
        }
        else{
            const newImage = new Image({
                destination:destination,
                image:`/Images/${req.file.filename}`
            });
            await newImage.save()
            res.status(200).json({message:"Image uploaded successfully"})
        }
    
    }
    catch(error){
        res.status(500).json(error)

    }
})


// Logout
adminRouter.get("/logout", (req, res) => {
  res.clearCookie("Authtoken");
  res.status(200).send("Logout successful");
  return res;
});



// adminRouter.get('/getallusers', async (req, res) => {
//   try {
//       const username = req.query.username;

//       if (!username) {
//           return res.status(400).json({ message: 'Username is required' });
//       }

     
//       const existing = await Decoration.find({ username: username });

//       if (existing.length>0) {
//           console.log('Viewing Decoration details:', existing);
//           res.status(200).json(existing); 
//       } else {
//           res.status(404).json({ message: 'No Decoration found. Please sign up first!' });
//           console.log('No Decoration found. Please sign up first!');
//       }
//   } catch (error) {
//       res.status(500).json({ message: 'Error retrieving Decoration', error: error.message });
//       console.error('Error retrieving Decoration:', error);
//   }
// });

adminRouter.post('/adddecoration',async(req,res)=>{
  const dec=req.body;
  const{flower,color,price}=dec;
  const existingdec=await AdminDecoration.findOne({flower:flower})
  if(existingdec)
      {
          res.send("this decoration is already added.you can update it")
      }
      else
      {
          const newdec= new AdminDecoration({
              flower,
              color,
              price
             });
             await newdec.save();
             console.log('new decoration added successfully ');
              res.send(" new decoration added successfully ");
              res.status(200).json(); 
      }

})
adminRouter.get('/getalldecoration', async (req, res) => {
  try {
      const allDecoration = await AdminDecoration.find(); // Fetch all decorations
      res.status(200).json(allDecoration); // Return all decoration data in JSON format
  } catch (error) {
      res.status(500).json({ message: 'Error retrieving decorations', error: error.message });
  }
});
adminRouter.get('/getalldecor', async (req, res) => {
  try {
    const allDecor = await Decoration.find(); 
    if(allDecor){
      res.status(200).json(allDecor);
    }else{
      res.status(404).json({ message: 'No Decoration found. Please sign up first!'})
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving decorations', error: error.message });
  }
})


adminRouter.get('/getallres', async (req, res) => {
  try {
    const allRes = await Reservation.find(); 
    if(allRes){
      res.status(200).json(allRes);
    }else{
      res.status(404).json({ message: 'No REservation found. Please sign up first!'})
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Reservations', error: error.message });
  }
})


export  {adminRouter,User};
