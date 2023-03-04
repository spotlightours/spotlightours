import React ,{useState} from 'react'
import "./booking.css"
import { Container, Row, Col, Form, FormGroup,ListGroup, ListGroupItem, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({ tour, avgRating}) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [bookingInfo, setBookingInfo] = useState({
        userId: '01',
        userEmail:'example@gmail.com',
        fullName: '',
        phone: '',
        bookAt: '',
        guestSize: '',

    });
    const handleChange = e => {
        setBookingInfo(prev=>({...prev, [e.target.id]: e.target.value}))
    };

    const serviceFee = 0;
    const totalAmount = Number(price) * Number(bookingInfo.guestSize) + Number(serviceFee);

    //send booking info to the server
    const submitHandler = e => {
        e.preventDefault();
        navigate('/thankyou');
    };
  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center gap-1">
                 <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews.length})
            </span>
        </div>
        <div className="booking__form">
            <h5>Information</h5>
            <Form className = "booking__info-form" onSubmit={submitHandler}>
                <FormGroup>
                    <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                <input type = "number" placeholder= "Phone" id="phone" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className= "d-flex align-items-center gap-3">
                    <input type= "date" placeholder= "" id="bookAt" required onChange={handleChange}/>
                    <input type= "number" placeholder= "Guest" id="guestSize" required onChange={handleChange}/>
                </FormGroup>
                <div className="booking__bottom">
                    <ListGroup>
                        <ListGroupItem className = "border-0 px-0">
                        <h5 className = "d-flex align-items -center gap-1">
                        ${price} <i class="ri-close-line"></i> {bookingInfo.guestSize} person
                        </h5>
                        <span> ${price} </ span>
                        </ListGroupItem>
                        <ListGroupItem className = "border-0 px-0">
                        <h5>Service charge</h5>
                        <span> {serviceFee }</span>
                        </ListGroupItem>
                        <ListGroupItem className = "border-0 px-0 total">
                        <h5>Total</h5>
                        <span> ${totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <Button type='submit' className = "btn primary_btn w-100 mt-4">Book Now</Button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Booking