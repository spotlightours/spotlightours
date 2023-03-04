import React from "react"; 
import { Link} from "react-router-dom"; 
import "./blogCard.css";
import {Container, Row, Col,} from 'reactstrap';

const BlogCard = ({ blog }) => {
const { id, title, desc, pubDate, photo} = blog;



return (
        <Container className="blog__container">
            <Row className="blog__card">
                <Col lg="2">
                    <div className="blog__img ">
                        <img src={photo} alt=""/>
                    </div>
                </Col>
                <Col lg="10">
                    <div className = "blog__info">
                        <h2>{title}</h2>
                        <span>Published On {pubDate}</span>
                        <p>{desc}</p>
                        <button className= "btn booking_btn">
                            <Link to= {`/blogs/${title}`}>Read More</Link>
                        </button>
                     </div>
                </Col>
                </Row>
        </Container>

);
};
export default BlogCard;