import React, {useState, useEffect} from 'react';
import { Row, Container, Col } from 'reactstrap';
import './allTours.css';
import tourData from '../../components/FeaturedTour/tourData';
import TourCard from '../../components/FeaturedTour/TourCard';


const AllTours = () => {
  const [pageCount, setPageCount] = useState(0) ;
  const [page, setPage] = useState(0);
  useEffect(() => {
  const pages = Math.ceil(5 / 4); //later we will use backend data count
  setPageCount(pages ) ;
  }, [page]);

  return (
    <>
    <section className="all__tours">
        <Container>
        <Row>
            <Col lg="12">
                <h1>All Tours</h1>
            </Col>
        </Row>
        </Container>
    </section>
    <section>
        <Container>
        <Row>
          {tourData?.map(tour=>(
            <Col lg="4" className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
            </Col>
            ))}
            <Col lg="12 ">
              <div className="pagination d-flex align-items-center
              justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={page === number ? "active__page" : ""}
                  >
                  {number+1}
                </span>
                ))}
              </div>
            </Col>
        </Row>
        </Container>
    </section>
    </>
    

  )
}

export default AllTours