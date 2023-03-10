import React, { useState, useContext } from "react";
import "./admin.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../.././context/AuthContext";

const AddTours = () => {
  const [tourInfo, setTourInfo] = useState({
    title: undefined,
    city: undefined,
    price: undefined,
    maxGroupSize: undefined,
    desc: undefined,
    reviews: [],
    photo: undefined,
    featured: undefined,
  });
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setTourInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/tours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(tourInfo),
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }
      Navigate("/tourAdded");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          {user && user.role === "admin" ? (
            <Col lg="6" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__form">
                  <h2>Add New Tour</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Title"
                        required
                        id="title"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="City"
                        required
                        id="city"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Description"
                        required
                        id="desc"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="number"
                        placeholder="Price"
                        required
                        id="price"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="number"
                        placeholder="Max Group Size"
                        required
                        id="maxGroupSize"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="boolean"
                        placeholder="Featured: true or false"
                        required
                        id="featured"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Photo Link"
                        required
                        id="photo"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary_btn auth__btn"
                      type="submit"
                    >
                      Add New Tour
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          ) : (
            <h1>"Not Authorized"</h1>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default AddTours;
