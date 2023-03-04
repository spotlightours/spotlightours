import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import tourData from './tourData';
import TourCard from './TourCard';

const FeaturedTour = () => {
  return (
    <Container>
        <Row>
            <Col lg="12" className='mb-5'>
                <h1 className='text-center'>Featured Tours</h1>
            </Col>
            
            
            {tourData?.map(tour=>(
            <Col lg="3" className='mb-4' key={tour.title}>
                <TourCard tour={tour} />
            </Col>
            ))}
    
        </Row>
    </Container>
    
  )
}

export default FeaturedTour