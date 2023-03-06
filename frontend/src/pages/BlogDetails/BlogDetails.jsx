import React from 'react';
import './blogDetails.css';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import blogData from '../../components/BlogCard/blogData';

const BlogDetails = () => {
    const {title} = useParams ();

    //this is an static data later we will call our API and load our data from database
    const blog = blogData.find ( blog => blog.title === title);
    // destructure properties from tour object
    const { photo, desc, pubDate} = blog;

    function replaceWithBr(descStr) {
        return descStr.replace(/\n/g, "<br />");
      }
    

  return (
    <>
        <section>
            <Container  className='blog_details-section'>
                <Row>
                    <Col lg="8">
                        <div className="blog__content ">
                            <h1>{title}</h1>
                            <h6><em>Published on {pubDate}</em></h6>
                            <img src={photo} alt=""/>
                            <div className = "blog__info">
                                 <p dangerouslySetInnerHTML={{ __html: replaceWithBr(desc) }} />
                            </div>

                        </div>
                    </Col>
                    </Row>
            </Container>
        </section>
    </>
  )
}

export default BlogDetails
