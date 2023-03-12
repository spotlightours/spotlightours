import React from "react";
import "./showBookingCard.css";
import { Container, Row, Col } from "reactstrap";

const ShowBookingCard = ({ booking }) => {
  const { _id, tourName, fullName, guestSize, phone, bookAt, status } = booking;
  // date formate
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <Container className="show-booking__container">
      <Row className="show-booking__card">
        <Col lg="12">
          <div className="show-booking__info">
            <h2>{tourName}</h2>
            <h3>
              Cutomer Name:{" "}
              {fullName.charAt(0).toUpperCase() + fullName.slice(1)}
            </h3>
            <h3>No of Tickets: {guestSize}</h3>
            <h3>Phone No: {phone}</h3>
            <h3>
              Booked To: {new Date(bookAt).toLocaleDateString("en-US", options)}
            </h3>
            <p>
              Published On{" "}
              {new Date(bookAt).toLocaleDateString("en-US", options)}
            </p>
            <div>
              Status: <p className="show-booking_btn pending">{status}</p>
            </div>
            <p>
              Action: <button className="show-booking_btn done">Done</button>{" "}
              <button className="show-booking_btn cancel">Canceled</button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ShowBookingCard;
