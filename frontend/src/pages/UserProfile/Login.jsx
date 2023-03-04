import React, {useState} from 'react'
import './login.css'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import userIcon from '../../assets/images/user.png';


const Login = () => {

  const [loginInfo, setLoginInfo] = useState({
    email:undefined,
    password:undefined
});

  const handleChange = e => {
    setLoginInfo(prev=>({...prev, [e.target.id]: e.target.value}))
};

  const handleClick = e => {
    e.preventDefault();
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth__btn" type='submit'>Login</Button>
                </Form>
                <p>Don't have an account?<Link to='/register'>Create</Link></p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login