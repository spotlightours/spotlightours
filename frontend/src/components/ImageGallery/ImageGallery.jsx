import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import './imageGallery.css';
import Img1 from "../.././assets/images/home.jpeg";
import Img2 from "../.././assets/images/home.jpeg";
import Img3 from "../.././assets/images/home.jpeg";
import Img4 from "../.././assets/images/logo.jpg";
import Img5 from "../.././assets/images/home.jpeg";
import Img6 from "../.././assets/images/home.jpeg";
import Img7 from "../.././assets/images/home.jpeg";
import Img8 from "../.././assets/images/home.jpeg";
import Img9 from "../.././assets/images/home.jpeg";

const galleryImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9
];




const ImageGallery = () => {
  return (
    <Container>
    <Row>
        <Col lg="12" className='mb-5'>
            <h1 className='text-center'>All-Inclusive Tours</h1>
            <h2 className='text-center'>Visit All Our Customer Tours</h2>   
        </Col>
        <Col lg="12">
        <div name='destinations' className='destinations'>
           
                <div className="img-container">
                {galleryImages.map((image, i) => (
                        <img className={i%5 === 0 ? "span-3 image-grid-row-2" : ""}
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", borderRadius: "10px"}}
                            alt=""
                        />
                    ))}
                   
                </div>
        </div>
        </Col>

    </Row>
</Container>
  )
}

export default ImageGallery