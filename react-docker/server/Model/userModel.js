import mongoose from "mongoose"
const DecorationSchema = new mongoose.Schema({
    flower:String,
    color:String,
    price:String,
    name:String
  
})

//create Event model
const Decoration = mongoose.model('Decoration',DecorationSchema)

const reservationSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    contact:String,
    date:{type:String,unique:true},
    time:String,
    guestno:String,
    message:String


})
const Reservation = mongoose.model('Reservation',reservationSchema)


export {Decoration,Reservation};  //export the model