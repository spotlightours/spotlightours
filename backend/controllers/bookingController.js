import Booking from "../models/Booking.js";

// create a new tour

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({success: true, message: 'Booking Submitted', data: savedBooking});
    } catch (error) {
        res.status(500).json({success: false, message: 'internal server error'});
    }
};

//getSingle a Booking
export const getSingleBooking = async (req, res) => {
    try {
        const singleBooking = await Booking.findById(req.params.id);
        res.status(200).json({success: true, message: 'Booking found successfully', data: singleBooking});
    }
    catch (error) {
        res.status(404).json({success: false, message: 'Not found internal server error'});
    }
};

//getAll a Booking
export const getAllBooking = async (req, res) => {

    try {
        const allBooking = await Booking.find({});
        res.status(200).json({success: true, message: 'All Bookings found successfully', data: allBooking});
    }
    catch (error) {
        res.status(404).json({success: false, message: 'internal server error'});
    }
};
