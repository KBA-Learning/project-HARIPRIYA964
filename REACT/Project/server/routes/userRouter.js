import { Router } from "express";
import dotenv from 'dotenv';
import AdminDecoration from "../Model/adminModel.js";
import {Decoration,Reservation} from "../Model/userModel.js";


dotenv.config()
const userRoute =  Router();



userRoute.get('/alldecoration', async (req, res) => {
    try {
        const fullmenu = await AdminDecoration.find(); // Fetch all reservations
        if (fullmenu.length === 0) {
            res.status(200).json({ message: 'No dishes yet' });
        }else
       { res.status(200).json(fullmenu);} // Return all reservation data in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reservations', error: error.message });
    }
});
userRoute.post('/adddecor', async (req, res) => {
    try {
      const { flower, color, price } = req.body;
  
      if ( !flower || !color || !price) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
  
      const newDecoration = new Decoration({ flower, color, price });
      await newDecoration.save();
  
      res.status(201).json({ message: 'Decoration added successfully!', decoration: newDecoration });
    } catch (error) {
      console.error('Error adding decoration:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });


  userRoute.post('/addrsvp', async (req, res) => {
    try {       
            const {firstname,lastname,email,contact,date,time,guestno,message } = req.body

            const existingres = await Reservation.findOne({ date: date })
            if (existingres) {
                console.log("Reservation  Already Exist!!")
                return res.status(400).json({ message: "Reservation Already Exist!!" })
            }else{
                
                const newres = new Reservation({
                  firstname:firstname  ,
                  lastname:lastname,
                  email:email,
                  contact:contact,
                  date:date,
                  time:time,
                  guestno:guestno,
                  message:message
                })
    
                //save course  to mongo
                await newres.save()
                console.log("Reservation Addedd Successfully!!")
                return res.status(201).json({ message: "Reservation Addedd Successfully!!" })
            }          
       
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
})


export {userRoute,AdminDecoration}