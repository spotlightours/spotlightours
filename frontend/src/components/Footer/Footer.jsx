import React from 'react'
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom"; 
import logo from '../../assets/images/logo.jpg';
const quick__links=[
    {
    path: '/home',
    display: 'Desert_Safari'
    },
    {
    path: '/home',
    display: 'Desert_Experience'
    },
    {
    path: '/home',
    display: 'Overnight_Desert_Camping'
    },
    {
      path: '/home',
      display: 'Dune_Buggies'
      },
    ]

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Sac Um e ek eS LLL Chea CBD op Rosy 1 a
                        Commodi, enim.</p>

                        <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i className="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-instagram-line"></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                    <h5 className = " footer__link-title">Discover</h5>
                    <ListGroup className= "footer__quick-links ">
                        {quick__links.map((item, index) => (
                        <ListGroupItem key={index} className= "ps-0 border-0">
                        <Link to={item.path}>{item.display} </Link>
                        </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
                <Col lg="3">
                    <h5 className = " footer__link-title">Quick Links</h5>
                    <ListGroup className= "footer__quick-links ">
                        {quick__links.map((item, index) => (
                        <ListGroupItem key={index} className= "ps-0 border-0">
                        <Link to={item.path}>{item.display} </Link>
                        </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
                <Col lg="3">
                    <h5 className = " footer__link-title">Contact</h5>
                    <ListGroup className= "footer__quick-links ">
                        <ListGroupItem className= "ps-0 border-0 d-flex align-items-center gap-3">
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span>
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                Address:
                            </h6>
                            <p className='mb-0'>UEA</p>
                        </ListGroupItem>

                        <ListGroupItem className= "ps-0 border-0 d-flex align-items-center gap-3">
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span>
                                    <i className="ri-mail-line"></i>
                                </span>
                                Email:
                            </h6>
                            <p className='mb-0'>contact@spotlightours.com</p>
                        </ListGroupItem>

                        <ListGroupItem className= "ps-0 border-0 d-flex align-items-center gap-3">
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span>
                                    <i className="ri-phone-fill"></i>
                                </span>
                                Phone:
                            </h6>
                            <p className='mb-0'>0000000000000</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg="12">
                    <p className="copyright">© {year}, Spotlight Tours. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer