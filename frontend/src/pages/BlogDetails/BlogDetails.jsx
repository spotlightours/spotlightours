import React from 'react';
import './blogDetails.css';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';

import { BASE_URL } from '../../utils/config';
import useFetch from '../../hooks/useFetch';


const BlogDetails = () => {
    const {id} = useParams ();

    //this is an static data later we will call our API and load our data from database
    const { data:blog } = useFetch(`${BASE_URL}/blogs/${id}}`);
    console.log(blog);
    // destructure properties from tour object
    const { title, photo, desc, pubDate} = blog;

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
