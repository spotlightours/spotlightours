import React,{useRef, useState} from 'react'
import './tourDetails.css';
import {Container, Row, Col, Form, ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import tourData from '../../components/FeaturedTour/tourData';
import Booking from '../../components/Booking/Booking';
import avatar from '../../assets/images/avatar.jpg';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const TourDetails = () => {
    const {_id} = useParams ();
    const reviewMsgRef = useRef('');
    const [reviewRating, setReviewReting] = useState(null);


    //this is an static data later we will call our API and load our data from database
    const { data: tour } = useFetch(`${BASE_URL}/tours/${_id}`);
    console.log('arsalan', _id);
    console.log('arsalan1', tour);
    // destructure properties from tour object
    const { title, photo, desc, price, maxGroupSize, reviews} = tour;
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : totalRating / reviews?.length;

    // date formate
    const options = { year: "numeric", month: "long", day: "numeric" }; 

    //submit request to the server
    const submitHandler = e =>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value
        alert(`${reviewText}, ${reviewRating}`)
        // later we will call our API and send this data to the server
    }


  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="tour__content ">
                        <img src={photo} alt=""/>
                        <div className = "tour__info">
                            <h2>{title}</h2>
                            <div className= "d-flex align-items-center gap-5">
                            <span className="tour__rating d-flex align-items-center gap-1">
                                <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}{totalRating === 0 ? ("Not Rated"): (<span>({reviews.length})</span>)}
                             </span>
                             <span>
                                <i className="ri-money-dollar-circle-line"></i> ${price} / per person
                             </span>
                             <span>
                                <i className="ri-group-line"></i> {maxGroupSize}
                             </span>
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                         </div>

                         {/* Tour Reviews */}
                         <div className = "tour__reviews mt-4 ">
                            <h4> Reviews ({reviews?.length} reviews)</h4>
                            <Form onSubmit={submitHandler}>
                            <div className = "d-flex align-items-center gap-3 mb-4 rating_group">
                                <span onClick={()=> setReviewReting(1)}><i className="ri-star-s-fill"></i></span>
                                <span onClick={()=> setReviewReting(2)}><i className="ri-star-s-fill "></i></span>
                                <span onClick={()=> setReviewReting(3)}><i className="ri-star-s-fill "></i></span>
                                <span onClick={()=> setReviewReting(4)}><i className="ri-star-s-fill"></i></span>
                                <span onClick={()=> setReviewReting(5)}><i className="ri-star-s-fill"></i></span>
                            </div>
                            <div className = "review__input">
                                <input type="text" required ref={reviewMsgRef} placeholder="share your thoughts " />
                                <button
                                className="btn primary_btn text-white"
                                type="submit">
                                Submit
                                </button>
                            </div>
                            </Form>
                            <ListGroup className= "user__reviews ">
                            {reviews?.map(review => (
                            <div className="review__item">
                            <img src={avatar} alt=""/>
                            <div className = "w-100 ">
                            <div className = "d-flex align-items-center justify-content-between ">
                            <div>
                            <h5>muhib</h5>
                            <p>
                            {new Date( "01-18-2023").toLocaleDateString(
                            "en-US", options
                            )}
                            </p>
                            </div>
                            <span className='d-flex align-items-center'>
                            <i className="ri-star-fill"></i> {review.rating}
                            </span>
                            </div>
                            <h6>{review.name}</h6>
                            </div>
                            </div>
                            ))}
                            </ListGroup>
                        </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <Booking tour={tour} avgRating={avgRating}/>
                    </Col>
                    </Row>
            </Container>
        </section>
    </>
  )
}

export default TourDetails
