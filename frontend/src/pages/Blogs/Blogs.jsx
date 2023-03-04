import React, {useState, useEffect} from 'react';
import { Row, Container, Col } from 'reactstrap';
import './blogs.css';
import blogData from '../../components/BlogCard/blogData';
import BlogCard from '../../components/BlogCard/BlogCard';


const Blogs = () => {
  const [pageCount, setPageCount] = useState(0) ;
  const [page, setPage] = useState(0);
  useEffect(() => {
  const pages = Math.ceil(5 / 4); //later we will use backend data count
  setPageCount(pages ) ;
  }, [page]);

  return (
    <>
    <section className="blog__hero">
        <Container>
        <Row>
            <Col lg="12">
                <h1>Our adventure experts share top tips<br/>and insider knownedge</h1>
                <h3>Don't miss our latest blogs</h3>
            </Col>
        </Row>
        </Container>
    </section>
    <section>
        <Container className='blog__contanier'>
        <Row>
          <h1>Read our recent blogs</h1>
          {blogData?.map(blog=>(
            <Col lg="12" className='mb-4' key={blog.id}>
                <BlogCard blog={blog} />
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

export default Blogs